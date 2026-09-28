# 12 — Page Inventory: AI DED LAMEMBA

Tanggal: 28 September 2026
Sumber: FRONTEND-AUDIT.md + 00-PROJECT-OVERVIEW.md + 01-UI-UX-SPECIFICATION.md + 02-PAGE-ROLE-PERMISSION.md + 03-SYSTEM-WORKFLOW.md

---

## Legenda Status

| Status        | Arti                                                      |
|---------------|------------------------------------------------------------|
| UI Ready      | File page ada di frontend, layout & mock data lengkap      |
| Modal Only    | Hanya modal/form, bukan full page                          |
| Duplicate     | Konten identik dengan page lain                            |
| Sidebar Only  | Muncul di sidebar tapi tidak ada file/route                |
| Planned       | Belum ada di frontend, didefinisikan di spesifikasi        |
| Not Specified | Belum ada di frontend maupun spesifikasi (perlu keputusan) |

---

## A. AUTHENTICATION PAGES

Tidak ada satupun page authentication di frontend saat ini.
Semua planned berdasarkan 02-PAGE-ROLE-PERMISSION.md.

| ID      | Page             | Roles      | Target Route           | Existing | Status  |
|---------|------------------|------------|------------------------|----------|---------|
| AUTH-01 | Login            | Public     | /login                 | NO       | Planned |
| ~~AUTH-02~~ | ~~Register~~ | ~~Public~~ | ~~-~~                 | NO       | DIHAPUS (Keputusan #1: akun dibuat Admin) |
| AUTH-03 | Forgot Password  | Public     | /forgot-password       | NO       | Planned |
| AUTH-04 | Reset Password   | Public     | /reset-password/:token | NO       | Planned |
| AUTH-05 | Session Expired  | All        | /session-expired       | NO       | Planned |
| AUTH-06 | Access Denied    | All        | /403                   | NO       | Planned |
| AUTH-07 | Not Found (404)  | All        | /*                     | NO       | Planned |

### Detail per page:

**AUTH-01: Login**
- Purpose: Autentikasi user
- Elements: email input, password input, remember me, submit, link ke forgot password, link ke register
- States: initial, loading, validation error, auth error, success redirect
- Data: -
- API: POST /api/auth/login

**~~AUTH-02: Register~~ — DIHAPUS**
- Keputusan #1: Tidak perlu self-register. Akun dibuat oleh Admin. Untuk demo/skripsi gunakan seed account.

**AUTH-03: Forgot Password**
- Purpose: Request reset password via email
- Elements: email input, submit
- States: initial, loading, success message
- API: POST /api/auth/forgot-password

**AUTH-04: Reset Password**
- Purpose: Set password baru dari link email
- Elements: new password, confirm password, submit
- States: initial, token invalid, loading, success
- API: POST /api/auth/reset-password

**AUTH-05: Session Expired**
- Purpose: Informasi session habis
- Elements: pesan, tombol re-login
- States: static

**AUTH-06: Access Denied (403)**
- Purpose: User tidak punya permission
- Elements: pesan, tombol kembali
- States: static

**AUTH-07: Not Found (404)**
- Purpose: Route tidak ditemukan
- Elements: pesan, tombol kembali ke dashboard
- States: static

---

## B. SHARED WORKSPACE PAGES

Pages yang diakses oleh multiple roles (Admin, Penyusun, Reviewer) dengan visibility berbeda.

| ID      | Page            | Roles               | Target Route                              | Existing  | Status    |
|---------|-----------------|----------------------|-------------------------------------------|-----------|-----------|
| WS-01   | Dashboard       | Admin,Penyusun,Rev   | /dashboard                                | YES       | UI Ready  |
| WS-02   | Projects List   | Admin,Penyusun       | /projects                                 | YES*      | Modal Only|
| WS-03   | Project Detail  | Admin,Penyusun,Rev   | /projects/:projectId                      | YES       | UI Ready  |
| WS-04   | Documents       | Admin,Penyusun       | /projects/:projectId/documents            | YES       | UI Ready  |
| WS-05   | Knowledge Base  | Admin,Penyusun,Rev,Res| /projects/:projectId/knowledge-base      | YES       | UI Ready  |
| WS-06   | DED Overview    | Admin,Penyusun,Rev   | /projects/:projectId/ded                  | YES       | UI Ready  |
| ~~WS-07~~ | ~~Criterion Detail~~| ~~-~~              | ~~-~~                                       | YES**     | DIHAPUS (Duplicate WS-06) |
| WS-08   | DED Workspace/Editor| Admin,Penyusun       | /projects/:projectId/ded/:criterionId/edit| NO        | Planned (merged PEN-04) |
| WS-09   | Evidence Viewer | Admin,Penyusun,Rev   | /projects/:projectId/evidence/:evidenceId | NO        | Planned   |
| WS-10   | Version History | Admin,Penyusun,Rev   | /projects/:projectId/ded/:criterionId/versions | NO   | Planned   |

*WS-02: Frontend hanya punya modal "Buat Proyek Baru", bukan halaman list proyek.
**WS-07: CriterionDetailOrientasiStrategis = duplikat konten DedOverview.

### Detail per page:

**WS-01: Dashboard**
- Purpose: Ringkasan kondisi project, DED, dokumen, RAG, review
- Roles visibility:
  - Admin: semua data, semua project
  - Penyusun: project yang di-assign, stat DED sendiri
  - Reviewer: project yang di-assign, stat review pending
- Elements:
  - Stat cards (6): Active Projects, Total Documents, Processed Docs, DED Progress, AI Drafts, Pending Reviews
  - Status Kriteria DED table (7 kriteria)
  - Document Processing Health (4 status)
  - Attention Required panel (issues)
  - Aktivitas Terkini timeline
  - Search (context-aware)
- Mock data saat ini: 3 project, 48 dokumen, 2847 chunks, 67% completion
- Actions: Export LAP, Generate Baru
- States needed: loading, loaded, empty (no projects), error
- API: GET /api/dashboard, GET /api/projects/summary

**WS-02: Projects List**
- Purpose: Daftar semua project + create project
- Elements needed (LIST - belum ada):
  - Project table/cards: nama, instansi, PS, tahun, status, progress, members, actions
  - Filter: status, tahun
  - Search
  - Pagination
  - Button: Buat Proyek Baru
- Elements existing (MODAL):
  - Form fields: Perguruan Tinggi (*), UPPS (*), Jenis Program (*), Tahun Akreditasi (*), Nama PS (*), Status Mulai
  - Buttons: Batal, Buat Proyek
- States needed: loading, loaded, empty, create modal open, validation error, submit loading
- API: GET /api/projects, POST /api/projects
- Permission: projects.view, projects.create

**WS-03: Project Detail**
- Purpose: Ringkasan lengkap satu project
- Elements:
  - Header: nama project, instansi, UPPS, PS, tahun, status badges
  - Tabs: Overview, DED Templates, Activity Log
  - Stat cards (6): Documents, Processed, KB Chunks, DED Progress, AI Drafts, Pending Review
  - Kriteria table (7 rows)
  - Dokumen & Evidence terbaru
  - Attention Required (scoped project)
  - Tim Penyusun & Asesor
  - Aktivitas Terkini
  - Actions: Edit Proyek, Generate Baru
- API: GET /api/projects/:id
- Permission: projects.view + project membership

**WS-04: Documents**
- Purpose: Upload & kelola dokumen (DED, DKPS, Evidence)
- Elements:
  - Upload area (drag-drop, PDF/DOCX/XLSX, max 50MB)
  - Filter bar: search, project, tipe, status, kriteria
  - Document table: checkbox, nama, tipe, ukuran, tanggal, status RAG, chunks, actions
  - Processing Detail panel (6-step pipeline)
  - Failed process detail + retry
  - Pagination
- Document statuses: Uploaded, Processing, Processed, Failed
- Pipeline steps: Extract text, Clean & Normalization, Chunking & Tokenization, Vector Embeddings, BM25 Index, Hybrid RAG Ready
- API: GET /api/documents, POST /api/documents/upload, POST /api/documents/:id/process, POST /api/documents/:id/retry
- Permission: documents.upload, documents.process, documents.delete

**WS-05: Knowledge Base**
- Purpose: Vector store, chunks, RRF index status
- Elements:
  - RRF Algorithm banner
  - Stat cards (4): Total Sources, Total Chunks, Successfully Indexed, Failed Chunks
  - Filter: Project, Document, Kriteria, Dimensi, Search chunk ID/kutipan
  - Chunks table: Source/Bukti, Hlm, Kriteria/Dimensi, Chunk ID, Semantic score, BM25 score, Status
  - Chunk Detail panel: excerpt, metadata, status sinkronisasi, Lihat Dokumen Asli, Inspect RRF Rank
  - Actions: Re-index RRF, Tambah Source
  - Pagination
- Chunk statuses: Indexed, Needs Review, Failed
- API: GET /api/knowledge-base/chunks, GET /api/knowledge-base/stats

**WS-06: DED Overview**
- Purpose: Status kompilasi DED per kriteria
- Elements:
  - Progress bar (overall completion)
  - Stats: dimensi count, indikator count, draft/reviewed/evidence linked
  - Left: Dimensi list (cards per dimensi, progress, status, CTA)
  - Right:
    - AI Processing pipeline visualization (5 steps)
    - Indicator guide (per indicator: ID, judul, deskripsi)
    - AI-Assisted Draft (Gemini output + warning disclaimer)
    - Source Citations (dokumen, halaman, kutipan, View Source)
    - Evidence Linked (document cards + status)
    - Supervisor & Human Review Panel (status, komentar, actor, timestamp)
    - Version History
  - Actions: Lihat Semua Evidence, Buka Workspace
- API: GET /api/ded/:projectId/criteria, GET /api/ded/:projectId/criteria/:id

**~~WS-07: Criterion Detail~~ — DIHAPUS**
- Keputusan: Duplicate dari WS-06. DED Overview sudah handle parameterized route.

**WS-08: DED Workspace/Editor (PLANNED — merged PEN-04)**
- Purpose: Workspace editing untuk narasi DED per indicator (gabungan WS-08 + PEN-04)
- Keputusan #4: PEN-04 DED Workspace di-merge ke sini
- Elements needed:
  - Indicator information (criterion, dimension, indicator, description)
  - Evidence panel (source documents, retrieved chunks, page number, relevance)
  - Generation configuration (retrieval count, generation instruction)
  - Generated draft (text, citation, evidence reference)
  - Rich text editor area
  - Actions: Generate, Regenerate, Edit, Save, Submit for Review
- API: POST /api/ded/generate, PUT /api/ded/responses/:id, POST /api/ded/responses/:id/submit

**WS-09: Evidence Viewer (PLANNED)**
- Purpose: Lihat dokumen asli dan highlight relevant chunk
- Elements needed:
  - Document viewer (PDF/DOCX preview)
  - Chunk highlight overlay
  - Metadata panel (source, page, criteria, chunk ID)
  - Related chunks list
- API: GET /api/documents/:id/view, GET /api/documents/:id/chunks

**WS-10: Version History (PLANNED)**
- Purpose: Lihat semua versi DED response, compare perubahan
- Elements needed:
  - Version list (version number, author, timestamp, status)
  - Diff viewer (compare 2 versions)
  - Restore action
- API: GET /api/ded/responses/:id/versions

---

## C. REVIEW PAGES

Semua planned — belum ada di frontend.

| ID      | Page              | Roles          | Target Route                                    | Existing | Status  |
|---------|-------------------|----------------|-------------------------------------------------|----------|---------|
| REV-01  | Review Dashboard  | Reviewer       | /review                                          | NO       | Planned |
| REV-02  | Assigned Projects | Reviewer       | /review/projects                                  | NO       | Planned |
| REV-03  | Review Workspace  | Reviewer       | /review/projects/:projectId/criteria/:criterionId | NO       | Planned |
| REV-04  | Evidence Review   | Reviewer       | /review/projects/:projectId/evidence/:id          | NO       | Planned |
| REV-05  | Revision Requests | Reviewer,Penyusun | /review/revisions                              | NO       | Planned |
| REV-06  | Version Comparison| Reviewer       | /review/compare/:responseId                       | NO       | Planned |
| REV-07  | Approval          | Reviewer       | /review/projects/:projectId/approve               | NO       | Planned |

### Detail per page:

**REV-01: Review Dashboard**
- Purpose: Overview semua review yang ditugaskan
- Elements:
  - Stat cards: Assigned Projects, Pending Reviews, Approved, Revision Requested
  - Pending review list (per project, per criterion)
  - Recent review activity
- API: GET /api/review/dashboard

**REV-02: Assigned Projects**
- Purpose: Daftar project yang ditugaskan untuk di-review
- Elements:
  - Project cards/table: nama, status, progress, pending items, deadline
  - Filter: status
- API: GET /api/review/projects

**REV-03: Review Workspace**
- Purpose: Review satu DED response (narasi + evidence + citation)
- Elements:
  - Project & criterion info
  - Generated answer / narasi DED
  - Evidence panel (source, page, retrieved content)
  - Reviewer comment input
  - Decision buttons: Approve, Request Revision
  - Previous comments history
  - Version selector
- API: GET /api/review/:responseId, POST /api/review/:responseId/comment, POST /api/review/:responseId/approve, POST /api/review/:responseId/request-revision

**REV-04: Evidence Review**
- Purpose: Review khusus evidence yang di-link ke DED
- Elements:
  - Evidence document viewer
  - Linked DED sections
  - Relevance assessment
  - Comment
- API: GET /api/evidence/:id/review

**REV-05: Revision Requests**
- Purpose: Daftar revision request yang perlu ditindaklanjuti
- Elements:
  - Table: DED section, reviewer, komentar, tanggal, status
  - Filter: project, status
- API: GET /api/review/revisions

**REV-06: Version Comparison**
- Purpose: Bandingkan 2 versi DED response
- Elements:
  - Side-by-side diff
  - Version metadata
  - Changes highlight
- API: GET /api/ded/responses/:id/compare?v1=X&v2=Y

**REV-07: Approval**
- Purpose: Final approval untuk DED per kriteria/keseluruhan
- Elements:
  - Checklist per criterion
  - Approval summary
  - Digital signature / confirmation
  - Submit approval
- API: POST /api/review/projects/:projectId/approve

---

## D. PENYUSUN PAGES

Pages khusus untuk role Penyusun DED. Sebagian besar menggunakan Shared Workspace pages (WS-*) dengan visibility berbeda. Berikut pages tambahan yang perlu di-build:

| ID      | Page              | Roles    | Target Route                                     | Existing | Status  |
|---------|-------------------|----------|--------------------------------------------------|----------|---------|
| PEN-01  | My Projects       | Penyusun | /my-projects                                      | NO       | Planned |
| ~~PEN-02~~ | ~~Upload Evidence~~ | ~~-~~ | ~~-~~                                            | NO       | DIHAPUS (Keputusan #3: masuk WS-04) |
| PEN-03  | AI Generation     | Penyusun | /projects/:projectId/ded/:criterionId/generate    | NO       | Planned |
| ~~PEN-04~~ | ~~DED Workspace~~ | ~~-~~ | ~~-~~                                            | NO       | DIHAPUS (Keputusan #4: merged ke WS-08) |
| PEN-05  | Review Status     | Penyusun | /projects/:projectId/review-status                | NO       | Planned |
| PEN-06  | Profile           | All      | /profile                                          | NO       | Planned |

### Detail per page:

**PEN-01: My Projects**
- Purpose: Daftar project yang di-assign ke penyusun ini
- Elements: project cards, progress per project, quick actions
- API: GET /api/projects?member=me

**~~PEN-02: Upload Evidence~~ — DIHAPUS**
- Keputusan #3: Tidak perlu standalone page. Fungsi upload evidence diimplementasi di WS-04 Documents dengan tambahan filter per kriteria.

**PEN-03: AI Generation**
- Purpose: Generate draft DED per indicator menggunakan Gemini + RAG
- Elements:
  - Indicator information (criterion, dimension, indicator, description)
  - Evidence panel (source documents, retrieved chunks, page, relevance)
  - Generation configuration (retrieval count, instruction)
  - Generated draft (text, citation, evidence reference)
  - Actions: Generate, Regenerate, Edit, Save
- API: POST /api/ded/generate

**~~PEN-04: DED Workspace~~ — DIHAPUS**
- Keputusan #4: Di-merge ke WS-08 DED Workspace/Editor.

**PEN-05: Review Status**
- Purpose: Lihat status review dari reviewer untuk DED yang sudah di-submit
- Elements: table per criterion, status, reviewer comments, revision requests
- API: GET /api/projects/:projectId/review-status

**PEN-06: Profile**
- Purpose: Edit profil user
- Elements: nama, email, password change, avatar
- API: GET /api/users/me, PUT /api/users/me

---

## E. RESEARCH PAGES

| ID      | Page                | Roles      | Target Route                     | Existing | Status     |
|---------|---------------------|------------|----------------------------------|----------|------------|
| RES-01  | Research Dashboard  | Researcher | /research                        | YES      | UI Ready   |
| RES-02  | Evaluation Dataset  | Researcher | /research/datasets               | YES      | UI Ready   |
| RES-03  | Dataset Detail      | Researcher | /research/datasets/:id           | NO       | Planned    |
| RES-04  | Experiments         | Researcher | /research/experiments            | YES      | UI Ready   |
| RES-05  | Experiment Detail   | Researcher | /research/experiments/:id        | NO       | Planned    |
| RES-06  | Retrieval Inspection| Researcher | /research/retrieval-inspection   | YES      | UI Ready   |
| RES-07  | RAGAS Evaluation    | Researcher | /research/ragas-evaluation       | NO       | Sidebar Only |
| RES-08  | Method Comparison   | Researcher | /research/method-comparison      | NO       | Sidebar Only |
| ~~RES-09~~ | ~~Research Report~~ | ~~-~~ | ~~-~~                          | NO       | DIHAPUS (Keputusan #6: tidak perlu untuk skripsi) |

### Detail per page:

**RES-01: Research Dashboard**
- Purpose: Overview research/evaluation prototype
- Elements: summary cards (Dataset, Test Cases, Methods, Latest Run), method cards (LLM Only, Semantic RAG, Hybrid RAG), RAGAS metrics, dataset overview, research workflow, run history
- Existing: UI Ready

**RES-02: Evaluation Dataset**
- Purpose: Manage test cases evaluasi
- Elements: KPI cards, test case table, import/tambah, filter, detail panel
- Existing: UI Ready

**RES-03: Dataset Detail (PLANNED)**
- Purpose: Detail satu dataset, lihat semua test cases, ground truth, coverage
- API: GET /api/research/datasets/:id

**RES-04: Experiments**
- Purpose: Manage experiment configurations & runs
- Elements: summary cards, experiment table, new experiment form, state machine visualization
- Existing: UI Ready

**RES-05: Experiment Detail (PLANNED)**
- Purpose: Detail satu experiment run, results, metrics
- API: GET /api/research/experiments/:id

**RES-06: Retrieval Inspection**
- Purpose: Inspect retrieval per query/test case
- Elements: query input, config, pipeline visualization, result groups (Semantic/BM25/RRF), context assembly, chunk detail
- Existing: UI Ready

**RES-07: RAGAS Evaluation (PLANNED)**
- Purpose: Run & view RAGAS evaluation metrics
- Elements:
  - Metric cards: Faithfulness, Answer Relevancy, Context Precision, Context Recall
  - Per-question breakdown
  - Comparison across experiments
  - Export results
- API: GET /api/research/ragas/:experimentId

**RES-08: Method Comparison (PLANNED)**
- Purpose: Side-by-side comparison LLM Only vs Semantic RAG vs Hybrid RAG
- Elements:
  - Method selector
  - Metric comparison table
  - Chart visualization
  - Per-question comparison
  - Statistical summary
- API: GET /api/research/comparison

**~~RES-09: Research Report~~ — DIHAPUS**
- Keputusan #6: Tidak perlu untuk skripsi. Export/report cukup dari hasil RAGAS Evaluation & Method Comparison.

---

## F. SYSTEM PAGES

| ID      | Page                   | Roles | Target Route                  | Existing | Status      |
|---------|------------------------|-------|-------------------------------|----------|-------------|
| SYS-01  | Users & Access         | Admin | /system/users                 | NO       | Sidebar Only|
| SYS-02  | Roles & Permissions    | Admin | /system/roles                 | NO       | Planned     |
| SYS-03  | Notifications          | All   | /system/notifications         | NO       | Sidebar Only|
| SYS-04  | Audit Logs             | Admin | /system/audit-logs            | NO       | Planned     |
| SYS-05  | Settings               | Admin | /system/settings              | NO       | Sidebar Only|
| SYS-06  | Instrument Management  | Admin | /system/instruments           | NO       | Planned (Keputusan #5: hierarchical tree, includes SYS-07-11) |
| ~~SYS-07~~ | ~~Instrument Version~~ | ~~-~~ | ~~-~~                      | NO       | DIHAPUS (masuk SYS-06) |
| ~~SYS-08~~ | ~~Criteria Manager~~   | ~~-~~ | ~~-~~                      | NO       | DIHAPUS (masuk SYS-06) |
| ~~SYS-09~~ | ~~Dimensions Manager~~ | ~~-~~ | ~~-~~                      | NO       | DIHAPUS (masuk SYS-06) |
| ~~SYS-10~~ | ~~Indicators Manager~~ | ~~-~~ | ~~-~~                      | NO       | DIHAPUS (masuk SYS-06) |
| ~~SYS-11~~ | ~~Evidence Requirements~~ | ~~-~~ | ~~-~~                   | NO       | DIHAPUS (masuk SYS-06) |
| SYS-12  | DED Structure          | Admin | /system/ded-structure            | NO    | Planned     |

### Detail per page:

**SYS-01: Users & Access**
- Purpose: CRUD user, assign roles
- Elements:
  - User table: nama, email, role, status, last login, actions
  - Create/Edit user modal
  - Assign role
  - Activate/Deactivate user
  - Filter, search, pagination
- API: GET /api/users, POST /api/users, PUT /api/users/:id
- Permission: users.view, users.create, users.update, users.disable

**SYS-02: Roles & Permissions**
- Purpose: Manage roles dan permission matrix
- Elements: role list, permission checklist per role, create role
- API: GET /api/roles, PUT /api/roles/:id/permissions

**SYS-03: Notifications**
- Purpose: Notification center
- Elements: notification list, mark read/unread, filter by type, settings
- API: GET /api/notifications

**SYS-04: Audit Logs**
- Purpose: System-wide activity log
- Elements: log table (timestamp, actor, action, resource, detail), filter, export
- API: GET /api/audit-logs
- Permission: audit.view

**SYS-05: Settings**
- Purpose: System configuration
- Elements: general settings, AI/RAG settings, file upload limits, notification settings
- API: GET /api/settings, PUT /api/settings

**SYS-06: Instrument Management (Keputusan #5: SATU PAGE hierarchical tree)**
- Purpose: Manage instrumen akreditasi (LAMEMBA dll.) + seluruh hierarki (version → criteria → dimensions → indicators → evidence requirements)
- Elements: instrument list, create/edit, version management, hierarchical tree view (expandable), inline CRUD per level
- Keputusan #5: SYS-07 s/d SYS-11 dihapus sebagai page terpisah, semua masuk sini sebagai tree view
- API: GET /api/instruments, GET /api/instruments/:id/tree, POST/PUT/DELETE per level
- Permission: instrument.manage

**~~SYS-07-11: Instrument Sub-pages~~ — DIHAPUS**
- Keputusan #5: Semua level hierarki (version, criteria, dimensions, indicators, evidence requirements) di-handle dalam SYS-06 sebagai hierarchical tree view.

**SYS-12: DED Structure**
- Purpose: Manage template/struktur dokumen DED
- Elements: structure tree editor, section ordering, template management

---

## G. SUMMARY (UPDATED — post keputusan)

### Count by Status

| Status       | Count |
|--------------|-------|
| UI Ready     | 9     |
| Modal Only   | 1     |
| Sidebar Only | 4     |
| Planned      | 27    |
| DIHAPUS      | 10    |
| **AKTIF**    | **41**|

### Count by Category (aktif saja)

| Category       | Existing | Planned | Total |
|----------------|----------|---------|-------|
| Authentication | 0        | 6       | 6     |
| Workspace      | 6        | 3       | 9     |
| Review         | 0        | 7       | 7     |
| Penyusun       | 0        | 4       | 4     |
| Research       | 4        | 4       | 8     |
| System         | 0        | 7       | 7     |
| **TOTAL**      | **10**   | **31**  | **41**|

*Catatan: Existing 10 = 6 UI Ready (WS) + 4 UI Ready (Research). Modal-only (WS-02) dihitung sebagai existing tapi perlu rebuild.

### Count by Role (aktif saja)

| Role       | Accessible Pages | Notes                                    |
|------------|-----------------|------------------------------------------|
| Admin      | 27              | Semua WS + System + shared               |
| Penyusun   | 17              | WS (visibility terbatas) + PEN dedicated |
| Reviewer   | 15              | WS (read-only) + REV dedicated           |
| Researcher | 8               | Research pages                            |
| Public     | 3               | Login, Forgot Password, Reset Password    |

---

## H. PRIORITAS IMPLEMENTASI (UPDATED)

### Phase 1 — Foundation (Auth + Layout + Routing)
1. AUTH-01: Login
2. AUTH-05: Session Expired
3. AUTH-06: Access Denied (403)
4. AUTH-07: Not Found (404)
5. Shared Layout component extraction (Sidebar + Header + Footer)
6. Role-based routing & navigation guard
7. PEN-06: Profile (simple, reused by all roles)

### Phase 2 — Admin Core
8. WS-01: Dashboard (refactor from existing)
9. WS-02: Projects List (build actual list page, keep create modal)
10. WS-03: Project Detail (refactor from existing)
11. SYS-01: Users & Access (Admin creates accounts — Keputusan #1)
12. SYS-06: Instrument Management (hierarchical tree — Keputusan #5)

### Phase 3 — Document & Knowledge Base
13. WS-04: Documents (refactor + evidence upload via filter — Keputusan #3)
14. WS-05: Knowledge Base (refactor)

### Phase 4 — DED Workflow (Penyusun + Admin)
15. WS-06: DED Overview (refactor, absorb WS-07 duplicate)
16. WS-08: DED Workspace/Editor (merged PEN-04 — Keputusan #4)
17. PEN-03: AI Generation
18. WS-09: Evidence Viewer
19. WS-10: Version History
20. PEN-01: My Projects
21. PEN-05: Review Status

### Phase 5 — Review Workflow
22. REV-01: Review Dashboard
23. REV-02: Assigned Projects
24. REV-03: Review Workspace
25. REV-04: Evidence Review
26. REV-05: Revision Requests
27. REV-06: Version Comparison
28. REV-07: Approval

### Phase 6 — Research
29. RES-07: RAGAS Evaluation
30. RES-08: Method Comparison
31. RES-03: Dataset Detail
32. RES-05: Experiment Detail
(RES-01, RES-02, RES-04, RES-06 = refactor existing)

### Phase 7 — System & Polish
33. SYS-02: Roles & Permissions
34. SYS-03: Notifications
35. SYS-04: Audit Logs
36. SYS-05: Settings
37. SYS-12: DED Structure
38. AUTH-03: Forgot Password
39. AUTH-04: Reset Password

---

## I. ROUTE STRUCTURE TARGET (UPDATED — 41 pages)

```text
# AUTH (6 pages)
/login
/forgot-password
/reset-password/:token
/session-expired
/403
/404

# WORKSPACE (9 pages, shared across roles)
/dashboard
/projects
/projects/:projectId
/projects/:projectId/documents
/projects/:projectId/knowledge-base
/projects/:projectId/ded
/projects/:projectId/ded/:criterionId/edit
/projects/:projectId/evidence/:evidenceId
/projects/:projectId/ded/:criterionId/versions

# PENYUSUN (4 pages)
/my-projects
/projects/:projectId/ded/:criterionId/generate
/projects/:projectId/review-status
/profile

# REVIEW (7 pages)
/review
/review/projects
/review/projects/:projectId/criteria/:criterionId
/review/projects/:projectId/evidence/:id
/review/projects/:projectId/approve
/review/revisions
/review/compare/:responseId

# RESEARCH (8 pages — 4 existing, 4 planned)
/research
/research/datasets
/research/datasets/:id
/research/experiments
/research/experiments/:id
/research/retrieval-inspection
/research/ragas-evaluation
/research/method-comparison

# SYSTEM (7 pages)
/system/users
/system/roles
/system/notifications
/system/audit-logs
/system/settings
/system/instruments
/system/ded-structure
```

### Routes yang DIHAPUS:
- ~~/register~~ (Keputusan #1)
- ~~/projects/:projectId/upload~~ (Keputusan #3: masuk /documents)
- ~~/projects/:projectId/ded/:criterionId/workspace~~ (Keputusan #4: merged ke /edit)
- ~~/projects/:projectId/ded/:criterionId~~ (Duplicate: WS-06 handles via params)
- ~~/system/instruments/:id/versions~~ (Keputusan #5: masuk /instruments)
- ~~/system/instruments/:id/criteria~~ (Keputusan #5)
- ~~/system/criteria/:id/dimensions~~ (Keputusan #5)
- ~~/system/dimensions/:id/indicators~~ (Keputusan #5)
- ~~/system/indicators/:id/evidence~~ (Keputusan #5)
- ~~/research/reports/:id~~ (Keputusan #6)

---

## J. KEPUTUSAN FINAL

| No | Pertanyaan                        | Keputusan                                                                                      |
|----|-----------------------------------|------------------------------------------------------------------------------------------------|
| 1  | Register page                     | TIDAK PERLU. Akun dibuat Admin. Demo/skripsi pakai seed account.                               |
| 2  | Halaman Penyusun                  | SHARED WORKSPACE + role visibility. Beberapa dedicated workflow page tetap ada.                 |
| 3  | Upload Evidence (PEN-02)          | TIDAK PERLU standalone page. Implementasi di WS-04 Documents + filter kriteria.                |
| 4  | DED Workspace vs Editor           | MERGE PEN-04 + WS-08 menjadi satu halaman: WS-08 DED Workspace/Editor.                        |
| 5  | Instrument sub-pages (SYS-07-11)  | SATU PAGE dengan hierarchical tree view. SYS-07 s/d SYS-11 dihapus, semua masuk SYS-06.       |
| 6  | Research Report (RES-09)          | TIDAK PERLU untuk skripsi. Export cukup dari RAGAS Evaluation & Method Comparison.              |
| 7  | Prioritas implementasi            | SETUJU 7 fase. P1-P4 sedikit diperbaiki agar foundation tuntas sebelum feature.                |

### Dampak keputusan terhadap page count:

- AUTH-02 Register: DIHAPUS (-1)
- PEN-02 Upload Evidence: DIHAPUS, fungsi masuk WS-04 (-1)
- PEN-04 DED Workspace: DIHAPUS, di-merge ke WS-08 (-1)
- SYS-07 Instrument Version: DIHAPUS, masuk SYS-06 (-1)
- SYS-08 Criteria Manager: DIHAPUS, masuk SYS-06 (-1)
- SYS-09 Dimensions Manager: DIHAPUS, masuk SYS-06 (-1)
- SYS-10 Indicators Manager: DIHAPUS, masuk SYS-06 (-1)
- SYS-11 Evidence Requirements: DIHAPUS, masuk SYS-06 (-1)
- RES-09 Research Report: DIHAPUS (-1)
- WS-07 Criterion Detail: sudah DUPLICATE, dikonfirmasi DIHAPUS (-1)

**Total dihapus: 10 pages**
**Total page original: 51 (bukan 46 — hitungan sebelumnya ada error)**
**Total page aktif final: 41 pages (10 existing + 31 to build)**
