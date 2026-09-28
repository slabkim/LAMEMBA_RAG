# Page, Role & Permission Specification

## 1. Konsep Akses

Akses aplikasi terdiri dari tiga lapisan:

```text
Authentication
    ↓
Role / Permission
    ↓
Resource / Project Authorization
```

Memiliki role `Admin` tidak otomatis berarti user dapat membaca semua object jika object tersebut dibatasi oleh security policy tertentu. Sebaliknya, user dengan role Penyusun/Reviewer harus dibatasi pada project yang menjadi scope mereka.

---

# 2. Permission Naming

Format:

`<resource>.<action>`

Contoh:

- `users.view`
- `users.create`
- `users.update`
- `users.disable`
- `projects.view`
- `projects.create`
- `projects.update`
- `documents.upload`
- `documents.process`
- `documents.delete`
- `ded.view`
- `ded.generate`
- `ded.edit`
- `ded.submit`
- `review.view`
- `review.comment`
- `review.request_revision`
- `review.approve`
- `research.dataset.manage`
- `research.experiment.run`
- `research.evaluation.view`
- `instrument.manage`
- `audit.view`

---

# 3. Role Matrix

| Resource/Action | Admin | Penyusun DED | Reviewer/Asesor | Researcher |
|---|---:|---:|---:|---:|
| View dashboard | ✓ | ✓ | ✓ | ✓ |
| Manage users | ✓ | - | - | - |
| Manage roles/permissions | ✓ | - | - | - |
| Create project | ✓ | sesuai policy | - | - |
| Manage project members | ✓ | sesuai assignment | - | - |
| Upload documents | ✓ | ✓ | sesuai policy | sesuai dataset scope |
| Process documents | ✓ | ✓ | - | sesuai research scope |
| View knowledge base | ✓ | ✓ | ✓ | ✓ |
| Generate DED draft | ✓ | ✓ | - | - |
| Edit DED | ✓ | ✓ | sesuai workflow | - |
| Review DED | ✓ | - | ✓ | - |
| Approve DED | sesuai policy | - | ✓ | - |
| Manage instrument configuration | ✓ | - | - | - |
| Manage evaluation dataset | ✓ | - | - | ✓ |
| Run experiment | ✓/policy | - | - | ✓ |
| View RAG inspection | ✓ | - | - | ✓ |
| View audit log | ✓ | - | - | - |
| System settings | ✓ | - | - | - |

Matrix ini adalah target desain; implementasi UI yang ada saat ini belum mencakup semua role.

---

# 4. Page Inventory Target

## Authentication

- Login
- Register
- Forgot Password
- Reset Password
- Session Expired
- Access Denied

## Shared Workspace

- Dashboard
- Projects
- Project Detail
- Documents
- Knowledge Base
- DED Overview
- Criterion Detail
- DED Editor
- Evidence Viewer
- Version History

## Review

- Assigned Projects
- Review Workspace
- Evidence Review
- Revision Requests
- Version Comparison
- Approval

## Research

- Research Dashboard
- Evaluation Dataset
- Experiment
- Retrieval Inspection
- RAGAS Evaluation
- Method Comparison

## System

- Users & Access
- Roles & Permissions
- Notifications
- Audit Logs
- Settings
- Instrument Management
- Instrument Version
- Criteria
- Dimensions
- Indicators
- Evidence Requirements
- DED Structure

---

# 5. Authorization Rules

## 5.1 User-level

Backend harus memeriksa:

- user authenticated;
- user active;
- permission aktif;
- session valid.

## 5.2 Project-level

Untuk resource yang memiliki `project_id`, backend harus memeriksa:

- user memiliki membership atau role global yang sah;
- membership aktif;
- project tidak diarsipkan jika action tidak mengizinkan archived project.

## 5.3 Resource-level

Untuk document, DED response, review, experiment, dan evidence, backend harus memverifikasi hubungan resource ke project sebelum melakukan operasi.

---

# 6. Forbidden Pattern

Agent dilarang mengimplementasikan authorization hanya di frontend seperti:

```ts
if (user.role === 'admin') {
  showButton();
}
```

Penyembunyian tombol hanya UX. Security enforcement wajib ada di backend.

---

# 7. UI Permission Behavior

Jika user tidak memiliki permission:

- item menu boleh disembunyikan;
- tombol action boleh disabled/hidden;
- jika URL diakses langsung, tampilkan Access Denied/403;
- API harus tetap menolak request unauthorized.

Jangan menampilkan error database kepada user.
