# 14 — Detailed Workflow Specification: AI DED LAMEMBA

Tanggal: 28 September 2026
Sumber: 03-SYSTEM-WORKFLOW.md + 12-PAGE-INVENTORY.md + 13-PAGE-ROLE-MATRIX.md
Step: 4 — Finalisasi workflow detail

---

## A. WORKFLOW INDEX

| # | Workflow                   | Primary Actor(s)     | Pages Involved                    |
|---|----------------------------|----------------------|-----------------------------------|
| 1 | Authentication             | All                  | AUTH-01, AUTH-03..07              |
| 2 | Project Lifecycle          | Admin                | WS-02, WS-03, SYS-01            |
| 3 | Document Upload & Process  | Admin, Penyusun      | WS-04, WS-05                     |
| 4 | DED Authoring              | Admin, Penyusun      | WS-06, WS-08, PEN-03, WS-09, WS-10 |
| 5 | Review & Approval          | Reviewer, Penyusun   | REV-01..07, PEN-05               |
| 6 | Research & Evaluation      | Researcher           | RES-01..08                        |
| 7 | User Management            | Admin                | SYS-01, SYS-02                   |
| 8 | Instrument Configuration   | Admin                | SYS-06, SYS-12                   |
| 9 | Notification               | System → All         | SYS-03                           |

---

## 1. AUTHENTICATION WORKFLOW

### 1.1 Login Flow

```
Actor: Any unauthenticated user
Page:  AUTH-01 (Login)

[User visits any protected route]
    │
    ▼
[Routing Guard: authenticated?]──NO──▶ Redirect to /login
    │                                   (save intended URL)
   YES
    │
    ▼
[Render requested page]

--- Login Page Flow ---

[/login]
    │
    ▼
[User enters email + password]
    │
    ▼
[Frontend validation]
    │ ├─ Empty fields → inline error
    │ └─ Invalid email format → inline error
    │
    ▼
[POST /api/auth/login]
    │
    ├─ 200 OK
    │   ├─ Set session/token
    │   ├─ Fetch user profile (role, permissions)
    │   └─ Redirect to saved URL or /dashboard
    │
    ├─ 401 Invalid credentials
    │   └─ Show error: "Email atau password salah"
    │
    ├─ 403 Account disabled
    │   └─ Show error: "Akun Anda dinonaktifkan. Hubungi Admin."
    │
    ├─ 429 Too many attempts
    │   └─ Show error: "Terlalu banyak percobaan. Coba lagi dalam X menit."
    │
    └─ 5xx Server error
        └─ Show error: "Terjadi kesalahan server. Coba lagi."
```

### 1.2 Forgot & Reset Password Flow

```
Actor: Any unauthenticated user
Pages: AUTH-03 (Forgot Password), AUTH-04 (Reset Password)

[/forgot-password]
    │
    ▼
[User enters email]
    │
    ▼
[POST /api/auth/forgot-password]
    │
    ├─ 200 OK (always, even if email not found — security)
    │   └─ Show: "Jika email terdaftar, link reset telah dikirim."
    │
    └─ 429 Rate limited
        └─ Show: "Terlalu banyak permintaan."

--- Reset Password ---

[/reset-password/:token]
    │
    ▼
[GET /api/auth/verify-reset-token/:token]
    │
    ├─ 200 Valid → Show reset form
    │
    └─ 400/404 Invalid/Expired
        └─ Show: "Link reset tidak valid atau sudah kadaluarsa."

[User enters new password + confirm]
    │
    ▼
[POST /api/auth/reset-password]
    body: { token, newPassword }
    │
    ├─ 200 OK → Show success, redirect to /login
    │
    └─ 400 Validation error → Show inline errors
```

### 1.3 Session Management

```
[Every API request]
    │
    ▼
[Check session/token validity]
    │
    ├─ Valid → proceed
    │
    ├─ Expired → 401 with code SESSION_EXPIRED
    │   └─ Frontend: redirect to /session-expired (AUTH-05)
    │
    └─ Invalid → 401
        └─ Frontend: redirect to /login

--- Session Expired Page ---

[/session-expired]
    │
    ▼
[Show: "Sesi Anda telah berakhir."]
[Button: "Login Kembali" → /login]
```

### 1.4 Logout Flow

```
[User clicks logout]
    │
    ▼
[POST /api/auth/logout]
    │
    ▼
[Clear session/token on client]
    │
    ▼
[Redirect to /login]
```

---

## 2. PROJECT LIFECYCLE WORKFLOW

### 2.1 State Machine

```
                    ┌──────────┐
                    │ PLANNING │
                    └────┬─────┘
                         │ Activate
                         ▼
                    ┌──────────┐
              ┌────▶│  ACTIVE  │◀────┐
              │     └────┬─────┘     │
              │          │           │
         Reactivate      │      (continues)
              │          │           │
              │     ┌────▼─────┐    │
              └─────│ ARCHIVED │    │
                    └──────────┘    │
                                   │
                    ┌──────────┐   │
                    │COMPLETED ├───┘
                    └──────────┘
```

Valid transitions:
- PLANNING → ACTIVE
- ACTIVE → COMPLETED
- ACTIVE → ARCHIVED
- ARCHIVED → ACTIVE (reactivate)
- COMPLETED → ACTIVE (reopen — policy-controlled)

### 2.2 Create Project Flow

```
Actor: Admin
Page:  WS-02 (Projects List)

[Admin clicks "Buat Proyek Baru"]
    │
    ▼
[Modal opens with form]
    Fields:
    - Perguruan Tinggi / Instansi  (required)
    - UPPS                          (required)
    - Jenis Program                 (required, dropdown: S1/S2/S3/D3/D4/Profesi)
    - Tahun Akreditasi              (required)
    - Nama Program Studi            (required)
    - Instrumen                     (required, from SYS-06 config)
    - Instrumen Version             (auto from latest active version)
    - Status Mulai                  (Persiapan / Aktif)
    │
    ▼
[Frontend validation]
    │
    ▼
[POST /api/projects]
    │
    ├─ 201 Created
    │   ├─ Backend: create project record
    │   ├─ Backend: link instrument version
    │   ├─ Backend: add creator as project member (role: Admin)
    │   ├─ Backend: create audit event PROJECT_CREATED
    │   ├─ Backend: initialize DED structure from instrument template
    │   └─ Frontend: close modal, refresh list, show success toast
    │
    ├─ 400 Validation error → show errors in modal
    │
    └─ 409 Duplicate → "Project dengan nama dan tahun yang sama sudah ada"
```

### 2.3 Assign Members

```
Actor: Admin
Page:  WS-03 (Project Detail) — Tim section

[Admin clicks "Tambah Anggota"]
    │
    ▼
[Modal: select user + assign role]
    - User       (search/dropdown from SYS-01 users)
    - Role       (Penyusun / Reviewer / Researcher)
    - Criteria   (optional: assign to specific criteria)
    │
    ▼
[POST /api/projects/:projectId/members]
    │
    ├─ 201 Created
    │   ├─ Backend: create project_member record
    │   ├─ Backend: audit event MEMBER_ADDED
    │   ├─ Backend: send notification to assigned user
    │   └─ Frontend: refresh Tim section
    │
    └─ 409 Already member → "User sudah menjadi anggota project ini"
```

---

## 3. DOCUMENT UPLOAD & PROCESSING WORKFLOW

### 3.1 Upload Flow

```
Actor: Admin, Penyusun (scoped)
Page:  WS-04 (Documents)

[User opens Documents page]
    │
    ▼
[Page loads: document list + filters + upload zone]
    │
    ▼
[User drags file or clicks upload]
    │
    ▼
[Frontend early validation]
    ├─ File extension check: .pdf, .docx, .xlsx
    ├─ File size check: ≤ 50MB (configurable)
    └─ Fail → inline error, no API call
    │
    ▼
[Upload form: metadata]
    - Document Type     (DED / DKPS / Evidence / Supporting)
    - Kriteria Mapping  (optional, multi-select: Kriteria 1-7)
    - Description       (optional)
    │
    ▼
[POST /api/documents/upload]
    Content-Type: multipart/form-data
    body: file + projectId + type + criteria[] + description
    │
    ├─ 201 Created
    │   ├─ Backend: validate MIME type, size, checksum
    │   ├─ Backend: store file to object/file storage
    │   ├─ Backend: create document metadata record
    │   ├─ Backend: create processing job (status: QUEUED)
    │   ├─ Backend: audit event DOCUMENT_UPLOADED
    │   ├─ Backend: notify relevant users
    │   └─ Frontend: add to document list, status "Uploaded"
    │
    ├─ 400 Invalid file → "Format file tidak didukung"
    ├─ 413 Too large → "Ukuran file melebihi batas X MB"
    ├─ 403 No permission → redirect to /403
    └─ 5xx → retry UI
```

### 3.2 Processing Pipeline

```
Trigger: Automatic after upload, or manual Retry

[Processing Job Created]
    │
    ▼
┌─────────────────────────────────────────────┐
│  Step 1: EXTRACTING                         │
│  - PDF → text extraction (PyPDF2/pdfplumber)│
│  - DOCX → python-docx text extraction       │
│  - XLSX → openpyxl / pandas                 │
│  Outputs: raw text, page mapping            │
│  Fail: EXTRACTION_FAILED + error detail     │
└─────────────┬───────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│  Step 2: NORMALIZING                        │
│  - Clean whitespace, headers, footers       │
│  - Remove artifacts, normalize encoding     │
│  - Detect language                          │
│  Outputs: cleaned text                      │
│  Fail: NORMALIZATION_FAILED                 │
└─────────────┬───────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│  Step 3: CHUNKING                           │
│  - Split into semantic chunks               │
│  - Assign chunk IDs                         │
│  - Map to page/section                      │
│  - Token counting                           │
│  Outputs: chunk[] with metadata             │
│  Config: chunk_size, chunk_overlap           │
│  Fail: CHUNKING_FAILED                      │
└─────────────┬───────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│  Step 4: EMBEDDING                          │
│  - Generate vector embeddings per chunk     │
│  - Store in vector store                    │
│  Outputs: vector IDs per chunk              │
│  Fail: EMBEDDING_FAILED                     │
└─────────────┬───────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│  Step 5: BM25 INDEXING                      │
│  - Build BM25 index for chunks              │
│  - Store index                              │
│  Outputs: BM25 index updated               │
│  Fail: BM25_INDEX_FAILED                    │
└─────────────┬───────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│  Step 6: RAG SYNC                           │
│  - Verify both vector + BM25 consistent     │
│  - Update document status                   │
│  - Update knowledge base stats              │
│  Outputs: document status = PROCESSED       │
│  Fail: RAG_SYNC_FAILED                      │
└─────────────┬───────────────────────────────┘
              │
              ▼
[Document Status: PROCESSED]
[Notify: "Dokumen X berhasil diproses"]

--- On Failure at any step ---

[Step fails]
    │
    ▼
[Processing Run status: FAILED]
[Error code + detail stored]
[Document status: FAILED]
[Notify: "Pemrosesan dokumen X gagal pada tahap Y"]
[UI: Show error detail + "Retry Processing" button]
```

### 3.3 Processing State Machine

```
UPLOADED ──▶ QUEUED ──▶ EXTRACTING ──▶ NORMALIZING ──▶ CHUNKING
                                                          │
                ┌─────────────────────────────────────────┘
                │
                ▼
           EMBEDDING ──▶ BM25_INDEXING ──▶ RAG_SYNC ──▶ PROCESSED
                │              │              │
                └──────────────┴──────────────┘
                               │
                          [any failure]
                               │
                               ▼
                            FAILED ──▶ (Retry) ──▶ QUEUED (new attempt)
```

Rules:
- Retry creates NEW processing_run, preserves old run history
- Admin can retry any document
- Penyusun can retry own uploads (policy-dependent)
- Cancel only allowed while QUEUED (before processing starts)

### 3.4 Evidence Upload via Documents (Keputusan #3)

```
Karena PEN-02 dihapus, evidence upload dilakukan di WS-04 Documents
dengan tambahan workflow:

[Penyusun opens Documents page]
    │
    ▼
[Filter: Kriteria = Kriteria 3, Type = Evidence]
    │
    ▼
[Upload: selects file]
    │
    ▼
[Metadata form includes:]
    - Document Type = "Evidence" (pre-selected)
    - Kriteria Mapping = Kriteria 3 (pre-filled from filter)
    - Evidence Category (optional: Data, Dokumen Pendukung, dll.)
    │
    ▼
[Same upload API as 3.1]
```

---

## 4. DED AUTHORING WORKFLOW

### 4.1 End-to-End DED Flow

```
Actor: Admin or Penyusun (scoped)
Pages: WS-06, WS-08, PEN-03, WS-09, WS-10

[User opens DED Overview (WS-06)]
    │
    ▼
[See all 7 Kriteria + progress + status]
    │
    ▼
[Click on Kriteria → expand Dimensi list]
    │
    ▼
[Click on Dimensi → see Indikator list]
    │
    ▼
[Click "Buka Editor" on Indikator]
    │
    ▼
[Navigate to WS-08: DED Workspace/Editor]
    │
    ▼
[See: Indicator info, Evidence panel, Editor area]
    │
    ▼
┌─ Option A: Manual Write ──────────────────┐
│  User writes narasi manually in editor     │
│  Can reference evidence from Evidence panel│
│  Save → version snapshot created           │
└────────────────────────────────────────────┘

┌─ Option B: AI Generation (PEN-03) ────────┐
│  User clicks "Generate AI Draft"           │
│  → See generation config:                  │
│    - Retrieval count (top-k)               │
│    - Generation instruction (optional)     │
│  → Click "Generate"                        │
│  → [DED Generation Pipeline runs]          │
│  → Draft appears in editor                 │
│  → User reviews, edits, saves             │
└────────────────────────────────────────────┘
    │
    ▼
[User edits draft if needed]
    │
    ▼
[Save → PUT /api/ded/responses/:id]
    ├─ Auto version snapshot
    └─ Status remains DRAFT
    │
    ▼
[Submit for Review → POST /api/ded/responses/:id/submit]
    ├─ Status: DRAFT → SUBMITTED
    ├─ Notify assigned Reviewer(s)
    └─ Audit event DED_SUBMITTED
```

### 4.2 DED Generation Pipeline (AI)

```
Trigger: User clicks "Generate" on PEN-03 or WS-08

[POST /api/ded/generate]
body: {
    projectId,
    criterionId,
    dimensionId,
    indicatorId,
    topK: 10,           // configurable
    instruction: "..."   // optional user instruction
}

Step 1: [Load Indicator Definition]
    │  From instrument version config
    │  Get: indicator description, evidence requirements
    │
    ▼
Step 2: [Determine Scope]
    │  Project ID → document set
    │  Criteria + Dimension → metadata filter
    │
    ▼
Step 3: [Semantic Retrieval]
    │  Query: indicator description + requirements
    │  Vector store search → top-K candidates
    │  Output: semantic_results[] with scores
    │
    ▼
Step 4: [BM25 Retrieval]
    │  Query: keywords from indicator + requirements
    │  BM25 index search → top-K candidates
    │  Output: bm25_results[] with scores
    │
    ▼
Step 5: [RRF Fusion]
    │  Combine semantic + BM25 using RRF algorithm
    │  Config: rrf_k constant (default 60)
    │  Re-rank by RRF score
    │  Output: rrf_results[] (top-K final)
    │
    ▼
Step 6: [Context Assembly]
    │  Select top chunks from RRF results
    │  Build evidence context string
    │  Include: chunk text, source doc, page, chunk ID
    │  Token budget check
    │  Output: context_text, evidence_refs[]
    │
    ▼
Step 7: [Gemini Generation]
    │  Prompt structure:
    │    - System prompt (DED writing guidelines)
    │    - Indicator definition
    │    - Evidence context
    │    - User instruction (if any)
    │  Model: Gemini (configured version)
    │  Output: generated_text
    │
    ▼
Step 8: [Evidence Reference Mapping]
    │  Parse generated text for citation markers
    │  Map to actual chunks/documents
    │  Verify: no fabricated citations
    │  Output: mapped_references[]
    │
    ▼
Step 9: [Create DED Response]
    │  Save to database:
    │    - response text
    │    - evidence references
    │    - generation metadata (model, prompt version, retrieval config)
    │    - status: DRAFT
    │    - version: 1
    │  Audit event: DED_GENERATED
    │
    ▼
[Return to frontend]
    - Generated text displayed in editor
    - Evidence panel shows retrieved sources
    - Citation highlights in text
    - Warning: "Draft ini dihasilkan AI. Wajib ditinjau manusia."

--- Error Handling ---

Generation fails:
    ├─ No evidence found → "Tidak ditemukan evidence yang relevan. Upload dokumen terlebih dahulu."
    ├─ Gemini API error → "Gagal generate draft. Coba lagi." + retry button
    ├─ Token limit exceeded → "Context terlalu besar. Kurangi top-K."
    └─ Timeout → "Proses generation timeout. Coba lagi."
```

### 4.3 DED Response State Machine

```
                    ┌───────┐
                    │ DRAFT │◀──────────────────────┐
                    └───┬───┘                       │
                        │ Submit                    │
                        ▼                           │
                  ┌───────────┐                     │
                  │ SUBMITTED │                     │
                  └─────┬─────┘                     │
                        │ Reviewer picks up         │
                        ▼                           │
                  ┌───────────┐                     │
                  │ IN_REVIEW │                     │
                  └─────┬─────┘                     │
                        │                           │
                ┌───────┴────────┐                  │
                │                │                  │
                ▼                ▼                  │
          ┌──────────┐  ┌────────────────┐         │
          │ APPROVED │  │ REVISION_REQ.  │         │
          └──────────┘  └───────┬────────┘         │
                                │ Penyusun revises  │
                                ▼                   │
                          ┌─────────┐               │
                          │ REVISED │───────────────┘
                          └─────────┘    (→ re-submit → IN_REVIEW)
```

Valid transitions:
- DRAFT → SUBMITTED (by Penyusun/Admin)
- SUBMITTED → IN_REVIEW (by Reviewer picking up)
- IN_REVIEW → APPROVED (by Reviewer)
- IN_REVIEW → REVISION_REQUESTED (by Reviewer)
- REVISION_REQUESTED → REVISED (by Penyusun editing)
- REVISED → SUBMITTED (by Penyusun re-submitting)

Rules:
- Each transition creates a version snapshot
- Only assigned Penyusun can submit/revise (or Admin override)
- Only assigned Reviewer can approve/request revision
- APPROVED is terminal unless Admin reopens

### 4.4 Version History

```
Actor: Admin, Penyusun, Reviewer
Page:  WS-10 (Version History)

Every state transition OR manual save creates a version:

Version 1: Initial Draft (AI Generated)
    │ Author: System/AI, Timestamp, Status: DRAFT
    │
Version 2: Human Edited
    │ Author: Penyusun X, Timestamp, Status: DRAFT
    │
Version 3: Submitted for Review
    │ Author: Penyusun X, Timestamp, Status: SUBMITTED
    │
Version 4: Revision Requested
    │ Author: Reviewer Y, Timestamp, Status: REVISION_REQUESTED
    │ Comment: "Evidence pada paragraf 3 kurang lengkap"
    │
Version 5: Revised
    │ Author: Penyusun X, Timestamp, Status: REVISED
    │
Version 6: Approved
    │ Author: Reviewer Y, Timestamp, Status: APPROVED

Features:
- View any version's full text
- Diff compare between any 2 versions (REV-06)
- Restore previous version (Admin only) → creates new version
- Versions are immutable after creation
```

---

## 5. REVIEW & APPROVAL WORKFLOW

### 5.1 Review Assignment

```
Reviewer gets assigned to project via WS-03 (Admin assigns).
Or: auto-assignment based on criteria specialty (future feature).

[Reviewer receives notification: "Anda ditugaskan sebagai reviewer untuk Project X"]
    │
    ▼
[Reviewer opens Review Dashboard (REV-01)]
    │
    ▼
[See: Pending items, stats]
```

### 5.2 Review Flow

```
Actor: Reviewer
Pages: REV-01, REV-02, REV-03, REV-04, REV-05, REV-06, REV-07

[REV-01: Review Dashboard]
    │ See all pending reviews
    │
    ▼
[REV-02: Assigned Projects]
    │ Click project
    │
    ▼
[REV-03: Review Workspace]
    │ See:
    │   - DED narasi (response text)
    │   - Evidence panel (sources, citations)
    │   - Previous comments
    │   - Version selector
    │
    ▼
[Reviewer reads narasi + checks evidence]
    │
    ├─ Wants to check evidence detail
    │   └─▶ [REV-04: Evidence Review]
    │       - View document
    │       - Check relevance
    │       - Add comment on evidence
    │       └─▶ Return to REV-03
    │
    ├─ Wants to compare versions
    │   └─▶ [REV-06: Version Comparison]
    │       - Side-by-side diff
    │       - See what changed after revision
    │       └─▶ Return to REV-03
    │
    ▼
[Reviewer makes decision]
    │
    ├─ APPROVE
    │   [POST /api/review/:responseId/approve]
    │   body: { comment (optional) }
    │   ├─ Status: IN_REVIEW → APPROVED
    │   ├─ Version snapshot created
    │   ├─ Audit event DED_APPROVED
    │   ├─ Notify Penyusun + Admin
    │   └─ Frontend: success toast, update dashboard
    │
    ├─ REQUEST REVISION
    │   [POST /api/review/:responseId/request-revision]
    │   body: { comment (required), specific_issues[] }
    │   ├─ Status: IN_REVIEW → REVISION_REQUESTED
    │   ├─ Version snapshot + comment created
    │   ├─ Audit event REVISION_REQUESTED
    │   ├─ Notify Penyusun
    │   └─ Frontend: show in REV-05 + Penyusun's PEN-05
    │
    └─ ADD COMMENT (without decision)
        [POST /api/review/:responseId/comment]
        body: { comment, type: "note" }
        ├─ No status change
        └─ Notify Penyusun
```

### 5.3 Revision Response Flow

```
Actor: Penyusun
Pages: PEN-05, WS-08

[Penyusun receives notification: "Reviewer meminta revisi untuk Indikator X"]
    │
    ▼
[PEN-05: Review Status]
    │ See all revision requests per criterion
    │ Click on specific request
    │
    ▼
[WS-08: DED Workspace/Editor]
    │ See:
    │   - Current text
    │   - Reviewer comment highlighted
    │   - Specific issues listed
    │
    ▼
[Penyusun edits based on feedback]
    │
    ▼
[Save → status: REVISED]
    │
    ▼
[Re-submit → POST /api/ded/responses/:id/submit]
    ├─ Status: REVISED → SUBMITTED
    ├─ Notify Reviewer
    └─ New review cycle begins
```

### 5.4 Final Approval (Project-level)

```
Actor: Reviewer
Page:  REV-07 (Approval)

[All 7 criteria have individual DED responses APPROVED]
    │
    ▼
[REV-07: Final Approval page]
    │ Checklist: all criteria status
    │ Summary: completion, evidence coverage
    │
    ▼
[Reviewer confirms final approval]
    [POST /api/review/projects/:projectId/approve]
    │
    ├─ All criteria APPROVED → Project DED status: COMPLETED
    ├─ Audit event PROJECT_DED_APPROVED
    ├─ Notify Admin + all Penyusun
    └─ Project status can transition to COMPLETED
    │
    └─ Some criteria NOT approved
        └─ Show: "X kriteria belum approved. Selesaikan review terlebih dahulu."
```

---

## 6. RESEARCH & EVALUATION WORKFLOW

### 6.1 Dataset Management

```
Actor: Researcher
Pages: RES-01, RES-02, RES-03

[RES-02: Evaluation Dataset]
    │
    ▼
[Import dataset]
    [POST /api/research/datasets/import]
    body: { file (CSV/JSON), name, description }
    │
    ├─ Schema validation
    │   Required columns: question, criteria, expected_answer, evidence_refs
    │   Optional: dimension, indicator, difficulty, notes
    │
    ├─ Valid → create dataset + test cases
    └─ Invalid → show validation errors per row
    │
    ▼
[Each test case needs review]
    Status: IMPORTED → REVIEWED → READY
    │
    ▼
[RES-03: Dataset Detail]
    - View all test cases
    - Edit ground truth
    - Mark as READY
    - Coverage analysis per criteria
```

### 6.2 Experiment Configuration & Run

```
Actor: Researcher
Pages: RES-04, RES-05

[RES-04: Experiments]
    │
    ▼
[Create new experiment]
    Config form:
    - Name
    - Dataset (select from RES-02)
    - Method: LLM Only / Semantic RAG / Hybrid RAG
    - LLM Model: Gemini version
    - Evidence-first mode: on/off
    - Vector weight (for hybrid)
    - BM25 weight (for hybrid)
    - RRF k constant (for hybrid)
    - Top-K chunks
    - RAGAS metrics: [Faithfulness, Answer Relevancy, Context Precision, Context Recall]
    - Temperature (optional)
    │
    ▼
[Save as Draft or Queue]
    │
    ├─ Save as Draft → status: DRAFT
    │
    └─ Queue Experiment
        [POST /api/research/experiments/:id/queue]
        │
        ▼
        Status: QUEUED
```

### 6.3 Experiment Execution Pipeline

```
[QUEUED experiment picked up by runner]
    │
    ▼
Status: RUNNING
    │
    ▼
For each test case in dataset:
    │
    ├─ Method: LLM Only
    │   - Send question directly to Gemini
    │   - No retrieval
    │   - Store: generated_answer
    │
    ├─ Method: Semantic RAG
    │   - Semantic retrieval (vector search)
    │   - Context assembly
    │   - Gemini generation with context
    │   - Store: retrieved_chunks, generated_answer
    │
    └─ Method: Hybrid RAG
        - Semantic retrieval
        - BM25 retrieval
        - RRF fusion
        - Context assembly
        - Gemini generation with context
        - Store: semantic_results, bm25_results, rrf_results, generated_answer
    │
    ▼
[RAGAS Evaluation per test case]
    - Faithfulness: is answer faithful to context?
    - Answer Relevancy: is answer relevant to question?
    - Context Precision: are retrieved contexts precise?
    - Context Recall: do contexts cover the ground truth?
    │
    ▼
[Store metrics per test case + aggregate]
    │
    ▼
Status: COMPLETED
[Notify Researcher]
[Audit event EXPERIMENT_COMPLETED]

--- On Failure ---

[Any error during run]
    │
    ▼
Status: FAILED
Error detail stored
[Notify Researcher: "Experiment X gagal: {error}"]
```

### 6.4 Experiment State Machine

```
DRAFT ──▶ QUEUED ──▶ RUNNING ──▶ COMPLETED
              │          │
              │          └──▶ FAILED
              │
              └──▶ CANCELLED (user cancels before run starts)
```

### 6.5 Retrieval Inspection

```
Actor: Researcher
Page:  RES-06

[User enters test case or custom query]
    │
    ▼
[Configure: Top-K, Criteria filter]
    │
    ▼
[POST /api/research/retrieval-inspect]
body: { query, topK, criteria, projectId }
    │
    ▼
[Backend runs retrieval pipeline]
    │
    ▼
[Returns 3 result groups:]
    ├─ Semantic Results: rank, doc, page, chunk_id, score
    ├─ BM25 Results: rank, doc, page, chunk_id, score
    └─ RRF Combined: rank, doc, page, chunk_id, rrf_score, origin
    │
    ▼
[Context Assembly preview]
    - Which chunks are "active in context"
    - Token estimate
    │
    ▼
[User can inspect individual chunks]
    - Full excerpt
    - Metadata
    - Rankings across all 3 methods
```

### 6.6 RAGAS Evaluation View

```
Actor: Researcher
Page:  RES-07

[Select experiment run]
    │
    ▼
[GET /api/research/ragas/:experimentId]
    │
    ▼
[Display:]
    - Aggregate metrics:
      - Faithfulness: 0.XX
      - Answer Relevancy: 0.XX
      - Context Precision: 0.XX
      - Context Recall: 0.XX
    │
    - Per-question breakdown table:
      - Question, Expected, Generated, F, AR, CP, CR, Pass/Fail
    │
    - Charts: distribution, per-criteria breakdown
    │
    - Export: CSV/JSON download of results
```

### 6.7 Method Comparison

```
Actor: Researcher
Page:  RES-08

[Select 2+ experiment runs to compare]
    │
    ▼
[GET /api/research/comparison?ids=X,Y,Z]
    │
    ▼
[Display:]
    - Side-by-side metric comparison table:
      | Metric     | LLM Only | Semantic RAG | Hybrid RAG |
      |------------|----------|--------------|------------|
      | Faithful.  | 0.45     | 0.72         | 0.85       |
      | Answer Rel.| 0.60     | 0.78         | 0.82       |
      | Ctx Prec.  | N/A      | 0.68         | 0.80       |
      | Ctx Recall | N/A      | 0.65         | 0.78       |
    │
    - Charts: bar/radar comparison
    │
    - Per-question comparison:
      For each test case, show all methods' answers side-by-side
    │
    - Statistical summary:
      - Mean, median, std dev per metric per method
      - Winner per metric
    │
    - Export comparison results
```

---

## 7. USER MANAGEMENT WORKFLOW

```
Actor: Admin
Pages: SYS-01, SYS-02

--- Create User (Keputusan #1: no self-register) ---

[Admin opens SYS-01: Users & Access]
    │
    ▼
[Click "Tambah User"]
    │
    ▼
[Form:]
    - Nama Lengkap     (required)
    - Email            (required, unique)
    - Role             (required: Admin / Penyusun / Reviewer / Researcher)
    - Status           (Active / Inactive)
    - Temporary Password (auto-generated or manual)
    │
    ▼
[POST /api/users]
    ├─ 201 Created
    │   ├─ Backend: hash password, create user
    │   ├─ Backend: assign role + default permissions
    │   ├─ Backend: send welcome email with temporary password
    │   ├─ Backend: audit event USER_CREATED
    │   └─ Frontend: refresh user list
    │
    ├─ 409 Email exists → "Email sudah terdaftar"
    └─ 400 Validation → show errors

--- First Login ---

[New user logs in with temporary password]
    │
    ▼
[Backend detects: must_change_password flag]
    │
    ▼
[Redirect to password change form]
    │
    ▼
[User sets new password]
    │
    ▼
[Continue to /dashboard]

--- Disable User ---

[Admin clicks "Nonaktifkan" on user row]
    │
    ▼
[PUT /api/users/:id { status: "inactive" }]
    ├─ User can no longer login
    ├─ Active sessions invalidated
    ├─ Audit event USER_DISABLED
    └─ User's project memberships preserved but inactive
```

---

## 8. INSTRUMENT CONFIGURATION WORKFLOW

```
Actor: Admin
Page:  SYS-06 (Instrument Management — hierarchical tree, Keputusan #5)

[Admin opens SYS-06]
    │
    ▼
[See instrument list (e.g., "LAMEMBA")]
    │
    ▼
[Click instrument → expand tree]

Tree structure:
    LAMEMBA
    ├─ Version 2024 (Active)
    │   ├─ Kriteria 1: Orientasi Strategis
    │   │   ├─ Dimensi 1.1: Visi, Misi, Tujuan
    │   │   │   ├─ Indikator 1.1.1: Kejelasan visi
    │   │   │   │   └─ Evidence Req: [Dokumen visi-misi, SK penetapan]
    │   │   │   ├─ Indikator 1.1.2: ...
    │   │   │   └─ ...
    │   │   ├─ Dimensi 1.2: ...
    │   │   └─ ...
    │   ├─ Kriteria 2: ...
    │   └─ ... (7 kriteria total)
    │
    └─ Version 2020 (Archived)
        └─ ...

--- CRUD Operations (inline in tree) ---

[Add Instrument]
    POST /api/instruments
    body: { name, description }

[Add Version]
    POST /api/instruments/:id/versions
    body: { name, year, status: "draft" }

[Add Criterion]
    POST /api/instruments/versions/:versionId/criteria
    body: { number, name, description }

[Add Dimension]
    POST /api/criteria/:criterionId/dimensions
    body: { number, name, description }

[Add Indicator]
    POST /api/dimensions/:dimensionId/indicators
    body: { number, name, description, assessment_guide }

[Add Evidence Requirement]
    POST /api/indicators/:indicatorId/evidence-requirements
    body: { name, type, description, required: true/false }

--- Version Lifecycle ---

DRAFT → ACTIVE → ARCHIVED

- Only one version ACTIVE at a time per instrument
- Activating a version archives the current active one
- Active version is what projects use
- Archived versions are read-only

--- Import from template ---

[Admin can import instrument structure from JSON/XLSX]
    POST /api/instruments/import
    body: { file }
    Backend: parse + create full hierarchy
```

---

## 9. NOTIFICATION WORKFLOW

```
System-generated, not user-initiated.

[Event occurs in backend]
    │
    ▼
[Notification Service creates notification]
    - type (document_uploaded, ded_submitted, review_complete, etc.)
    - title
    - message
    - link (target page URL)
    - recipients[] (based on event type + project membership)
    - priority (normal / high)
    │
    ▼
[Store in notifications table]
    │
    ▼
[Delivery:]
    ├─ In-app: badge count on header icon, list on SYS-03
    └─ Email (optional, based on user preferences)

--- User interactions ---

[SYS-03: Notifications page]
    - List all notifications (newest first)
    - Mark as read (individual or bulk)
    - Filter by type
    - Click notification → navigate to linked page
    - Mark all as read
    - Delete old notifications

[Header notification icon]
    - Badge: unread count
    - Dropdown: last 5 notifications
    - "Lihat Semua" → navigate to SYS-03
```

---

## 10. CROSS-WORKFLOW INTERACTIONS

### 10.1 Document → DED dependency

```
[Document uploaded + processed]
    │
    ▼
[Knowledge Base updated with new chunks]
    │
    ▼
[DED Generation can now find more evidence]
    │
    ▼
[If existing DED draft has low evidence coverage]
    └─ Attention Required: "Evidence baru tersedia. Pertimbangkan regenerate draft."
```

### 10.2 Instrument → Project dependency

```
[Admin creates/modifies instrument version]
    │
    ▼
[Projects using this instrument version are affected]
    │
    ▼
[If instrument is ACTIVE and linked to projects:]
    ├─ New criteria/indicators → DED structure updated
    ├─ Modified descriptions → existing drafts may need review
    └─ Notification to project Penyusun: "Struktur instrumen diperbarui"
```

### 10.3 Review → Notification chain

```
[Reviewer approves DED]
    │
    ├─ Notify Penyusun: "DED Kriteria X telah disetujui"
    ├─ Notify Admin: "DED Kriteria X approved oleh Reviewer Y"
    └─ Update Dashboard: Approved count +1, Pending Review -1

[Reviewer requests revision]
    │
    ├─ Notify Penyusun: "Reviewer meminta revisi pada Kriteria X: {comment}"
    ├─ Notify Admin: "Revision requested pada Kriteria X"
    └─ Update Dashboard: Pending Review count maintained
```

---

## 11. ERROR HANDLING PATTERNS

### 11.1 API Error Responses (Standard)

```
{
    "error": {
        "code": "VALIDATION_ERROR",     // machine-readable
        "message": "Field email wajib diisi",  // human-readable (Bahasa Indonesia)
        "details": [                    // per-field errors (optional)
            { "field": "email", "message": "Email wajib diisi" },
            { "field": "name", "message": "Nama minimal 3 karakter" }
        ]
    }
}

HTTP Status codes:
    200 - OK
    201 - Created
    400 - Validation error
    401 - Unauthenticated
    403 - Forbidden (no permission)
    404 - Resource not found
    409 - Conflict (duplicate)
    413 - Payload too large
    429 - Rate limited
    500 - Internal server error
    503 - Service unavailable
```

### 11.2 Frontend Error Handling

```
[API call]
    │
    ├─ 400 → Show inline validation errors near fields
    ├─ 401 → Redirect to /login or /session-expired
    ├─ 403 → Redirect to /403
    ├─ 404 → Redirect to /404
    ├─ 409 → Show conflict message in toast/modal
    ├─ 413 → Show "File terlalu besar"
    ├─ 429 → Show "Terlalu banyak permintaan. Coba lagi dalam X detik."
    ├─ 500 → Show generic error toast + retry option
    └─ Network error → Show "Koneksi terputus. Periksa internet Anda."
```

### 11.3 Optimistic UI vs Confirmed

```
Actions with Optimistic UI (instant feedback, rollback on error):
    - Mark notification as read
    - Toggle filter

Actions requiring Confirmation (wait for API response):
    - Upload document
    - Save DED
    - Submit for review
    - Approve/Reject
    - Create user
    - Delete anything
    - Run experiment
```

---

## 12. AUDIT EVENTS

All significant actions produce audit log entries.

| Event Code              | Actor(s)           | Payload                           |
|-------------------------|--------------------|-----------------------------------|
| USER_LOGIN              | User               | email, IP, user_agent             |
| USER_LOGOUT             | User               | session_id                        |
| USER_CREATED            | Admin              | user_id, email, role              |
| USER_DISABLED           | Admin              | user_id                           |
| PROJECT_CREATED         | Admin              | project_id, name                  |
| MEMBER_ADDED            | Admin              | project_id, user_id, role         |
| MEMBER_REMOVED          | Admin              | project_id, user_id               |
| DOCUMENT_UPLOADED       | Admin, Penyusun    | document_id, project_id, filename |
| DOCUMENT_PROCESSED      | System             | document_id, chunks_count         |
| DOCUMENT_FAILED         | System             | document_id, error_code           |
| DOCUMENT_DELETED        | Admin              | document_id                       |
| DED_GENERATED           | System             | response_id, indicator_id, model  |
| DED_EDITED              | Admin, Penyusun    | response_id, version              |
| DED_SUBMITTED           | Admin, Penyusun    | response_id                       |
| REVISION_REQUESTED      | Reviewer           | response_id, comment              |
| DED_REVISED             | Penyusun           | response_id, version              |
| DED_APPROVED            | Reviewer           | response_id                       |
| PROJECT_DED_APPROVED    | Reviewer           | project_id                        |
| EXPERIMENT_QUEUED       | Researcher         | experiment_id                     |
| EXPERIMENT_COMPLETED    | System             | experiment_id, metrics            |
| EXPERIMENT_FAILED       | System             | experiment_id, error              |
| INSTRUMENT_CREATED      | Admin              | instrument_id                     |
| INSTRUMENT_VERSION_ACTIVATED | Admin         | version_id                        |
| SETTINGS_CHANGED        | Admin              | setting_key, old_value, new_value |

---

## 13. CROSS-REFERENCE

| Document                  | Hubungan                                  |
|---------------------------|-------------------------------------------|
| 03-SYSTEM-WORKFLOW.md     | Original high-level workflows             |
| 12-PAGE-INVENTORY.md      | Page list, routes, priorities             |
| 13-PAGE-ROLE-MATRIX.md    | Role access, visibility, permissions      |
| 00-PROJECT-OVERVIEW.md    | Architecture principles                   |
| 01-UI-UX-SPECIFICATION.md | UI elements per page                      |
| 02-PAGE-ROLE-PERMISSION.md| Permission naming & role matrix           |
