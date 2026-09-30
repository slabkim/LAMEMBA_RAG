# 17 — API Endpoints Design: AI DED LAMEMBA

Tanggal: 28 September 2026
Sumber: `14-DETAILED-WORKFLOW.md`, `15-DATABASE-SCHEMA.md`
Step: 7 — API Endpoints Design

Dokumen ini menspesifikasikan REST API contract antara Frontend (React) dan Backend (Node.js/Express) untuk sistem AI DED LAMEMBA. API menggunakan format JSON untuk payload dan response.

---

## A. STANDAR RESPONSE FORMAT

Semua response API dibungkus dalam format standar untuk memudahkan *error handling* di frontend.

**Success Response (200, 201):**
```json
{
  "data": { ... },       // Objek atau array data
  "meta": { ... }        // Opsional: pagination (page, limit, total)
}
```

**Error Response (400, 401, 403, 404, 500):**
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Pesan error untuk user",
    "details": [
      { "field": "email", "message": "Format email tidak valid" }
    ]
  }
}
```

---

## B. DAFTAR ENDPOINTS PER DOMAIN

### 1. Authentication & Session (`/api/auth`)

| Method | Endpoint | Auth | Deskripsi | Payload (Body) |
|--------|----------|------|-----------|----------------|
| POST   | `/login` | No   | Login user & dapatkan token/session | `{ email, password }` |
| POST   | `/logout`| Yes  | Hapus session aktif | - |
| POST   | `/forgot-password`| No | Kirim link reset password | `{ email }` |
| POST   | `/reset-password` | No | Reset password menggunakan token | `{ token, new_password }` |
| GET    | `/me`    | Yes  | Get profil user login saat ini | - |
| PUT    | `/me/password`| Yes| Ubah password (termasuk force change saat login pertama) | `{ old_password, new_password }` |

### 2. Users Management (`/api/users`) - *Admin Only*

| Method | Endpoint | Auth | Deskripsi | Payload (Body) |
|--------|----------|------|-----------|----------------|
| GET    | `/`      | Admin| List semua users (dengan filter/pagination) | - |
| POST   | `/`      | Admin| Buat user baru (kirim email temp password) | `{ email, name, role, status }` |
| GET    | `/:id`   | Admin| Detail user | - |
| PUT    | `/:id`   | Admin| Update user (termasuk nonaktifkan) | `{ name, role, status }` |

### 3. Projects & Workspaces (`/api/projects`)

| Method | Endpoint | Auth | Deskripsi | Payload (Body) |
|--------|----------|------|-----------|----------------|
| GET    | `/`      | Yes  | List projects (Admin lihat semua, role lain hanya assign) | - |
| POST   | `/`      | Admin| Buat project baru & inisialisasi DED draft | `{ name, upps, program_type, year, instrument_version_id, status }` |
| GET    | `/:id`   | Yes* | Detail project & statistik dashboard | - |
| PUT    | `/:id`   | Admin| Update meta project | `{ status, ... }` |
| GET    | `/:id/members` | Yes* | List anggota tim dalam project | - |
| POST   | `/:id/members` | Admin| Assign user ke project | `{ user_id, role }` |
| DELETE | `/:id/members/:userId`| Admin| Remove user dari project | - |

*\*Yes = Perlu pengecekan project membership*

### 4. Instrument Configuration (`/api/instruments`) - *Admin Only*

| Method | Endpoint | Auth | Deskripsi | Payload (Body) |
|--------|----------|------|-----------|----------------|
| GET    | `/`      | Admin| List instruments | - |
| POST   | `/import`| Admin| Bulk import struktur via JSON template | File JSON |
| GET    | `/:id/versions` | Admin| List versi dari instrumen | - |
| POST   | `/versions/:id/activate` | Admin| Aktifkan versi (arsip versi aktif sebelumnya) | - |
| GET    | `/versions/:id/tree` | Admin| Dapatkan full struktur (Kriteria s/d Evidence) | - |

### 5. Documents & Evidence (`/api/documents`)

| Method | Endpoint | Auth | Deskripsi | Payload (Body) |
|--------|----------|------|-----------|----------------|
| GET    | `/?projectId={id}` | Yes* | List dokumen di suatu project | - |
| POST   | `/upload`| Yes* | Upload dokumen baru & trigger RAG pipeline | `multipart/form-data: file, project_id, type, criteria_ids[]` |
| GET    | `/:id`   | Yes* | Meta dokumen & status processing | - |
| POST   | `/:id/retry`| Yes* | Retry pemrosesan dokumen yang FAILED | - |
| DELETE | `/:id`   | Admin| Hapus dokumen & vektor index-nya | - |
| GET    | `/chunks?projectId={id}` | Yes* | Search/List chunks di Knowledge Base | - |

### 6. DED Authoring (`/api/ded`)

| Method | Endpoint | Auth | Deskripsi | Payload (Body) |
|--------|----------|------|-----------|----------------|
| GET    | `/?projectId={id}` | Yes* | DED Overview (progress per kriteria/indikator) | - |
| POST   | `/generate`| Yes* | Trigger Gemini AI Draft Pipeline (RAG) | `{ project_id, indicator_id, top_k, instruction }` |
| GET    | `/responses/:id` | Yes* | Ambil narasi DED, evidence refs, dan comments | - |
| PUT    | `/responses/:id` | Yes* | Save draft (Auto versioning) | `{ current_text, evidence_refs }` |
| POST   | `/responses/:id/submit`| Yes* | Submit DED untuk direview (Status -> SUBMITTED) | - |
| GET    | `/responses/:id/versions`| Yes* | Ambil history versi | - |
| GET    | `/responses/:id/compare`| Yes* | Compare 2 versi (diffing) | `?v1=1&v2=2` |

### 7. Review & Approval (`/api/review`)

| Method | Endpoint | Auth | Deskripsi | Payload (Body) |
|--------|----------|------|-----------|----------------|
| GET    | `/pending` | Rev. | List DED responses yang butuh review user ini | - |
| POST   | `/:responseId/approve`| Rev. | Setujui DED (Status -> APPROVED) | `{ comment }` |
| POST   | `/:responseId/request-revision`| Rev. | Minta revisi DED | `{ comment, specific_issues[] }` |
| POST   | `/:responseId/comment` | Rev. | Tambah komentar tanpa ubah status | `{ content }` |
| POST   | `/projects/:id/approve`| Rev. | Final approval project keseluruhan | - |

### 8. Research & Evaluation (`/api/research`) - *Researcher/Admin*

| Method | Endpoint | Auth | Deskripsi | Payload (Body) |
|--------|----------|------|-----------|----------------|
| POST   | `/datasets/import` | Res. | Import Q&A Dataset | `multipart/form-data (CSV/JSON)` |
| GET    | `/datasets/:id` | Res. | Detail dataset & test cases | - |
| GET    | `/experiments` | Res. | List history eksperimen | - |
| POST   | `/experiments` | Res. | Buat eksperimen baru | `{ dataset_id, name, method, config }` |
| POST   | `/experiments/:id/queue`| Res. | Jalankan eksperimen di background | - |
| POST   | `/retrieval-inspect` | Res. | Run retrieval test query manual | `{ query, topK, criteria, projectId }` |
| GET    | `/ragas/:experimentId` | Res. | Dapatkan matriks evaluasi RAGAS (F, AR, CP, CR) | - |

---

## C. INTEGRASI GEMINI (RAG PIPELINE SPEC)

Pemanggilan API `/api/ded/generate` akan memicu pipeline berikut di sisi Node.js Backend:

1. **Query Formulation:** Backend merangkai query dari Deskripsi Indikator + Syarat Evidence.
2. **Hybrid Retrieval:** 
   - Pencarian Vector Database (Cosine Similarity).
   - Pencarian BM25 (Keyword).
3. **Fusion (RRF):** Kombinasi hasil menggunakan Reciprocal Rank Fusion.
4. **Context Construction:** Mengambil *teks chunk* dari Top-K dokumen.
5. **LLM Prompting (Gemini SDK):**
   ```text
   Anda adalah Asisten Akreditasi LAMEMBA.
   Buat narasi DED untuk Indikator: [NAMA_INDIKATOR].
   Gunakan HANYA fakta dari dokumen berikut. Sertakan kutipan [CHUNK_ID].
   
   KONTEKS:
   {context_chunks}
   ```
6. **Streaming / Sync:** API ini disarankan menggunakan *Server-Sent Events (SSE)* jika durasi generate LLM lama (>10 detik), atau polling. Untuk tahap awal (MVP), menggunakan HTTP biasa dengan timeout yang diperpanjang (60s).

---

## D. KEAMANAN & AUTHORIZATION

Setiap Endpoint memvalidasi 3 layer:
1. **Validasi JWT Token:** Header `Authorization: Bearer <token>`.
2. **Role Verification:** Memastikan `req.user.role` sesuai dengan Auth kolom di atas.
3. **Resource Ownership / Project Membership:** Jika URL mengandung `projectId` atau resource ID yang berada di dalam project, backend melakukan query ke tabel `ProjectMember` untuk memastikan user adalah bagian dari proyek tersebut sebelum mengembalikan data.