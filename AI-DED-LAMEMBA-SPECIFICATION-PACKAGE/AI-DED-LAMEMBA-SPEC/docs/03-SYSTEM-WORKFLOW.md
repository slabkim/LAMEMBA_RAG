# System Workflow Specification

## 1. End-to-End Workflow

```text
Login
  ↓
Select / Open Project
  ↓
Project Context
  ↓
Upload Evidence / DKPS / DED Documents
  ↓
Document Processing
  ├─ Extraction
  ├─ Cleaning
  ├─ Chunking
  ├─ Metadata Mapping
  ├─ Embedding
  └─ BM25 Index
  ↓
Knowledge Base
  ↓
Select Criterion / Dimension / Indicator
  ↓
Retrieve Evidence
  ├─ Semantic Search
  ├─ BM25
  └─ RRF Fusion
  ↓
Context Validation
  ↓
Gemini Generation
  ↓
Evidence Reference Mapping
  ↓
DED Draft
  ↓
Human Editing
  ↓
Version Snapshot
  ↓
Submit for Review
  ↓
Reviewer Review
  ├─ Approve
  └─ Request Revision
       ↓
     Revision
       ↓
     Review Again
```

---

# 2. Project Creation Workflow

1. User membuka Projects.
2. User memilih Create Project.
3. Sistem meminta instansi, UPPS, jenis program, tahun, nama PS, dan status awal.
4. Backend melakukan validation.
5. Backend membuat project.
6. Backend menghubungkan instrument version yang dipilih/berlaku.
7. Creator menjadi project member sesuai policy.
8. Audit event `PROJECT_CREATED` dibuat.
9. UI menampilkan project baru.

Tidak boleh membuat project hanya di frontend/local state.

---

# 3. Document Upload Workflow

1. User memilih project.
2. User memilih file.
3. Frontend memeriksa ekstensi/size sebagai early validation.
4. Backend memeriksa MIME type, ukuran, checksum, dan permission.
5. File disimpan ke object storage/file storage.
6. Metadata document dibuat.
7. Processing job dibuat.
8. UI menampilkan status `Uploaded`/`Processing`.

---

# 4. Document Processing Workflow

```text
Uploaded
  ↓
Queued
  ↓
Extracting
  ↓
Normalizing
  ↓
Chunking
  ↓
Embedding
  ↓
BM25 Indexing
  ↓
RAG Sync
  ↓
Processed
```

Failure pada satu tahap menghasilkan processing run `FAILED` dengan error code yang dapat ditelusuri.

Retry harus membuat processing attempt baru atau run baru, bukan menghapus history lama.

---

# 5. DED Generation Workflow

1. User memilih indicator.
2. System mengambil definisi indicator dan evidence requirement dari instrument version.
3. System menentukan project scope.
4. Retriever mengambil candidate chunks.
5. Candidate chunks difilter berdasarkan metadata/scope.
6. Semantic dan BM25 result digabung menggunakan strategi yang dikonfigurasi.
7. Context builder menyusun evidence context.
8. Gemini menerima prompt + context.
9. Output divalidasi.
10. Evidence references disimpan.
11. DED response dibuat sebagai draft.
12. User dapat edit.
13. Version disimpan.

---

# 6. Review Workflow

```text
DRAFT
  ↓ Submit
SUBMITTED
  ↓
IN_REVIEW
  ├── APPROVED
  └── REVISION_REQUESTED
          ↓
       REVISED
          ↓
      IN_REVIEW
```

Reviewer harus dapat melihat:

- narasi;
- source evidence;
- citation;
- version;
- author;
- timestamp;
- komentar;
- perubahan dari version sebelumnya.

---

# 7. Research Workflow

```text
Dataset Import
  ↓
Validate Schema
  ↓
Ground Truth Review
  ↓
Ready
  ↓
Experiment Configuration
  ↓
Queue
  ↓
Run
  ↓
Retrieval / Generation
  ↓
RAGAS Evaluation
  ↓
Store Metrics
  ↓
Method Comparison
```

Hasil eksperimen harus dapat direproduksi dengan menyimpan:

- dataset version;
- model;
- prompt version;
- retrieval configuration;
- top-k;
- vector/BM25 weights;
- RRF constant;
- run timestamp;
- application version.
