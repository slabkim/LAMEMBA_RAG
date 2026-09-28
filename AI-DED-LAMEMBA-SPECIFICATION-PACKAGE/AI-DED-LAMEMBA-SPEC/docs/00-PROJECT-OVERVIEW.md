# AI DED LAMEMBA — Project Overview & Master Specification

## 1. Status Dokumen

- **Status:** Baseline desain teknis
- **Tujuan:** Menjadi acuan bersama untuk UI/UX, database, backend, AI/RAG, testing, dan AI coding agent.
- **UI baseline:** `/fontend` yang diberikan pengguna.
- **Domain baseline:** dokumen instrumen/standar LAMEMBA yang diberikan pada project.
- **Model LLM:** Gemini, sesuai keputusan project.
- **Istilah dokumen utama:** DED (Dokumen Evaluasi Diri), bukan LED.

> Dokumen ini membedakan dengan jelas antara **implemented/current UI** yang benar-benar ditemukan pada source `/frontend` dan **planned/target functionality** yang belum tersedia pada source tersebut.

---

## 2. Tujuan Sistem

AI DED LAMEMBA adalah aplikasi berbasis web untuk membantu pengelolaan proyek akreditasi dan penyusunan DED secara evidence-first. Sistem mengelola proyek, dokumen sumber, evidence, knowledge base, struktur instrumen akreditasi, penyusunan DED, proses review manusia, serta komponen riset untuk mengevaluasi retrieval dan generasi AI.

Sistem tidak boleh memperlakukan LLM sebagai sumber fakta utama. LLM digunakan untuk membantu menyusun narasi berdasarkan konteks evidence yang berhasil ditemukan dan diberikan oleh sistem.

---

## 3. Prinsip Arsitektur Utama

1. **UI/UX consistency:** implementasi baru mengikuti visual baseline dari `/frontend`.
2. **Configuration-driven accreditation:** kriteria, dimensi, indikator, evidence requirement, dan struktur DED tidak boleh di-hardcode sebagai logika bisnis yang sulit diubah.
3. **Evidence-first:** jawaban DED harus dapat ditelusuri ke dokumen/chunk/evidence.
4. **Human-in-the-loop:** hasil AI adalah draft yang dapat diperiksa, diedit, direvisi, dan disetujui manusia.
5. **Versioning:** project, instrumen, DED, dokumen, dan hasil eksperimen harus dapat dilacak versinya jika memang berubah.
6. **RBAC + project authorization:** role saja tidak cukup; akses juga harus mempertimbangkan project membership dan permission.
7. **Auditability:** aksi penting dicatat dalam audit log.
8. **Separation of concerns:** frontend tidak boleh mengakses database secara langsung.
9. **No fabricated evidence:** sistem tidak boleh membuat citation, nomor halaman, nama file, atau evidence yang tidak tersedia.
10. **Agent-safe development:** AI coding agent wajib membaca specification sebelum mengubah kode.

---

## 4. Role Target

Role target sistem:

- **Admin:** mengelola sistem, user/access, project, instrumen/configuration, dan fungsi administratif.
- **Penyusun DED:** mengelola pekerjaan penyusunan DED dalam project yang diberikan kepadanya.
- **Reviewer/Asesor:** melakukan review terhadap draft, evidence, komentar, revisi, dan approval pada project yang ditugaskan.
- **Researcher/Peneliti:** mengelola dataset, experiment, retrieval inspection, dan evaluasi RAG/LLM.

Catatan: source UI saat ini terutama menunjukkan shell dan halaman yang berlabel Admin/Research Prototype. Halaman operasional untuk role Penyusun dan Reviewer belum ditemukan dalam ZIP sehingga harus diperlakukan sebagai **planned UI**, bukan sebagai fitur yang sudah tersedia.

---

## 5. Arsitektur Logis

```text
React Frontend
    |
    | HTTPS / JSON API
    v
Backend API
    |
    +-- Authentication & Session
    +-- Authorization / RBAC
    +-- Project Service
    +-- Document Service
    +-- Instrument Service
    +-- DED Service
    +-- Review Service
    +-- Research Service
    +-- RAG Service
    +-- AI/Gemini Service
    +-- Notification Service
    +-- Audit Service
    |
    +--------------------+
    |                    |
Relational DB       Object/File Storage
    |                    |
    +---- RAG Metadata --+
             |
       Vector / Search Index
```

Teknologi konkret backend/database belum ditetapkan oleh source UI. Pemilihan framework dan vendor infrastruktur harus dilakukan secara eksplisit sebelum implementasi produksi.

---

## 6. Urutan Implementasi

### Fase 1 — UI/UX

- inventaris page existing;
- inventaris component;
- shared layout;
- responsive behavior;
- state loading/error/empty;
- role-specific navigation.

### Fase 2 — Domain & Database

- entity discovery;
- ERD;
- data dictionary;
- constraints;
- indexes;
- migrations;
- seed data untuk development.

### Fase 3 — Backend

- authentication;
- session;
- RBAC;
- project authorization;
- CRUD;
- document processing;
- DED workflow;
- review workflow;
- audit log.

### Fase 4 — RAG & Gemini

- ingestion;
- extraction;
- normalization;
- chunking;
- indexing;
- retrieval;
- context assembly;
- Gemini generation;
- evidence traceability.

### Fase 5 — Testing

- unit;
- integration;
- authorization;
- document pipeline;
- RAG evaluation;
- end-to-end workflow;
- security tests.

---

## 7. Source of Truth

Prioritas referensi saat agent bekerja:

1. instruksi eksplisit pengguna pada task aktif;
2. `AGENTS.md`;
3. specification dalam folder `docs/`;
4. implementasi UI baseline `/frontend`;
5. dokumen domain/instrumen LAMEMBA yang disediakan;
6. kode existing yang tidak bertentangan dengan specification.

Jika terdapat konflik, agent **tidak boleh menebak**. Agent harus menghentikan perubahan yang berisiko dan meminta keputusan manusia atau mengikuti keputusan yang telah dicatat pada specification terbaru.
