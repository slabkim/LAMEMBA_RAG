# API Specification — Target Contract

## 1. General

Base URL production ditentukan saat deployment. Semua endpoint protected menggunakan authenticated session kecuali endpoint authentication/public.

Format default: JSON.

---

# 2. Authentication API

## POST /api/auth/login

Purpose: membuat session.

Request:

```json
{
  "email": "user@example.com",
  "password": "..."
}
```

Response 200:

```json
{
  "user": {
    "id": "uuid",
    "full_name": "Nama User",
    "email": "user@example.com",
    "roles": ["ADMIN"]
  }
}
```

Cookie session dibuat oleh backend.

Errors:

- 400 validation;
- 401 invalid credentials;
- 403 disabled account;
- 429 rate limit.

## POST /api/auth/logout

Revoke current session.

## GET /api/auth/me

Mengembalikan current authenticated user + permissions/context.

## POST /api/auth/forgot-password

Memulai reset password tanpa mengungkap apakah email terdaftar.

## POST /api/auth/reset-password

Menggunakan reset token yang valid.

---

# 3. Users & Access

## GET /api/users

Permission: `users.view`.

Filters:

- search;
- status;
- role;
- page;
- limit.

## POST /api/users

Permission: `users.create`.

## GET /api/users/:id

Permission: `users.view`.

## PATCH /api/users/:id

Permission: `users.update`.

## POST /api/users/:id/disable

Permission: `users.disable`.

---

# 4. Projects

## GET /api/projects

Mengembalikan project yang boleh diakses user.

## POST /api/projects

Membuat project.

Request minimum:

```json
{
  "institution_id": "uuid",
  "study_program_id": "uuid",
  "name": "Akreditasi S1 Manajemen 2026",
  "accreditation_year": 2026,
  "instrument_version_id": "uuid",
  "status": "PREPARATION"
}
```

## GET /api/projects/:id

Project detail scoped authorization.

## PATCH /api/projects/:id

Update metadata.

## GET /api/projects/:id/members

Daftar anggota.

## POST /api/projects/:id/members

Tambah anggota.

---

# 5. Documents

## POST /api/projects/:projectId/documents

Multipart upload.

Backend memeriksa permission dan file security.

## GET /api/projects/:projectId/documents

Filter:

- search;
- type;
- status;
- criterion;
- page;
- limit.

## GET /api/documents/:id

Document detail.

## POST /api/documents/:id/process

Start/retry processing.

## POST /api/documents/:id/cancel-processing

Cancel jika state mengizinkan.

## GET /api/documents/:id/processing-runs

History processing.

---

# 6. Knowledge Base

## GET /api/projects/:projectId/knowledge-base

Metadata KB.

## GET /api/projects/:projectId/chunks

Filter:

- document;
- criterion;
- dimension;
- search;
- status;
- page;
- limit.

## GET /api/chunks/:id

Chunk detail.

## POST /api/projects/:projectId/knowledge-base/reindex

Permission sesuai policy; membuat job asynchronous.

---

# 7. Instrument

## GET /api/instruments

## GET /api/instruments/:id/versions

## POST /api/instruments/:id/versions

## GET /api/instrument-versions/:id/criteria

## GET /api/criteria/:id

## GET /api/dimensions/:id

## GET /api/indicators/:id

Admin-only write operations harus menggunakan permission `instrument.manage`.

---

# 8. DED

## GET /api/projects/:projectId/ded

## GET /api/projects/:projectId/ded/sections

## GET /api/ded/sections/:id

## POST /api/ded/sections/:id/generate

Permission: `ded.generate` + project access.

Generation adalah asynchronous jika proses dapat memakan waktu signifikan.

## PATCH /api/ded/responses/:id

Edit response.

## GET /api/ded/responses/:id/versions

Version history.

## POST /api/ded/responses/:id/submit

Submit for review.

---

# 9. Review

## GET /api/projects/:projectId/reviews

## POST /api/ded/responses/:id/reviews

Create/assign review.

## POST /api/reviews/:id/comments

Tambah komentar.

## POST /api/reviews/:id/request-revision

Meminta revisi.

## POST /api/reviews/:id/approve

Approve.

---

# 10. Research

## GET /api/datasets
## POST /api/datasets
## GET /api/datasets/:id
## POST /api/datasets/:id/test-cases
## PATCH /api/test-cases/:id

## GET /api/experiments
## POST /api/experiments
## PATCH /api/experiments/:id
## POST /api/experiments/:id/queue
## POST /api/experiments/:id/cancel

## POST /api/retrieval-inspections
## GET /api/retrieval-inspections/:id

## GET /api/experiments/:id/metrics

---

# 11. Pagination Contract

Default response:

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 120,
    "total_pages": 6
  }
}
```

Pagination harus server-side untuk dataset besar.

---

# 12. Idempotency

Endpoint yang memicu job mahal seperti generation, processing, reindex, dan experiment queue harus memiliki mekanisme idempotency atau duplicate-request detection.

---

# 13. HTTP Status Convention

- `200` successful read/update;
- `201` successful create;
- `202` accepted async job;
- `204` successful operation without body;
- `400` validation;
- `401` unauthenticated;
- `403` unauthorized;
- `404` not found;
- `409` business conflict;
- `422` semantic validation jika dipakai;
- `429` rate limited;
- `500` unexpected server error.
