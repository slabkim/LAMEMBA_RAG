# Database Design & Data Dictionary — AI DED LAMEMBA

## 1. Tujuan Database

Database menyimpan identitas pengguna, akses, project akreditasi, konfigurasi instrumen, dokumen/evidence, knowledge base metadata, DED, review, penelitian/eksperimen, notifikasi, dan audit trail.

Database harus dirancang berdasarkan **domain entity**, bukan berdasarkan nama halaman UI.

---

# 2. Database Design Principles

1. Primary key menggunakan identifier unik.
2. Foreign key wajib digunakan untuk relasi antar entity.
3. Timestamp minimal: `created_at`, `updated_at` untuk entity mutable.
4. Data yang memiliki lifecycle harus memiliki status/state yang jelas.
5. Data penting yang harus dapat diaudit tidak boleh dihapus permanen tanpa policy.
6. Instrument dan DED harus version-aware.
7. File binary tidak wajib disimpan sebagai blob di relational database; metadata dan storage key disimpan di database.
8. Embedding/vector dapat berada pada vector store; database menyimpan referensi dan metadata.
9. Semua resource project-scoped wajib memiliki jalur authorization ke project.
10. Unique constraint harus digunakan untuk mencegah duplicate business entity.

---

# 3. Logical Entity Map

```text
User
 ├── UserRole ── Role ── Permission
 └── ProjectMember ── Project
                       ├── StudyProgram
                       ├── Institution
                       ├── Documents
                       │      ├── DocumentVersions
                       │      ├── ProcessingRuns
                       │      └── DocumentChunks
                       ├── KnowledgeBase
                       ├── DED
                       │      ├── DEDSections
                       │      ├── DEDResponses
                       │      └── EvidenceReferences
                       ├── Reviews
                       └── Experiments

Instrument
 └── InstrumentVersion
       └── Criterion
            └── Dimension
                 └── Indicator
                      └── EvidenceRequirement
```

---

# 4. Data Dictionary Convention

Tipe data di bawah adalah **logical SQL types**. Framework/DBMS final dapat menyesuaikan syntax, tetapi makna field harus dipertahankan.

`PK` = primary key, `FK` = foreign key, `NN` = not null, `UQ` = unique.

---

# 5. Authentication & Access Tables

## 5.1 users

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Identitas user |
| email | VARCHAR(320) | UQ | NO | Email login |
| password_hash | VARCHAR(255) | | YES | Hash password; null untuk account yang hanya menggunakan external identity |
| full_name | VARCHAR(200) | | NO | Nama lengkap |
| status | VARCHAR(30) | | NO | ACTIVE, INVITED, SUSPENDED, DISABLED |
| email_verified_at | TIMESTAMP | | YES | Waktu verifikasi email |
| last_login_at | TIMESTAMP | | YES | Login terakhir |
| created_at | TIMESTAMP | | NO | Waktu dibuat |
| updated_at | TIMESTAMP | | NO | Waktu diperbarui |
| deleted_at | TIMESTAMP | | YES | Soft delete bila policy mengizinkan |

### Rules

- Email harus dinormalisasi sebelum comparison.
- Password tidak pernah disimpan plaintext.
- User disabled tidak boleh membuat session baru.

## 5.2 roles

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | ID role |
| code | VARCHAR(50) | UQ | NO | ADMIN, DED_AUTHOR, REVIEWER, RESEARCHER |
| name | VARCHAR(100) | | NO | Nama role |
| description | TEXT | | YES | Deskripsi |
| is_system_role | BOOLEAN | | NO | Menandai role bawaan |
| created_at | TIMESTAMP | | NO | Waktu dibuat |
| updated_at | TIMESTAMP | | NO | Waktu diperbarui |

## 5.3 permissions

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | ID permission |
| code | VARCHAR(100) | UQ | NO | users.view, ded.generate, dst. |
| resource | VARCHAR(80) | | NO | Resource target |
| action | VARCHAR(50) | | NO | view/create/update/delete/generate/review/dst. |
| description | TEXT | | YES | Penjelasan |
| created_at | TIMESTAMP | | NO | Waktu dibuat |

## 5.4 user_roles

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| user_id | UUID | PK/FK | NO | User |
| role_id | UUID | PK/FK | NO | Role |
| assigned_at | TIMESTAMP | | NO | Waktu assignment |
| assigned_by | UUID | FK | YES | Admin yang memberi role |

Unique: `(user_id, role_id)`.

## 5.5 role_permissions

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| role_id | UUID | PK/FK | NO | Role |
| permission_id | UUID | PK/FK | NO | Permission |
| created_at | TIMESTAMP | | NO | Waktu dibuat |

Unique: `(role_id, permission_id)`.

## 5.6 sessions

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Session record |
| user_id | UUID | FK | NO | User pemilik session |
| session_hash | VARCHAR(128) | UQ | NO | Hash session secret; raw token tidak disimpan |
| created_at | TIMESTAMP | | NO | Session dibuat |
| expires_at | TIMESTAMP | | NO | Expiry |
| last_seen_at | TIMESTAMP | | NO | Aktivitas terakhir |
| revoked_at | TIMESTAMP | | YES | Revoke time |
| ip_hash | VARCHAR(128) | | YES | Hash IP bila diperlukan untuk security telemetry |
| user_agent | TEXT | | YES | Browser/device metadata |

---

# 6. Academic / Project Tables

## 6.1 institutions

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Institusi |
| name | VARCHAR(255) | | NO | Nama perguruan tinggi/instansi |
| code | VARCHAR(100) | UQ | YES | Kode institusi |
| address | TEXT | | YES | Alamat |
| created_at | TIMESTAMP | | NO | Waktu dibuat |
| updated_at | TIMESTAMP | | NO | Waktu diperbarui |

## 6.2 study_programs

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Program studi |
| institution_id | UUID | FK | NO | Institusi |
| upps_name | VARCHAR(255) | | YES | Unit pengelola program studi |
| name | VARCHAR(255) | | NO | Nama PS |
| level | VARCHAR(20) | | NO | S1/S2/S3 |
| code | VARCHAR(100) | | YES | Kode PS |
| created_at | TIMESTAMP | | NO | Waktu dibuat |
| updated_at | TIMESTAMP | | NO | Waktu diperbarui |

## 6.3 projects

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Project akreditasi |
| institution_id | UUID | FK | NO | Institusi |
| study_program_id | UUID | FK | NO | PS |
| name | VARCHAR(255) | | NO | Nama project |
| accreditation_year | SMALLINT | | NO | Tahun akreditasi |
| status | VARCHAR(30) | | NO | PREPARATION, ACTIVE, ARCHIVED |
| instrument_version_id | UUID | FK | NO | Versi instrumen yang digunakan |
| created_by | UUID | FK | NO | User pembuat |
| created_at | TIMESTAMP | | NO | Waktu dibuat |
| updated_at | TIMESTAMP | | NO | Waktu diperbarui |
| archived_at | TIMESTAMP | | YES | Waktu arsip |

Unique/business rule: satu project harus memiliki instrument version yang eksplisit.

## 6.4 project_members

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Membership ID |
| project_id | UUID | FK | NO | Project |
| user_id | UUID | FK | NO | User |
| project_role | VARCHAR(50) | | NO | PROJECT_ADMIN, AUTHOR, REVIEWER, VIEWER |
| status | VARCHAR(30) | | NO | ACTIVE, INVITED, REMOVED |
| joined_at | TIMESTAMP | | YES | Waktu bergabung |
| created_at | TIMESTAMP | | NO | Waktu dibuat |
| updated_at | TIMESTAMP | | NO | Waktu diperbarui |

Unique aktif: `(project_id, user_id)`.

---

# 7. Instrument Configuration Tables

## 7.1 instruments

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Instrumen |
| code | VARCHAR(100) | UQ | NO | Kode instrumen |
| name | VARCHAR(255) | | NO | Nama instrumen |
| organization | VARCHAR(255) | | NO | Organisasi pemilik/penyelenggara |
| status | VARCHAR(30) | | NO | DRAFT, ACTIVE, ARCHIVED |
| created_at | TIMESTAMP | | NO | Waktu dibuat |
| updated_at | TIMESTAMP | | NO | Waktu diperbarui |

## 7.2 instrument_versions

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Version ID |
| instrument_id | UUID | FK | NO | Instrumen |
| version | VARCHAR(50) | | NO | Contoh v2025 |
| status | VARCHAR(30) | | NO | DRAFT, PUBLISHED, ARCHIVED |
| effective_from | DATE | | YES | Berlaku mulai |
| effective_to | DATE | | YES | Berlaku sampai |
| source_document_id | UUID | FK | YES | Dokumen sumber jika tersedia sebagai document |
| change_summary | TEXT | | YES | Ringkasan perubahan |
| created_by | UUID | FK | NO | Pembuat |
| created_at | TIMESTAMP | | NO | Waktu dibuat |
| published_at | TIMESTAMP | | YES | Waktu publish |

Rule: version `PUBLISHED` tidak diedit langsung; perubahan menghasilkan version baru.

## 7.3 criteria

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Criterion |
| instrument_version_id | UUID | FK | NO | Version |
| code | VARCHAR(50) | | NO | Kode/nomor kriteria |
| name | VARCHAR(255) | | NO | Nama kriteria |
| description | TEXT | | YES | Deskripsi |
| display_order | INT | | NO | Urutan |
| status | VARCHAR(30) | | NO | ACTIVE/INACTIVE |
| created_at | TIMESTAMP | | NO | Waktu dibuat |
| updated_at | TIMESTAMP | | NO | Waktu diperbarui |

Unique: `(instrument_version_id, code)`.

## 7.4 dimensions

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Dimension |
| criterion_id | UUID | FK | NO | Parent criterion |
| code | VARCHAR(50) | | NO | Kode |
| name | VARCHAR(255) | | NO | Nama |
| description | TEXT | | YES | Deskripsi |
| display_order | INT | | NO | Urutan |
| status | VARCHAR(30) | | NO | Status |

Unique: `(criterion_id, code)`.

## 7.5 indicators

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Indicator |
| dimension_id | UUID | FK | NO | Parent dimension |
| code | VARCHAR(80) | | NO | ID indikator |
| title | VARCHAR(500) | | NO | Judul |
| description | TEXT | | YES | Deskripsi/panduan |
| assessment_guidance | TEXT | | YES | Panduan asesmen jika tersedia |
| display_order | INT | | NO | Urutan |
| status | VARCHAR(30) | | NO | Status |

Unique: `(dimension_id, code)`.

## 7.6 evidence_requirements

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Requirement |
| indicator_id | UUID | FK | NO | Indicator |
| name | VARCHAR(255) | | NO | Nama requirement |
| description | TEXT | | NO | Evidence yang diperlukan |
| source_type | VARCHAR(50) | | YES | PDF/DOCX/XLSX/LINK/OTHER |
| required | BOOLEAN | | NO | Wajib/tidak |
| validation_rule | JSONB | | YES | Rule validasi metadata |
| created_at | TIMESTAMP | | NO | Waktu dibuat |

---

# 8. Document & Knowledge Base Tables

## 8.1 documents

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Document |
| project_id | UUID | FK | NO | Project |
| name | VARCHAR(500) | | NO | Nama file |
| document_type | VARCHAR(50) | | NO | DED, DKPS, EVIDENCE, INSTRUMENT, OTHER |
| mime_type | VARCHAR(150) | | NO | MIME |
| size_bytes | BIGINT | | NO | Ukuran |
| checksum_sha256 | CHAR(64) | | NO | Checksum |
| storage_key | TEXT | | NO | Lokasi file storage |
| status | VARCHAR(40) | | NO | UPLOADED, PROCESSING, PROCESSED, FAILED, ARCHIVED |
| uploaded_by | UUID | FK | NO | User |
| created_at | TIMESTAMP | | NO | Waktu upload |
| updated_at | TIMESTAMP | | NO | Update |

## 8.2 document_versions

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Version |
| document_id | UUID | FK | NO | Parent document |
| version_no | INT | | NO | Nomor version |
| storage_key | TEXT | | NO | File version |
| checksum_sha256 | CHAR(64) | | NO | Checksum |
| created_by | UUID | FK | NO | User |
| created_at | TIMESTAMP | | NO | Waktu |

Unique: `(document_id, version_no)`.

## 8.3 document_processing_runs

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Processing run |
| document_id | UUID | FK | NO | Document |
| attempt_no | INT | | NO | Attempt ke-n |
| status | VARCHAR(30) | | NO | QUEUED, RUNNING, COMPLETED, FAILED, CANCELLED |
| current_stage | VARCHAR(50) | | YES | EXTRACTING/NORMALIZING/CHUNKING/EMBEDDING/BM25/RAG_SYNC |
| started_at | TIMESTAMP | | YES | Mulai |
| completed_at | TIMESTAMP | | YES | Selesai |
| error_code | VARCHAR(100) | | YES | Kode error |
| error_message | TEXT | | YES | Error internal yang telah disanitasi untuk UI |
| created_at | TIMESTAMP | | NO | Waktu dibuat |

## 8.4 document_chunks

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Chunk ID |
| document_id | UUID | FK | NO | Document |
| chunk_no | INT | | NO | Urutan chunk |
| text | TEXT | | NO | Isi chunk |
| page_number | INT | | YES | Halaman |
| section_title | VARCHAR(500) | | YES | Section |
| metadata | JSONB | | YES | Metadata tambahan |
| token_count | INT | | YES | Estimasi token |
| status | VARCHAR(30) | | NO | PENDING, INDEXED, NEEDS_REVIEW, FAILED |
| created_at | TIMESTAMP | | NO | Waktu |

Unique: `(document_id, chunk_no)`.

## 8.5 knowledge_bases

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | KB |
| project_id | UUID | FK | NO | Project |
| name | VARCHAR(255) | | NO | Nama KB |
| status | VARCHAR(30) | | NO | ACTIVE, INDEXING, ERROR, ARCHIVED |
| retrieval_version | VARCHAR(50) | | NO | Version pipeline |
| last_indexed_at | TIMESTAMP | | YES | Index terakhir |
| created_at | TIMESTAMP | | NO | Waktu |
| updated_at | TIMESTAMP | | NO | Waktu |

## 8.6 chunk_index_status

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Record |
| chunk_id | UUID | FK | NO | Chunk |
| index_type | VARCHAR(30) | | NO | VECTOR / BM25 |
| status | VARCHAR(30) | | NO | PENDING / INDEXED / FAILED |
| external_index_id | TEXT | | YES | ID di vector/search store |
| indexed_at | TIMESTAMP | | YES | Waktu index |
| error_message | TEXT | | YES | Error |

Unique: `(chunk_id, index_type)`.

---

# 9. DED Tables

## 9.1 ded_sections

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Section |
| project_id | UUID | FK | NO | Project |
| parent_id | UUID | FK | YES | Parent section |
| criterion_id | UUID | FK | YES | Mapping kriteria |
| dimension_id | UUID | FK | YES | Mapping dimensi |
| indicator_id | UUID | FK | YES | Mapping indikator |
| code | VARCHAR(100) | | NO | Kode section |
| title | VARCHAR(500) | | NO | Judul |
| display_order | INT | | NO | Urutan |
| section_type | VARCHAR(50) | | NO | COVER, INTRO, CRITERION, APPENDIX, OTHER |
| status | VARCHAR(30) | | NO | DRAFT/ACTIVE/ARCHIVED |
| created_at | TIMESTAMP | | NO | Waktu |
| updated_at | TIMESTAMP | | NO | Waktu |

## 9.2 ded_responses

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Response |
| section_id | UUID | FK | NO | Section |
| project_id | UUID | FK | NO | Project |
| content | TEXT | | NO | Narasi DED |
| source_type | VARCHAR(30) | | NO | AI/HUMAN/MIXED |
| generation_run_id | UUID | FK | YES | AI generation run |
| status | VARCHAR(30) | | NO | DRAFT/SUBMITTED/APPROVED/REVISION_REQUIRED |
| created_by | UUID | FK | NO | Creator |
| updated_by | UUID | FK | YES | Last editor |
| created_at | TIMESTAMP | | NO | Waktu |
| updated_at | TIMESTAMP | | NO | Waktu |

## 9.3 ded_versions

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Version |
| response_id | UUID | FK | NO | Response |
| version_no | INT | | NO | Nomor version |
| content_snapshot | TEXT | | NO | Snapshot isi |
| change_summary | TEXT | | YES | Ringkasan perubahan |
| created_by | UUID | FK | NO | Pembuat snapshot |
| created_at | TIMESTAMP | | NO | Waktu |

Unique: `(response_id, version_no)`.

## 9.4 evidence_references

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Reference |
| response_id | UUID | FK | NO | DED response |
| document_id | UUID | FK | NO | Source document |
| chunk_id | UUID | FK | YES | Source chunk |
| page_number | INT | YES | YES | Halaman jika tersedia |
| quote | TEXT | | YES | Kutipan evidence |
| relevance_score | DECIMAL(8,6) | | YES | Score retrieval, bukan truth score |
| retrieval_method | VARCHAR(50) | | YES | SEMANTIC/BM25/RRF/MANUAL |
| verified_by | UUID | FK | YES | Reviewer/user yang memverifikasi |
| verified_at | TIMESTAMP | | YES | Waktu verifikasi |
| created_at | TIMESTAMP | | NO | Waktu |

Rule: page_number dan quote tidak boleh diisi dengan tebakan.

---

# 10. Review Tables

## 10.1 reviews

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Review |
| project_id | UUID | FK | NO | Project |
| response_id | UUID | FK | NO | DED response |
| reviewer_id | UUID | FK | NO | Reviewer |
| status | VARCHAR(40) | | NO | ASSIGNED, IN_REVIEW, APPROVED, REVISION_REQUESTED |
| submitted_at | TIMESTAMP | | YES | Waktu submit |
| completed_at | TIMESTAMP | | YES | Selesai |
| created_at | TIMESTAMP | | NO | Dibuat |
| updated_at | TIMESTAMP | | NO | Update |

## 10.2 review_comments

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Comment |
| review_id | UUID | FK | NO | Review |
| author_id | UUID | FK | NO | Author |
| body | TEXT | | NO | Komentar |
| anchor | JSONB | | YES | Posisi teks/section bila tersedia |
| created_at | TIMESTAMP | | NO | Waktu |
| updated_at | TIMESTAMP | | NO | Waktu |

## 10.3 revision_requests

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Revision request |
| review_id | UUID | FK | NO | Review |
| reason | TEXT | | NO | Alasan revisi |
| requested_by | UUID | FK | NO | Reviewer |
| resolved_at | TIMESTAMP | | YES | Resolved |
| resolved_by | UUID | FK | YES | User |
| created_at | TIMESTAMP | | NO | Waktu |

---

# 11. Research Tables

## 11.1 datasets

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Dataset |
| name | VARCHAR(255) | | NO | Nama |
| version | VARCHAR(50) | | NO | Version |
| status | VARCHAR(30) | | NO | DRAFT, REVIEW, READY, ARCHIVED |
| storage_key | TEXT | | NO | Lokasi file |
| total_cases | INT | | NO | Jumlah case |
| created_by | UUID | FK | NO | Creator |
| created_at | TIMESTAMP | | NO | Waktu |
| updated_at | TIMESTAMP | | NO | Waktu |

## 11.2 dataset_test_cases

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Test case |
| dataset_id | UUID | FK | NO | Dataset |
| external_id | VARCHAR(100) | | NO | TC-xxx |
| question | TEXT | | NO | Pertanyaan evaluatif |
| criterion_id | UUID | FK | YES | Mapping criterion |
| dimension_id | UUID | FK | YES | Mapping dimension |
| expected_ground_truth | TEXT | | YES | Ground truth |
| status | VARCHAR(30) | | NO | DRAFT, NEEDS_REVIEW, READY |
| evaluator_notes | TEXT | | YES | Notes |
| created_at | TIMESTAMP | | NO | Waktu |
| updated_at | TIMESTAMP | | NO | Waktu |

Unique: `(dataset_id, external_id)`.

## 11.3 experiments

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Experiment configuration |
| project_id | UUID | FK | YES | Project scope |
| name | VARCHAR(255) | | NO | Nama experiment |
| dataset_id | UUID | FK | NO | Dataset |
| method | VARCHAR(50) | | NO | LLM_ONLY/SEMANTIC_RAG/HYBRID_RAG |
| model_name | VARCHAR(150) | | NO | Gemini model yang digunakan |
| config | JSONB | | NO | Parameter retrieval/generation |
| status | VARCHAR(30) | | NO | DRAFT/QUEUED/RUNNING/COMPLETED/FAILED/CANCELLED |
| created_by | UUID | FK | NO | Creator |
| created_at | TIMESTAMP | | NO | Waktu |
| updated_at | TIMESTAMP | | NO | Update |

## 11.4 experiment_runs

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Run |
| experiment_id | UUID | FK | NO | Experiment |
| run_number | INT | | NO | Attempt/run number |
| status | VARCHAR(30) | | NO | QUEUED/RUNNING/COMPLETED/FAILED/CANCELLED |
| started_at | TIMESTAMP | | YES | Mulai |
| completed_at | TIMESTAMP | | YES | Selesai |
| error_message | TEXT | | YES | Error |
| application_version | VARCHAR(100) | | YES | Version aplikasi |
| prompt_version | VARCHAR(100) | | YES | Version prompt |
| created_at | TIMESTAMP | | NO | Waktu |

## 11.5 experiment_metrics

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Metric record |
| run_id | UUID | FK | NO | Run |
| metric_name | VARCHAR(100) | | NO | Faithfulness, Answer Relevancy, Context Precision, Context Recall |
| value | DECIMAL(10,6) | | YES | Nilai metric |
| sample_count | INT | | YES | Jumlah sample |
| metadata | JSONB | | YES | Detail |
| created_at | TIMESTAMP | | NO | Waktu |

---

# 12. Retrieval Inspection Tables

## 12.1 retrieval_inspections

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Inspection |
| project_id | UUID | FK | NO | Project |
| test_case_id | UUID | FK | YES | Test case |
| query | TEXT | | NO | Query |
| method | VARCHAR(50) | | NO | Retrieval method |
| top_k | INT | | NO | Top K |
| vector_weight | DECIMAL(6,4) | | YES | Weight semantic |
| bm25_weight | DECIMAL(6,4) | | YES | Weight BM25 |
| rrf_k | INT | | YES | RRF constant |
| created_by | UUID | FK | NO | User |
| created_at | TIMESTAMP | | NO | Waktu |

## 12.2 retrieval_results

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Result |
| inspection_id | UUID | FK | NO | Inspection |
| chunk_id | UUID | FK | NO | Chunk |
| semantic_rank | INT | YES | YES | Rank semantic |
| bm25_rank | INT | YES | YES | Rank BM25 |
| rrf_rank | INT | YES | YES | Rank RRF |
| semantic_score | DECIMAL(12,8) | YES | YES | Score |
| bm25_score | DECIMAL(12,8) | YES | YES | Score |
| rrf_score | DECIMAL(12,8) | YES | YES | Score |
| selected_for_context | BOOLEAN | | NO | Masuk context atau tidak |
| created_at | TIMESTAMP | | NO | Waktu |

---

# 13. Notification & Audit Tables

## 13.1 notifications

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Notification |
| user_id | UUID | FK | NO | Recipient |
| type | VARCHAR(80) | | NO | Jenis notification |
| title | VARCHAR(255) | | NO | Judul |
| message | TEXT | | NO | Isi |
| entity_type | VARCHAR(80) | | YES | Entity terkait |
| entity_id | UUID | | YES | ID entity |
| read_at | TIMESTAMP | | YES | Dibaca |
| created_at | TIMESTAMP | | NO | Waktu |

## 13.2 audit_logs

| Field | Type | Key | Null | Description |
|---|---|---|---|---|
| id | UUID | PK | NO | Audit event |
| actor_user_id | UUID | FK | YES | Actor |
| action | VARCHAR(100) | | NO | USER_CREATED, PROJECT_CREATED, DED_GENERATED, dst. |
| entity_type | VARCHAR(100) | | NO | Entity |
| entity_id | UUID | | YES | Entity ID |
| project_id | UUID | FK | YES | Scope project |
| before_data | JSONB | | YES | Snapshot terbatas sebelum perubahan |
| after_data | JSONB | | YES | Snapshot setelah perubahan |
| ip_hash | VARCHAR(128) | | YES | Hash IP |
| created_at | TIMESTAMP | | NO | Waktu |

Audit log harus dirancang agar tidak menyimpan secret/password/token.

---

# 14. Index Recommendation

Minimal index:

- `users(email)` unique;
- `sessions(session_hash)` unique;
- `sessions(user_id, expires_at)`;
- `project_members(project_id, user_id)`;
- `documents(project_id, status)`;
- `documents(project_id, document_type)`;
- `document_chunks(document_id, chunk_no)`;
- `chunk_index_status(chunk_id, index_type)`;
- `criteria(instrument_version_id, code)`;
- `dimensions(criterion_id, code)`;
- `indicators(dimension_id, code)`;
- `ded_responses(project_id, section_id, status)`;
- `evidence_references(response_id)`;
- `reviews(project_id, status)`;
- `dataset_test_cases(dataset_id, status)`;
- `experiments(project_id, status)`;
- `audit_logs(project_id, created_at)`.

---

# 15. Deletion Policy

Default policy:

- User: soft disable/soft delete.
- Project: archive.
- Instrument version: archive setelah tidak berlaku.
- Document: archive/delete hanya sesuai retention policy.
- DED version: tidak dihapus dari history normal.
- Review/comment/audit: append-only atau retention policy yang terdokumentasi.

Jangan menggunakan cascade delete secara sembarangan pada data audit dan version history.
