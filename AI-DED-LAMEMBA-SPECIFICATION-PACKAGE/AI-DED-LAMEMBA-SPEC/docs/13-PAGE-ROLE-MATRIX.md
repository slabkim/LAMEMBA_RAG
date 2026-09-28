# 13 — Page-Role Matrix: AI DED LAMEMBA

Tanggal: 28 September 2026
Sumber: 12-PAGE-INVENTORY.md + 02-PAGE-ROLE-PERMISSION.md + 01-UI-UX-SPECIFICATION.md + 03-SYSTEM-WORKFLOW.md
Step: 3 — Finalisasi detail page per role

---

## A. RINGKASAN ROLE

| Role            | Deskripsi                                                     | Jumlah Page Accessible |
|-----------------|---------------------------------------------------------------|------------------------|
| Admin           | Superuser — kelola user, project, instrument, system          | 34                     |
| Penyusun DED    | Menyusun narasi DED, upload evidence, generate AI draft       | 17                     |
| Reviewer/Asesor | Review & approve DED draft, beri komentar, request revision   | 16                     |
| Researcher      | Evaluasi RAG prototype, run experiment, compare methods       | 9                      |
| Public          | Belum login                                                   | 4                      |

Catatan: Angka di atas dihitung berdasarkan akses ke page, bukan ownership. Beberapa page shared di antara role.

---

## B. MASTER ACCESS MATRIX

### Legend

| Symbol | Arti                                                    |
|--------|----------------------------------------------------------|
| ✓      | Full access (CRUD sesuai page purpose)                   |
| R      | Read-only — bisa lihat tapi tidak bisa edit/action       |
| S      | Scoped — hanya project/resource yang di-assign           |
| -      | Tidak ada akses (menu hidden, direct URL → 403)          |

### Matrix

| ID      | Page                    | Admin | Penyusun | Reviewer | Researcher | Public |
|---------|-------------------------|-------|----------|----------|------------|--------|
| AUTH-01 | Login                   | -     | -        | -        | -          | ✓      |
| AUTH-03 | Forgot Password         | -     | -        | -        | -          | ✓      |
| AUTH-04 | Reset Password          | -     | -        | -        | -          | ✓      |
| AUTH-05 | Session Expired         | ✓     | ✓        | ✓        | ✓          | ✓      |
| AUTH-06 | Access Denied (403)     | ✓     | ✓        | ✓        | ✓          | -      |
| AUTH-07 | Not Found (404)         | ✓     | ✓        | ✓        | ✓          | ✓      |
| WS-01   | Dashboard               | ✓     | S        | S        | S          | -      |
| WS-02   | Projects List           | ✓     | S        | S        | -          | -      |
| WS-03   | Project Detail          | ✓     | S        | S        | -          | -      |
| WS-04   | Documents               | ✓     | S        | R/S      | -          | -      |
| WS-05   | Knowledge Base          | ✓     | S        | R/S      | R          | -      |
| WS-06   | DED Overview            | ✓     | S        | S        | -          | -      |
| WS-08   | DED Workspace/Editor    | ✓     | S        | -        | -          | -      |
| WS-09   | Evidence Viewer         | ✓     | S        | S        | -          | -      |
| WS-10   | Version History         | ✓     | S        | S        | -          | -      |
| PEN-01  | My Projects             | -     | ✓        | -        | -          | -      |
| PEN-03  | AI Generation           | ✓     | S        | -        | -          | -      |
| PEN-05  | Review Status           | -     | S        | -        | -          | -      |
| PEN-06  | Profile                 | ✓     | ✓        | ✓        | ✓          | -      |
| REV-01  | Review Dashboard        | R     | -        | ✓        | -          | -      |
| REV-02  | Assigned Projects       | -     | -        | ✓        | -          | -      |
| REV-03  | Review Workspace        | R     | -        | ✓        | -          | -      |
| REV-04  | Evidence Review         | R     | -        | ✓        | -          | -      |
| REV-05  | Revision Requests       | R     | R/S      | ✓        | -          | -      |
| REV-06  | Version Comparison      | R     | R/S      | ✓        | -          | -      |
| REV-07  | Approval                | R     | -        | ✓        | -          | -      |
| RES-01  | Research Dashboard      | ✓     | -        | -        | ✓          | -      |
| RES-02  | Evaluation Dataset      | ✓     | -        | -        | ✓          | -      |
| RES-03  | Dataset Detail          | ✓     | -        | -        | ✓          | -      |
| RES-04  | Experiments             | ✓     | -        | -        | ✓          | -      |
| RES-05  | Experiment Detail       | ✓     | -        | -        | ✓          | -      |
| RES-06  | Retrieval Inspection    | ✓     | -        | -        | ✓          | -      |
| RES-07  | RAGAS Evaluation        | ✓     | -        | -        | ✓          | -      |
| RES-08  | Method Comparison       | ✓     | -        | -        | ✓          | -      |
| SYS-01  | Users & Access          | ✓     | -        | -        | -          | -      |
| SYS-02  | Roles & Permissions     | ✓     | -        | -        | -          | -      |
| SYS-03  | Notifications           | ✓     | ✓        | ✓        | ✓          | -      |
| SYS-04  | Audit Logs              | ✓     | -        | -        | -          | -      |
| SYS-05  | Settings                | ✓     | -        | -        | -          | -      |
| SYS-06  | Instrument Management   | ✓     | -        | -        | -          | -      |
| SYS-12  | DED Structure           | ✓     | -        | -        | -          | -      |

---

## C. SIDEBAR NAVIGATION PER ROLE

Sidebar menggunakan shared component dengan visibility per role.
Item yang tidak accessible oleh role tersebut di-hide (bukan disabled).

### C.1 Admin Sidebar

```
── AKTIF WORKSPACE ──────────
   [Project Name]
   [Status Badge]

── Workspace ────────────────
   Dashboard              → /dashboard
   Projects               → /projects
   Documents              → /projects/:id/documents
   Knowledge Base         → /projects/:id/knowledge-base
   DED Overview           → /projects/:id/ded

── Review ───────────────────
   Review Dashboard       → /review              (read-only)
   Revision Requests      → /review/revisions     (read-only)

── Research ─────────────────
   Research Dashboard     → /research
   Evaluation Dataset     → /research/datasets
   Experiments            → /research/experiments
   Retrieval Inspection   → /research/retrieval-inspection
   RAGAS Evaluation       → /research/ragas-evaluation
   Method Comparison      → /research/method-comparison

── System ───────────────────
   Users & Access         → /system/users
   Roles & Permissions    → /system/roles
   Instrument Management  → /system/instruments
   DED Structure          → /system/ded-structure
   Notifications          → /system/notifications
   Audit Logs             → /system/audit-logs
   Settings               → /system/settings
```

### C.2 Penyusun DED Sidebar

```
── AKTIF WORKSPACE ──────────
   [Project Name]
   [Status Badge]

── Workspace ────────────────
   Dashboard              → /dashboard
   My Projects            → /my-projects
   Documents              → /projects/:id/documents
   Knowledge Base         → /projects/:id/knowledge-base
   DED Overview           → /projects/:id/ded

── Status ───────────────────
   Review Status          → /projects/:id/review-status
   Revision Requests      → /review/revisions     (own items only)

── Umum ─────────────────────
   Notifications          → /system/notifications
   Profile                → /profile
```

### C.3 Reviewer/Asesor Sidebar

```
── AKTIF WORKSPACE ──────────
   [Project Name]
   [Status Badge]

── Review ───────────────────
   Review Dashboard       → /review
   Assigned Projects      → /review/projects
   Revision Requests      → /review/revisions

── Workspace (Read-only) ────
   Dashboard              → /dashboard
   Documents              → /projects/:id/documents     (view only)
   Knowledge Base         → /projects/:id/knowledge-base (view only)
   DED Overview           → /projects/:id/ded            (view only)

── Umum ─────────────────────
   Notifications          → /system/notifications
   Profile                → /profile
```

### C.4 Researcher Sidebar

```
── Research ─────────────────
   Research Dashboard     → /research
   Evaluation Dataset     → /research/datasets
   Experiments            → /research/experiments
   Retrieval Inspection   → /research/retrieval-inspection
   RAGAS Evaluation       → /research/ragas-evaluation
   Method Comparison      → /research/method-comparison

── Workspace (Read-only) ────
   Dashboard              → /dashboard
   Knowledge Base         → /projects/:id/knowledge-base (view only)

── Umum ─────────────────────
   Notifications          → /system/notifications
   Profile                → /profile
```

---

## D. DETAIL PER ROLE — ELEMENT VISIBILITY

### D.1 Admin

Admin melihat SEMUA elemen di setiap page yang dia akses.
Perbedaan utama vs role lain:

| Page          | Elemen Admin-only                                          |
|---------------|------------------------------------------------------------|
| WS-01         | Semua project (bukan scoped), "Export LAP", "Generate Baru"|
| WS-02         | Tombol "Buat Proyek Baru", semua projects visible          |
| WS-03         | "Edit Proyek", "Generate Baru", Tim management             |
| WS-04         | Upload, Process, Delete, Retry — semua action              |
| WS-05         | "Re-index RRF", "Tambah Source"                            |
| WS-06         | "Run Gemini RAG Draft", "Lihat Struktur DED"               |
| WS-08         | Bisa edit semua DED, tidak hanya yang di-assign             |
| PEN-03        | Bisa generate untuk semua indicator                         |
| SYS-01        | Create/Edit/Disable user, Assign role                       |
| SYS-06        | Full CRUD pada instrument hierarchy                         |
| REV-01/03     | Read-only view untuk monitoring                             |
| RES-*         | Full access sama seperti Researcher                         |

### D.2 Penyusun DED

| Page          | Visibility & Actions                                                   |
|---------------|------------------------------------------------------------------------|
| WS-01         | Hanya stat dari project yang di-assign. "Generate Baru" → scoped.      |
|               | KPI cards: hanya project sendiri. No "Export LAP".                     |
|               | Attention Required: hanya isu project sendiri.                          |
|               | Aktivitas Terkini: hanya project sendiri.                               |
| WS-02         | HIDDEN. Digantikan PEN-01 (My Projects).                                |
| PEN-01        | Daftar project yang di-assign. Tidak bisa create project.               |
| WS-03         | Project sendiri saja. Tidak ada "Edit Proyek".                          |
|               | Tim section: visible tapi read-only.                                    |
| WS-04         | Upload evidence/dokumen untuk project sendiri.                          |
|               | Filter: tambahan filter kriteria untuk evidence mapping (Keputusan #3). |
|               | Actions: Upload, tapi TIDAK bisa Delete atau Process manually.          |
|               | "Retry Processing" hanya jika policy mengizinkan.                       |
| WS-05         | Read + search chunks dari project sendiri saja.                         |
|               | TIDAK ada "Re-index RRF" atau "Tambah Source".                          |
| WS-06         | DED project sendiri. Ada CTA ke DED Workspace/Editor.                   |
|               | TIDAK ada "Run Gemini RAG Draft" (pakai PEN-03 yang dedicated).         |
| WS-08         | Edit narasi DED yang di-assign ke penyusun ini.                         |
|               | Save, Submit for Review.                                                |
|               | TIDAK bisa edit DED orang lain.                                         |
| PEN-03        | Generate draft AI untuk indicator yang di-assign.                       |
|               | Generate, Regenerate, Edit, Save.                                       |
| WS-09         | View evidence/document yang ter-link ke DED sendiri.                    |
| WS-10         | View version history DED sendiri. TIDAK bisa Restore.                   |
| PEN-05        | Status review dari reviewer. Read-only.                                 |
|               | Lihat komentar, revision request, status per criterion.                 |
| REV-05        | Hanya revision requests yang ditujukan ke penyusun ini.                 |
| REV-06        | Hanya version comparison DED sendiri.                                   |
| SYS-03        | Notifikasi sendiri saja.                                                |
| PEN-06        | Edit profil sendiri.                                                    |

### D.3 Reviewer/Asesor

| Page          | Visibility & Actions                                                   |
|---------------|------------------------------------------------------------------------|
| WS-01         | Stat dari project yang di-assign untuk review.                          |
|               | KPI focus: Pending Reviews, Approved count.                             |
|               | Attention Required: items yang perlu di-review.                         |
| WS-04         | READ-ONLY. Bisa lihat dokumen, TIDAK bisa upload/delete/process.        |
| WS-05         | READ-ONLY. Bisa lihat chunks, TIDAK ada action buttons.                 |
| WS-06         | READ-ONLY. Bisa lihat DED overview, status. Klik → Review Workspace.   |
| WS-08         | TIDAK ACCESSIBLE. Reviewer tidak mengedit DED.                          |
| WS-09         | View evidence untuk review context. Read-only.                          |
| WS-10         | View version history. TIDAK bisa Restore.                               |
| REV-01        | Dashboard review sendiri. Stat: Assigned, Pending, Approved, Revised.   |
| REV-02        | Project list yang di-assign untuk review.                               |
| REV-03        | Workspace review: lihat narasi + evidence + citation.                   |
|               | Actions: Approve, Request Revision, Comment.                            |
| REV-04        | Review evidence yang di-link ke DED.                                    |
|               | Relevance assessment, comment.                                          |
| REV-05        | Semua revision requests yang dia buat.                                  |
| REV-06        | Compare 2 versi DED untuk track perubahan setelah revisi.               |
| REV-07        | Final approval per criterion atau keseluruhan project.                  |
| SYS-03        | Notifikasi sendiri saja.                                                |
| PEN-06        | Edit profil sendiri.                                                    |

### D.4 Researcher

| Page          | Visibility & Actions                                                   |
|---------------|------------------------------------------------------------------------|
| WS-01         | Minimal dashboard: hanya Research-related summary.                      |
|               | KPI: Dataset count, Experiment count, Latest evaluation.                |
| WS-05         | READ-ONLY. Bisa lihat Knowledge Base untuk research context.            |
| RES-01        | Full research dashboard: methods, metrics, dataset, run history.        |
| RES-02        | Manage datasets: import, add test cases, review.                        |
| RES-03        | Detail dataset: test cases, ground truth, coverage.                     |
| RES-04        | Manage experiments: create, queue, view results.                        |
| RES-05        | Detail experiment: results, metrics per test case.                      |
| RES-06        | Full retrieval inspection: query, pipeline, results.                    |
| RES-07        | RAGAS evaluation: metrics, per-question breakdown, comparison.          |
| RES-08        | Method comparison: side-by-side, charts, statistical summary.           |
| SYS-03        | Notifikasi sendiri saja.                                                |
| PEN-06        | Edit profil sendiri.                                                    |

---

## E. HEADER / TOP BAR PER ROLE

Header shared component, tapi breadcrumb & context berbeda per role.

| Role       | Breadcrumb Prefix    | Search Placeholder                   | Header Right                    |
|------------|----------------------|--------------------------------------|---------------------------------|
| Admin      | `Admin / [Page]`     | Context-aware per page               | Search, Notif, Avatar, "ADMIN"  |
| Penyusun   | `Penyusun / [Page]`  | `Cari dokumen, bukti...`             | Search, Notif, Avatar, "PENYUSUN"|
| Reviewer   | `Reviewer / [Page]`  | `Cari DED, bukti, review...`         | Search, Notif, Avatar, "REVIEWER"|
| Researcher | `Research / [Page]`  | `Cari eksperimen, dataset...`        | Search, Notif, Avatar, "RESEARCHER"|

Role label badge muncul di samping nama user di header.

---

## F. DASHBOARD WIDGET VISIBILITY

Dashboard (WS-01) adalah shared page tapi widget yang muncul berbeda per role.

| Widget                      | Admin | Penyusun | Reviewer | Researcher |
|-----------------------------|-------|----------|----------|------------|
| Stat: Active Projects       | ✓     | ✓ (own)  | ✓ (own)  | -          |
| Stat: Total Documents       | ✓     | ✓ (own)  | -        | -          |
| Stat: Processed Docs        | ✓     | ✓ (own)  | -        | -          |
| Stat: DED Progress          | ✓     | ✓ (own)  | ✓ (own)  | -          |
| Stat: AI Drafts             | ✓     | ✓ (own)  | -        | -          |
| Stat: Pending Reviews       | ✓     | -        | ✓ (own)  | -          |
| Stat: Datasets              | -     | -        | -        | ✓          |
| Stat: Experiments           | -     | -        | -        | ✓          |
| Status Kriteria DED table   | ✓     | ✓ (own)  | ✓ (own)  | -          |
| Document Processing Health  | ✓     | ✓ (own)  | -        | -          |
| Attention Required          | ✓     | ✓ (own)  | ✓ (own)  | -          |
| Aktivitas Terkini           | ✓     | ✓ (own)  | ✓ (own)  | ✓ (own)    |
| Export LAP button           | ✓     | -        | -        | -          |
| Generate Baru button        | ✓     | ✓        | -        | -          |

"own" = data di-scope ke project yang di-assign/accessible oleh user tersebut.

---

## G. PERMISSION-TO-PAGE MAPPING

Setiap page memerlukan permission check tertentu di backend sebelum data dikirim.

| Page ID | Required Permission(s)                                            |
|---------|------------------------------------------------------------------|
| AUTH-*  | Tidak perlu (public/utility pages)                                |
| WS-01   | (authenticated) — data di-scope per role                          |
| WS-02   | projects.view + projects.create (for create modal)                |
| WS-03   | projects.view + project membership                                |
| WS-04   | documents.upload (upload), documents.process (process/retry)      |
| WS-05   | (authenticated) — read access to knowledge base                   |
| WS-06   | ded.view + project membership                                     |
| WS-08   | ded.edit + ded.submit + project membership                        |
| WS-09   | (authenticated) + project membership                               |
| WS-10   | ded.view + project membership                                     |
| PEN-01  | projects.view (scoped to own assignments)                          |
| PEN-03  | ded.generate + project membership                                  |
| PEN-05  | review.view (scoped to own DED submissions)                        |
| PEN-06  | (authenticated)                                                    |
| REV-01  | review.view                                                        |
| REV-02  | review.view                                                        |
| REV-03  | review.view + review.comment + review.approve/request_revision     |
| REV-04  | review.view                                                        |
| REV-05  | review.view + review.request_revision                              |
| REV-06  | review.view + ded.view                                             |
| REV-07  | review.approve                                                     |
| RES-01  | research.evaluation.view                                           |
| RES-02  | research.dataset.manage                                            |
| RES-03  | research.dataset.manage                                            |
| RES-04  | research.experiment.run                                            |
| RES-05  | research.experiment.run                                            |
| RES-06  | research.evaluation.view                                           |
| RES-07  | research.evaluation.view                                           |
| RES-08  | research.evaluation.view                                           |
| SYS-01  | users.view + users.create + users.update + users.disable           |
| SYS-02  | users.view (roles section)                                         |
| SYS-03  | (authenticated) — scoped to own notifications                      |
| SYS-04  | audit.view                                                         |
| SYS-05  | (admin only — system settings)                                     |
| SYS-06  | instrument.manage                                                  |
| SYS-12  | instrument.manage                                                  |

---

## H. ROUTING GUARD RULES

Frontend routing guard determines access before loading a page.

```text
1. Is user authenticated?
   NO  → redirect to /login (save intended URL for post-login redirect)
   YES → continue

2. Is session valid (not expired)?
   NO  → redirect to /session-expired
   YES → continue

3. Does user's role have access to this route?
   NO  → show /403 (Access Denied)
   YES → continue

4. For project-scoped routes: Is user a member of this project?
   NO  → show /403
   YES → continue

5. For resource-scoped routes: Does user have permission for this resource?
   NO  → show /403 (or hide specific elements)
   YES → render page with role-specific visibility
```

### Route Groups by Guard Level

| Guard Level            | Routes                                              |
|------------------------|-----------------------------------------------------|
| Public (no auth)       | /login, /forgot-password, /reset-password/:token, /404 |
| Authenticated only     | /dashboard, /profile, /system/notifications, /session-expired, /403 |
| Role: Admin            | /system/*, /projects (full)                          |
| Role: Admin+Penyusun   | /projects/:id/documents, /projects/:id/ded/:cid/edit, /projects/:id/ded/:cid/generate |
| Role: Reviewer         | /review/*                                            |
| Role: Researcher       | /research/*                                          |
| Project membership     | /projects/:id/*, /review/projects/:id/*              |

---

## I. AKTIF WORKSPACE / PROJECT CONTEXT

Sidebar "AKTIF WORKSPACE" card menampilkan project yang sedang aktif/dipilih.

| Role       | Project Context Behavior                                          |
|------------|-------------------------------------------------------------------|
| Admin      | Bisa switch antar semua project. Default: project pertama atau last used. |
| Penyusun   | Bisa switch hanya antar project yang di-assign. Default: project pertama. |
| Reviewer   | Bisa switch hanya antar project yang di-assign untuk review.       |
| Researcher | Tidak ada project context. Research section berdiri sendiri.       |

Ketika project context berubah:
- Dashboard data di-refresh
- Documents, KB, DED Overview di-scope ulang
- Breadcrumb diupdate
- URL params diupdate (:projectId)

---

## J. EMPTY STATES PER ROLE

Setiap role bisa mengalami empty state yang berbeda.

| Role       | Page          | Empty State Message                                      |
|------------|---------------|----------------------------------------------------------|
| Penyusun   | PEN-01        | "Belum ada project yang ditugaskan kepada Anda."          |
| Penyusun   | WS-04         | "Belum ada dokumen di project ini. Upload dokumen pertama."|
| Penyusun   | WS-08         | "Pilih indikator untuk mulai menyusun narasi DED."        |
| Reviewer   | REV-01        | "Tidak ada review yang menunggu tindakan Anda."           |
| Reviewer   | REV-02        | "Belum ada project yang ditugaskan untuk review."          |
| Researcher | RES-02        | "Belum ada dataset. Import dataset evaluasi pertama."      |
| Researcher | RES-04        | "Belum ada experiment. Buat konfigurasi pertama."          |
| Admin      | WS-02         | "Belum ada project. Buat project pertama."                 |
| Admin      | SYS-01        | "Belum ada user selain Admin."                             |
| Admin      | SYS-06        | "Belum ada instrumen. Tambahkan instrumen akreditasi."     |

---

## K. ACTION BUTTONS PER ROLE

Summary of primary action buttons visibility per role on key pages.

| Action Button         | Page(s)       | Admin | Penyusun | Reviewer | Researcher |
|-----------------------|---------------|-------|----------|----------|------------|
| Buat Proyek Baru      | WS-02         | ✓     | -        | -        | -          |
| Edit Proyek           | WS-03         | ✓     | -        | -        | -          |
| Upload Dokumen        | WS-04         | ✓     | ✓ (S)    | -        | -          |
| Process / Retry       | WS-04         | ✓     | policy   | -        | -          |
| Delete Document       | WS-04         | ✓     | -        | -        | -          |
| Re-index RRF          | WS-05         | ✓     | -        | -        | -          |
| Tambah Source         | WS-05         | ✓     | -        | -        | -          |
| Run Gemini RAG Draft  | WS-06         | ✓     | -        | -        | -          |
| Generate Draft        | PEN-03        | ✓     | ✓ (S)    | -        | -          |
| Save DED              | WS-08         | ✓     | ✓ (S)    | -        | -          |
| Submit for Review     | WS-08         | ✓     | ✓ (S)    | -        | -          |
| Approve DED           | REV-03/07     | R     | -        | ✓        | -          |
| Request Revision      | REV-03        | R     | -        | ✓        | -          |
| Comment (Review)      | REV-03        | R     | -        | ✓        | -          |
| Create User           | SYS-01        | ✓     | -        | -        | -          |
| Import Dataset        | RES-02        | ✓     | -        | -        | ✓          |
| Queue Experiment      | RES-04        | ✓     | -        | -        | ✓          |
| Run Inspection        | RES-06        | ✓     | -        | -        | ✓          |
| Export LAP            | WS-01         | ✓     | -        | -        | -          |

S = Scoped to assigned project/resource only.
R = Read-only (can view but not take action).

---

## L. NOTIFICATION TYPES PER ROLE

| Notification Type              | Admin | Penyusun | Reviewer | Researcher |
|--------------------------------|-------|----------|----------|------------|
| New project created            | ✓     | -        | -        | -          |
| User added/removed from project| ✓     | ✓ (own)  | ✓ (own)  | -          |
| Document uploaded              | ✓     | ✓ (own)  | -        | -          |
| Document processing complete   | ✓     | ✓ (own)  | -        | -          |
| Document processing failed     | ✓     | ✓ (own)  | -        | -          |
| DED draft generated            | ✓     | ✓ (own)  | -        | -          |
| DED submitted for review       | ✓     | -        | ✓ (assigned) | -     |
| Review comment added           | ✓     | ✓ (own)  | ✓ (own)  | -          |
| Revision requested             | ✓     | ✓ (own)  | -        | -          |
| DED approved                   | ✓     | ✓ (own)  | ✓ (own)  | -          |
| Experiment completed           | ✓     | -        | -        | ✓ (own)    |
| Experiment failed              | ✓     | -        | -        | ✓ (own)    |
| System maintenance             | ✓     | ✓        | ✓        | ✓          |

---

## M. IMPLEMENTASI NOTES

### M.1 Shared Layout Component

```
<AppLayout>
  <Sidebar role={currentUser.role} />
  <main>
    <Header role={currentUser.role} breadcrumb={...} />
    <Outlet />   {/* Route content */}
  </main>
</AppLayout>
```

Sidebar component menerima role dan render menu items accordingly.
Header component menerima role untuk breadcrumb prefix dan role badge.

### M.2 Route Protection Pattern (React Router)

```
<Route element={<RequireAuth />}>
  {/* All authenticated routes */}
  <Route element={<AppLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/system/notifications" element={<Notifications />} />

    {/* Admin + Penyusun routes */}
    <Route element={<RequireRole roles={['admin','penyusun']} />}>
      <Route path="/projects/:id/documents" element={<Documents />} />
      ...
    </Route>

    {/* Reviewer routes */}
    <Route element={<RequireRole roles={['admin','reviewer']} />}>
      <Route path="/review/*" element={...} />
    </Route>

    {/* Research routes */}
    <Route element={<RequireRole roles={['admin','researcher']} />}>
      <Route path="/research/*" element={...} />
    </Route>

    {/* Admin-only routes */}
    <Route element={<RequireRole roles={['admin']} />}>
      <Route path="/system/*" element={...} />
    </Route>
  </Route>
</Route>

{/* Public routes */}
<Route path="/login" element={<Login />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/reset-password/:token" element={<ResetPassword />} />
<Route path="*" element={<NotFound />} />
```

### M.3 Project Membership Guard

Untuk route yang mengandung `:projectId`, sebelum render page:
1. Fetch project membership dari API
2. Jika user bukan member → redirect ke /403
3. Jika user member → render page dengan scoped data

### M.4 Conditional Element Rendering

Gunakan hook `usePermission(permission)` yang return boolean.
UI elements (buttons, actions, sections) gunakan conditional rendering.

```tsx
const canUpload = usePermission('documents.upload');
const canProcess = usePermission('documents.process');

{canUpload && <UploadButton />}
{canProcess && <ProcessButton />}
```

BUKAN:
```tsx
// DILARANG — security hanya di frontend
if (user.role === 'admin') showButton();
```

Permission check WAJIB di backend juga (sesuai 02-PAGE-ROLE-PERMISSION.md section 6).

---

## N. CROSS-REFERENCE

| Document                           | Hubungan                              |
|------------------------------------|---------------------------------------|
| 12-PAGE-INVENTORY.md               | Daftar lengkap 41 active pages         |
| 02-PAGE-ROLE-PERMISSION.md         | Permission naming & role matrix        |
| 03-SYSTEM-WORKFLOW.md              | Workflow per feature                   |
| 01-UI-UX-SPECIFICATION.md          | UI baseline & design system            |
| FRONTEND-AUDIT.md                  | Current state of frontend code         |
