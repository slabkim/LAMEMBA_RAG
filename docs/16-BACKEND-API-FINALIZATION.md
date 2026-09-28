# 16 — Backend & API Finalization: AI DED LAMEMBA

Tanggal: 28 September 2026
Sumber: 05-BACKEND-ARCHITECTURE-SECURITY-SESSION.md + 06-API-SPECIFICATION.md + 07-RAG-GEMINI-SPECIFICATION.md + 14-DETAILED-WORKFLOW.md + 15-DATABASE-FINALIZATION.md
Step: 6 — Finalisasi backend architecture & API specification

Dokumen ini TIDAK menggantikan 05/06/07. Dokumen ini:
  1. Memfinalisasi tech stack recommendation
  2. Menyatukan module structure dengan database & workflow
  3. Mendaftarkan SELURUH API endpoints lengkap (dari workflow detail)
  4. Menambahkan endpoint yang missing dari doc 06
  5. Mendefinisikan request/response schema yang belum ada
  6. Mendefinisikan async job contracts

---

## A. TECH STACK RECOMMENDATION

Doc 05 belum menetapkan tech stack. Rekomendasi untuk skripsi:

| Layer           | Technology                | Alasan                                    |
|-----------------|---------------------------|-------------------------------------------|
| Runtime         | Node.js 20 LTS            | Familiar, ecosystem matang                |
| Framework       | Express.js atau Fastify    | Simple, well-documented                   |
| Language        | TypeScript                 | Type safety, shared types with frontend   |
| Database        | PostgreSQL 16              | UUID, JSONB, array support, robust        |
| ORM             | Prisma atau Drizzle        | Type-safe, migration support              |
| Auth            | Server-managed session     | Cookie HttpOnly (per doc 05)              |
| Password Hash   | Argon2id                   | Per doc 05                                |
| File Storage    | Local disk (dev) / S3 (prod)| Configurable                             |
| Vector Store    | pgvector (PostgreSQL ext)  | Single DB, simpler for skripsi            |
| BM25            | Custom implementation or pg_trgm + ts_vector | PostgreSQL built-in FTS   |
| Queue           | BullMQ + Redis             | Reliable job queue for async processing   |
| LLM             | Google Gemini API          | Per project requirement                   |
| Embedding       | Gemini Embedding API       | Consistent with LLM choice                |
| Validation      | Zod                        | Runtime validation, TypeScript integration|
| Testing         | Vitest + Supertest         | Fast, ESM-native                          |

Alternative simpler stack (jika BullMQ/Redis terlalu complex):
- Queue: simple database-backed queue (poll-based) for skripsi scope
- Vector: store embeddings in PostgreSQL with pgvector extension

---

## B. PROJECT STRUCTURE

```
backend/
├── src/
│   ├── index.ts                    # App entry point
│   ├── app.ts                      # Express/Fastify setup
│   ├── config/
│   │   ├── env.ts                  # Environment config
│   │   ├── database.ts             # DB connection
│   │   └── redis.ts                # Redis connection (if BullMQ)
│   │
│   ├── middleware/
│   │   ├── authenticate.ts         # Session validation
│   │   ├── authorize.ts            # Permission check
│   │   ├── projectAccess.ts        # Project membership check
│   │   ├── rateLimit.ts            # Rate limiting
│   │   ├── csrf.ts                 # CSRF protection
│   │   ├── validate.ts             # Request validation (Zod)
│   │   ├── errorHandler.ts         # Global error handler
│   │   └── requestId.ts            # Request ID injection
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.schema.ts      # Zod schemas
│   │   │   └── auth.routes.ts
│   │   │
│   │   ├── users/
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   ├── users.schema.ts
│   │   │   └── users.routes.ts
│   │   │
│   │   ├── projects/
│   │   │   ├── projects.controller.ts
│   │   │   ├── projects.service.ts
│   │   │   ├── projects.schema.ts
│   │   │   └── projects.routes.ts
│   │   │
│   │   ├── instruments/
│   │   │   ├── instruments.controller.ts
│   │   │   ├── instruments.service.ts
│   │   │   ├── instruments.schema.ts
│   │   │   └── instruments.routes.ts
│   │   │
│   │   ├── documents/
│   │   │   ├── documents.controller.ts
│   │   │   ├── documents.service.ts
│   │   │   ├── documents.schema.ts
│   │   │   ├── documents.routes.ts
│   │   │   └── processing/
│   │   │       ├── processing.worker.ts
│   │   │       ├── extractor.ts
│   │   │       ├── normalizer.ts
│   │   │       ├── chunker.ts
│   │   │       └── pipeline.ts
│   │   │
│   │   ├── knowledge-base/
│   │   │   ├── kb.controller.ts
│   │   │   ├── kb.service.ts
│   │   │   ├── kb.schema.ts
│   │   │   └── kb.routes.ts
│   │   │
│   │   ├── ded/
│   │   │   ├── ded.controller.ts
│   │   │   ├── ded.service.ts
│   │   │   ├── ded.schema.ts
│   │   │   ├── ded.routes.ts
│   │   │   └── generation/
│   │   │       ├── generation.worker.ts
│   │   │       ├── retriever.ts
│   │   │       ├── contextBuilder.ts
│   │   │       └── outputValidator.ts
│   │   │
│   │   ├── review/
│   │   │   ├── review.controller.ts
│   │   │   ├── review.service.ts
│   │   │   ├── review.schema.ts
│   │   │   └── review.routes.ts
│   │   │
│   │   ├── research/
│   │   │   ├── research.controller.ts
│   │   │   ├── research.service.ts
│   │   │   ├── research.schema.ts
│   │   │   ├── research.routes.ts
│   │   │   └── evaluation/
│   │   │       ├── evaluation.worker.ts
│   │   │       └── ragas.ts
│   │   │
│   │   ├── notifications/
│   │   │   ├── notifications.controller.ts
│   │   │   ├── notifications.service.ts
│   │   │   └── notifications.routes.ts
│   │   │
│   │   └── audit/
│   │       ├── audit.service.ts
│   │       └── audit.routes.ts
│   │
│   ├── services/
│   │   ├── gemini.service.ts       # Gemini API client
│   │   ├── embedding.service.ts    # Embedding API client
│   │   ├── storage.service.ts      # File storage abstraction
│   │   ├── email.service.ts        # Email sending (password reset, notifications)
│   │   └── queue.service.ts        # Job queue abstraction
│   │
│   ├── lib/
│   │   ├── errors.ts               # Custom error classes
│   │   ├── pagination.ts           # Pagination helper
│   │   ├── password.ts             # Argon2id hash/verify
│   │   ├── session.ts              # Session token generation/validation
│   │   └── rrf.ts                  # RRF fusion algorithm
│   │
│   └── types/
│       └── index.ts                # Shared TypeScript types
│
├── prisma/
│   ├── schema.prisma               # Database schema
│   └── migrations/
│
├── scripts/
│   └── seed.ts                     # Seed data
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── helpers/
│
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

## C. COMPLETE API ENDPOINT REGISTRY

Total: 78 endpoints across 11 modules.

### C.1 Auth Module (6 endpoints)

| Method | Path                            | Auth   | Permission | Description                        |
|--------|---------------------------------|--------|------------|------------------------------------|
| POST   | /api/auth/login                 | Public | -          | Login, create session              |
| POST   | /api/auth/logout                | Auth   | -          | Logout, revoke session             |
| GET    | /api/auth/me                    | Auth   | -          | Current user + roles + permissions |
| POST   | /api/auth/forgot-password       | Public | -          | Request password reset             |
| POST   | /api/auth/reset-password        | Public | -          | Reset password with token          |
| POST   | /api/auth/change-password       | Auth   | -          | Change own password (first login)  |

NEW: change-password (from workflow 7: first login must_change_password).

### C.2 Users Module (7 endpoints)

| Method | Path                            | Auth | Permission                     | Description                |
|--------|---------------------------------|------|--------------------------------|----------------------------|
| GET    | /api/users                      | Auth | users.view                     | List users (paginated)     |
| POST   | /api/users                      | Auth | users.create                   | Create user (Admin only)   |
| GET    | /api/users/:id                  | Auth | users.view                     | User detail                |
| PATCH  | /api/users/:id                  | Auth | users.update                   | Update user                |
| POST   | /api/users/:id/disable          | Auth | users.disable                  | Disable user               |
| POST   | /api/users/:id/enable           | Auth | users.update                   | Re-enable user             |
| GET    | /api/users/me/profile           | Auth | -                              | Get own profile            |
| PATCH  | /api/users/me/profile           | Auth | -                              | Update own profile (PEN-06)|

NEW: enable, GET/PATCH profile.

### C.3 Roles & Permissions Module (4 endpoints)

| Method | Path                            | Auth | Permission    | Description                 |
|--------|---------------------------------|------|---------------|-----------------------------|
| GET    | /api/roles                      | Auth | users.view    | List all roles              |
| GET    | /api/roles/:id                  | Auth | users.view    | Role detail + permissions   |
| PUT    | /api/roles/:id/permissions      | Auth | users.update  | Update role permissions     |
| GET    | /api/permissions                 | Auth | users.view    | List all permissions        |

### C.4 Projects Module (10 endpoints)

| Method | Path                                      | Auth | Permission                | Description                     |
|--------|-------------------------------------------|------|---------------------------|---------------------------------|
| GET    | /api/projects                              | Auth | projects.view             | List projects (scoped by role)  |
| POST   | /api/projects                              | Auth | projects.create           | Create project                  |
| GET    | /api/projects/:id                          | Auth | projects.view + membership| Project detail                  |
| PATCH  | /api/projects/:id                          | Auth | projects.update           | Update project metadata         |
| PATCH  | /api/projects/:id/status                   | Auth | projects.update           | Change project status           |
| GET    | /api/projects/:id/members                  | Auth | projects.view + membership| List project members            |
| POST   | /api/projects/:id/members                  | Auth | projects.update           | Add member                      |
| PATCH  | /api/projects/:id/members/:memberId        | Auth | projects.update           | Update member role              |
| DELETE | /api/projects/:id/members/:memberId        | Auth | projects.update           | Remove member                   |
| GET    | /api/projects/:id/dashboard                | Auth | projects.view + membership| Project dashboard summary       |

NEW: status change, member CRUD, dashboard.

### C.5 Instruments Module (14 endpoints)

| Method | Path                                                       | Auth | Permission        | Description                          |
|--------|-------------------------------------------------------------|------|-------------------|--------------------------------------|
| GET    | /api/instruments                                            | Auth | instrument.manage | List instruments                     |
| POST   | /api/instruments                                            | Auth | instrument.manage | Create instrument                    |
| GET    | /api/instruments/:id                                        | Auth | instrument.manage | Instrument detail                    |
| PATCH  | /api/instruments/:id                                        | Auth | instrument.manage | Update instrument                    |
| GET    | /api/instruments/:id/tree                                   | Auth | instrument.manage | Full hierarchy tree (Keputusan #5)   |
| POST   | /api/instruments/:id/versions                               | Auth | instrument.manage | Create version                       |
| PATCH  | /api/instrument-versions/:id                                | Auth | instrument.manage | Update version                       |
| POST   | /api/instrument-versions/:id/publish                        | Auth | instrument.manage | Publish version (DRAFT→PUBLISHED)    |
| POST   | /api/instrument-versions/:versionId/criteria                | Auth | instrument.manage | Add criterion                        |
| POST   | /api/criteria/:id/dimensions                                | Auth | instrument.manage | Add dimension                        |
| POST   | /api/dimensions/:id/indicators                              | Auth | instrument.manage | Add indicator                        |
| POST   | /api/indicators/:id/evidence-requirements                   | Auth | instrument.manage | Add evidence requirement             |
| POST   | /api/instruments/import                                     | Auth | instrument.manage | Import instrument from JSON/XLSX     |
| PATCH  | /api/instrument-nodes/:id                                   | Auth | instrument.manage | Update any hierarchy node (generic)  |

NEW: tree endpoint, publish, import, generic node update.

### C.6 Documents Module (10 endpoints)

| Method | Path                                                    | Auth | Permission         | Description                        |
|--------|---------------------------------------------------------|------|--------------------|------------------------------------|
| POST   | /api/projects/:projectId/documents                      | Auth | documents.upload   | Upload document (multipart)        |
| GET    | /api/projects/:projectId/documents                      | Auth | projects.view      | List documents (filtered)          |
| GET    | /api/documents/:id                                      | Auth | projects.view      | Document detail                    |
| DELETE | /api/documents/:id                                      | Auth | documents.delete   | Delete document                    |
| GET    | /api/documents/:id/view                                 | Auth | projects.view      | Get document file for viewing      |
| POST   | /api/documents/:id/process                              | Auth | documents.process  | Start/retry processing             |
| POST   | /api/documents/:id/cancel-processing                    | Auth | documents.process  | Cancel processing (if QUEUED)      |
| GET    | /api/documents/:id/processing-runs                      | Auth | projects.view      | Processing history                 |
| GET    | /api/documents/:id/criteria-mapping                     | Auth | projects.view      | Get criteria mappings              |
| PUT    | /api/documents/:id/criteria-mapping                     | Auth | documents.upload   | Set criteria mappings (Keputusan #3)|

NEW: view, delete, criteria-mapping CRUD.

### C.7 Knowledge Base Module (5 endpoints)

| Method | Path                                                    | Auth | Permission    | Description                   |
|--------|---------------------------------------------------------|------|---------------|-------------------------------|
| GET    | /api/projects/:projectId/knowledge-base                 | Auth | projects.view | KB metadata + stats           |
| GET    | /api/projects/:projectId/chunks                         | Auth | projects.view | List chunks (filtered)        |
| GET    | /api/chunks/:id                                         | Auth | projects.view | Chunk detail                  |
| POST   | /api/projects/:projectId/knowledge-base/reindex         | Auth | instrument.manage | Re-index all chunks        |
| GET    | /api/projects/:projectId/knowledge-base/stats           | Auth | projects.view | KB statistics                 |

NEW: stats endpoint.

### C.8 DED Module (12 endpoints)

| Method | Path                                                    | Auth | Permission        | Description                            |
|--------|---------------------------------------------------------|------|-------------------|----------------------------------------|
| GET    | /api/projects/:projectId/ded                            | Auth | ded.view          | DED overview (all criteria + progress) |
| GET    | /api/projects/:projectId/ded/sections                   | Auth | ded.view          | DED section tree                       |
| GET    | /api/ded/sections/:id                                   | Auth | ded.view          | Section detail                         |
| GET    | /api/ded/sections/:id/response                          | Auth | ded.view          | Get current response for section       |
| POST   | /api/ded/sections/:id/generate                          | Auth | ded.generate      | Generate AI draft (async)              |
| GET    | /api/ded/generation-runs/:id                            | Auth | ded.view          | Generation run status/result           |
| PATCH  | /api/ded/responses/:id                                  | Auth | ded.edit          | Edit response content                  |
| POST   | /api/ded/responses/:id/submit                           | Auth | ded.submit        | Submit for review                      |
| GET    | /api/ded/responses/:id/versions                         | Auth | ded.view          | Version history                        |
| GET    | /api/ded/versions/:id                                   | Auth | ded.view          | Specific version detail                |
| GET    | /api/ded/responses/:id/compare                          | Auth | ded.view          | Compare 2 versions (?v1=X&v2=Y)       |
| GET    | /api/ded/responses/:id/evidence                         | Auth | ded.view          | Evidence references for response       |

NEW: section response, generation-runs, compare, evidence.

### C.9 Review Module (10 endpoints)

| Method | Path                                                    | Auth | Permission              | Description                       |
|--------|---------------------------------------------------------|------|-------------------------|-----------------------------------|
| GET    | /api/review/dashboard                                   | Auth | review.view             | Review dashboard stats            |
| GET    | /api/review/projects                                    | Auth | review.view             | Assigned projects for review      |
| GET    | /api/projects/:projectId/reviews                        | Auth | review.view             | Reviews for a project             |
| POST   | /api/ded/responses/:id/reviews                          | Auth | review.view             | Create/assign review              |
| GET    | /api/reviews/:id                                        | Auth | review.view             | Review detail                     |
| POST   | /api/reviews/:id/comments                               | Auth | review.comment          | Add comment                       |
| POST   | /api/reviews/:id/approve                                | Auth | review.approve          | Approve DED                       |
| POST   | /api/reviews/:id/request-revision                       | Auth | review.request_revision | Request revision                  |
| GET    | /api/review/revisions                                   | Auth | review.view             | List all revision requests        |
| POST   | /api/projects/:projectId/ded/approve                    | Auth | review.approve          | Final project-level DED approval  |

NEW: dashboard, assigned projects, revisions list, project-level approval.

### C.10 Research Module (14 endpoints)

| Method | Path                                                    | Auth | Permission                | Description                          |
|--------|---------------------------------------------------------|------|---------------------------|--------------------------------------|
| GET    | /api/research/dashboard                                 | Auth | research.evaluation.view  | Research dashboard summary           |
| GET    | /api/datasets                                           | Auth | research.dataset.manage   | List datasets                        |
| POST   | /api/datasets                                           | Auth | research.dataset.manage   | Create dataset                       |
| GET    | /api/datasets/:id                                       | Auth | research.dataset.manage   | Dataset detail                       |
| POST   | /api/datasets/:id/import                                | Auth | research.dataset.manage   | Import test cases from file          |
| POST   | /api/datasets/:id/test-cases                            | Auth | research.dataset.manage   | Add single test case                 |
| PATCH  | /api/test-cases/:id                                     | Auth | research.dataset.manage   | Update test case                     |
| GET    | /api/experiments                                        | Auth | research.experiment.run   | List experiments                     |
| POST   | /api/experiments                                        | Auth | research.experiment.run   | Create experiment config             |
| GET    | /api/experiments/:id                                    | Auth | research.experiment.run   | Experiment detail + runs             |
| POST   | /api/experiments/:id/queue                              | Auth | research.experiment.run   | Queue experiment for execution       |
| POST   | /api/experiments/:id/cancel                             | Auth | research.experiment.run   | Cancel queued experiment             |
| GET    | /api/experiments/:id/results                            | Auth | research.evaluation.view  | Run results + per-case metrics       |
| POST   | /api/retrieval-inspections                              | Auth | research.evaluation.view  | Run retrieval inspection             |
| GET    | /api/retrieval-inspections/:id                          | Auth | research.evaluation.view  | Inspection results                   |
| GET    | /api/research/comparison                                | Auth | research.evaluation.view  | Compare experiments (?ids=X,Y,Z)     |

NEW: dashboard, import, results, comparison.

### C.11 Notifications Module (5 endpoints)

| Method | Path                                                    | Auth | Permission | Description                    |
|--------|---------------------------------------------------------|------|------------|--------------------------------|
| GET    | /api/notifications                                      | Auth | -          | List own notifications         |
| PATCH  | /api/notifications/:id/read                             | Auth | -          | Mark as read                   |
| POST   | /api/notifications/read-all                             | Auth | -          | Mark all as read               |
| DELETE | /api/notifications/:id                                  | Auth | -          | Delete notification            |
| GET    | /api/notifications/preferences                          | Auth | -          | Get notification preferences   |
| PUT    | /api/notifications/preferences                          | Auth | -          | Update notification preferences|

### C.12 Audit Module (1 endpoint)

| Method | Path                                                    | Auth | Permission | Description              |
|--------|---------------------------------------------------------|------|------------|--------------------------|
| GET    | /api/audit-logs                                         | Auth | audit.view | List audit logs (filtered)|

### C.13 System Module (2 endpoints)

| Method | Path                                                    | Auth | Permission | Description                |
|--------|---------------------------------------------------------|------|------------|----------------------------|
| GET    | /api/settings                                           | Auth | admin      | Get system settings        |
| PUT    | /api/settings                                           | Auth | admin      | Update system settings     |

### C.14 Dashboard Module (1 endpoint)

| Method | Path                                                    | Auth | Permission | Description                             |
|--------|---------------------------------------------------------|------|------------|-----------------------------------------|
| GET    | /api/dashboard                                          | Auth | -          | Global dashboard (role-scoped response) |

---

## D. KEY REQUEST/RESPONSE SCHEMAS

### D.1 POST /api/auth/login

Request:
```json
{
  "email": "string (required)",
  "password": "string (required)"
}
```

Response 200:
```json
{
  "user": {
    "id": "uuid",
    "email": "string",
    "full_name": "string",
    "avatar_url": "string | null",
    "must_change_password": "boolean",
    "roles": ["ADMIN"],
    "permissions": ["users.view", "users.create", ...]
  }
}
```
+ Set-Cookie: ded_session=... (HttpOnly, Secure, SameSite)

### D.2 POST /api/projects

Request:
```json
{
  "institution_id": "uuid",
  "study_program_id": "uuid",
  "name": "string (required)",
  "accreditation_year": "number (required)",
  "instrument_version_id": "uuid (required)",
  "status": "PLANNING | ACTIVE"
}
```

Response 201:
```json
{
  "id": "uuid",
  "name": "string",
  "status": "PLANNING",
  "ded_status": "DRAFT",
  "institution": { "id": "uuid", "name": "string" },
  "study_program": { "id": "uuid", "name": "string", "level": "S1" },
  "instrument_version": { "id": "uuid", "version": "v2024" },
  "created_at": "ISO timestamp"
}
```

### D.3 POST /api/projects/:projectId/documents (multipart)

Request (multipart/form-data):
```
file: binary (required)
document_type: "DED" | "DKPS" | "EVIDENCE" | "SUPPORTING" (required)
criteria_ids: ["uuid", ...] (optional, for Keputusan #3)
description: "string" (optional)
```

Response 201:
```json
{
  "id": "uuid",
  "name": "original-filename.pdf",
  "document_type": "EVIDENCE",
  "mime_type": "application/pdf",
  "size_bytes": 1234567,
  "status": "UPLOADED",
  "criteria_mapping": [
    { "criterion_id": "uuid", "criterion_name": "Kriteria 1" }
  ],
  "processing_run": {
    "id": "uuid",
    "status": "QUEUED"
  },
  "created_at": "ISO timestamp"
}
```

### D.4 POST /api/ded/sections/:id/generate

Request:
```json
{
  "top_k": 10,
  "retrieval_method": "HYBRID_RRF",
  "instruction": "string (optional user instruction)"
}
```

Response 202 (accepted, async):
```json
{
  "generation_run_id": "uuid",
  "status": "RUNNING",
  "message": "Generation dimulai. Pantau progress via GET /api/ded/generation-runs/:id"
}
```

### D.5 GET /api/ded/generation-runs/:id (poll for result)

Response 200 (completed):
```json
{
  "id": "uuid",
  "status": "COMPLETED",
  "indicator": { "id": "uuid", "code": "1.1.1", "title": "..." },
  "model_name": "gemini-1.5-pro",
  "retrieval_method": "HYBRID_RRF",
  "retrieval_config": { "topK": 10, "vectorWeight": 0.5, "bm25Weight": 0.5, "rrfK": 60 },
  "retrieved_chunks": [
    {
      "chunk_id": "uuid",
      "document_name": "visi-misi.pdf",
      "page_number": 5,
      "excerpt": "...",
      "rrf_score": 0.042
    }
  ],
  "generated_text": "Narasi DED yang dihasilkan...",
  "evidence_references": [
    {
      "chunk_id": "uuid",
      "document_id": "uuid",
      "page_number": 5,
      "quote": "..."
    }
  ],
  "response_id": "uuid",
  "duration_ms": 15230,
  "created_at": "ISO timestamp"
}
```

### D.6 POST /api/reviews/:id/approve

Request:
```json
{
  "comment": "string (optional)"
}
```

Response 200:
```json
{
  "review_id": "uuid",
  "status": "APPROVED",
  "response_id": "uuid",
  "response_status": "APPROVED",
  "version_created": {
    "version_no": 6,
    "change_summary": "Approved by Reviewer"
  },
  "completed_at": "ISO timestamp"
}
```

### D.7 GET /api/dashboard

Response 200 (role-scoped):
```json
{
  "role": "ADMIN",
  "stats": {
    "active_projects": 3,
    "total_documents": 48,
    "processed_docs": 42,
    "ded_progress": 67,
    "ai_drafts": 15,
    "pending_reviews": 5
  },
  "criteria_status": [
    {
      "criterion": "Kriteria 1",
      "progress": 80,
      "documents": 12,
      "review_status": "PENDING_REVIEW"
    }
  ],
  "processing_health": {
    "uploaded": 3,
    "processing": 2,
    "processed": 42,
    "failed": 1
  },
  "attention_required": [
    {
      "type": "FAILED_PROCESSING",
      "entity_type": "document",
      "entity_id": "uuid",
      "message": "Parsing gagal: laporan-2025.pdf",
      "link": "/projects/uuid/documents"
    }
  ],
  "recent_activity": [
    {
      "type": "DOCUMENT_UPLOADED",
      "description": "visi-misi.pdf uploaded",
      "actor": "Penyusun DED",
      "timestamp": "ISO timestamp"
    }
  ]
}
```

### D.8 GET /api/research/comparison?ids=X,Y,Z

Response 200:
```json
{
  "experiments": [
    {
      "id": "uuid",
      "name": "LLM Only Baseline",
      "method": "LLM_ONLY",
      "model": "gemini-1.5-pro",
      "dataset": "Dataset v1",
      "metrics": {
        "faithfulness": { "mean": 0.45, "median": 0.42, "std": 0.15 },
        "answer_relevancy": { "mean": 0.60, "median": 0.58, "std": 0.12 },
        "context_precision": null,
        "context_recall": null
      }
    },
    {
      "id": "uuid",
      "name": "Hybrid RAG",
      "method": "HYBRID_RAG",
      "model": "gemini-1.5-pro",
      "dataset": "Dataset v1",
      "metrics": {
        "faithfulness": { "mean": 0.85, "median": 0.87, "std": 0.08 },
        "answer_relevancy": { "mean": 0.82, "median": 0.84, "std": 0.10 },
        "context_precision": { "mean": 0.80, "median": 0.82, "std": 0.09 },
        "context_recall": { "mean": 0.78, "median": 0.79, "std": 0.11 }
      }
    }
  ],
  "per_question": [
    {
      "test_case_id": "uuid",
      "question": "...",
      "results": {
        "LLM_ONLY": { "answer": "...", "faithfulness": 0.40 },
        "HYBRID_RAG": { "answer": "...", "faithfulness": 0.90 }
      }
    }
  ]
}
```

---

## E. ASYNC JOB CONTRACTS

### E.1 Document Processing Job

```
Queue: document-processing
Job data: { documentId, attemptNo, triggeredBy }
Worker: documents/processing/processing.worker.ts

Steps: EXTRACTING → NORMALIZING → CHUNKING → EMBEDDING → BM25_INDEXING → RAG_SYNC
Each step updates: document_processing_runs.current_stage

Success: document.status = PROCESSED, notify user
Failure: document.status = FAILED, store error, notify user
Retry: max 3 attempts, exponential backoff

Idempotency: check if processing_run already COMPLETED before starting
```

### E.2 DED Generation Job

```
Queue: ded-generation
Job data: { sectionId, indicatorId, projectId, userId, config }
Worker: ded/generation/generation.worker.ts

Steps:
  1. Load indicator definition
  2. Semantic retrieval
  3. BM25 retrieval
  4. RRF fusion
  5. Context assembly
  6. Gemini API call
  7. Output validation
  8. Save response + evidence references

Success: ai_generation_runs.status = COMPLETED, create ded_response
Failure: ai_generation_runs.status = FAILED, store error
Timeout: 120 seconds max

Idempotency: generation_run_id is returned to client, client polls status
```

### E.3 Experiment Execution Job

```
Queue: experiment-execution
Job data: { experimentId, runNumber }
Worker: research/evaluation/evaluation.worker.ts

Steps per test case:
  1. Retrieval (method-dependent)
  2. Generation
  3. RAGAS evaluation

Success: experiment_runs.status = COMPLETED, store all metrics
Failure: experiment_runs.status = FAILED
Timeout: 30 minutes max (many test cases)

Progress: update experiment_runs periodically with current test case index
```

---

## F. MIDDLEWARE PIPELINE

Request flows through middleware in this order:

```
1. requestId          → Generate unique request ID
2. cors               → CORS check
3. rateLimit          → Rate limiting
4. bodyParser         → Parse JSON / multipart
5. csrf               → CSRF validation (for mutations)
6. authenticate       → Session validation → req.user
7. authorize(perm)    → Permission check
8. projectAccess(id)  → Project membership check
9. validate(schema)   → Zod request validation
10. controller        → Business logic
11. errorHandler      → Catch errors, format response
```

### Rate Limits

| Endpoint Group          | Limit              |
|-------------------------|--------------------|
| POST /api/auth/login    | 5 per minute per IP|
| POST /api/auth/forgot-password | 3 per minute per IP |
| POST /api/documents/upload | 10 per minute per user |
| POST /api/ded/generate  | 5 per minute per user |
| POST /api/experiments/queue | 3 per minute per user |
| General API             | 100 per minute per user |

---

## G. ERROR RESPONSE FORMAT

All API errors follow this structure (per doc 05 section 11):

```json
{
  "error": {
    "code": "MACHINE_READABLE_CODE",
    "message": "Human-readable message in Bahasa Indonesia",
    "request_id": "uuid",
    "details": [
      { "field": "email", "message": "Email wajib diisi" }
    ]
  }
}
```

### Error Code Registry

| Code                    | HTTP | Description                              |
|-------------------------|------|------------------------------------------|
| VALIDATION_ERROR        | 400  | Input validation failed                  |
| INVALID_CREDENTIALS     | 401  | Wrong email/password                     |
| SESSION_EXPIRED         | 401  | Session expired                          |
| UNAUTHENTICATED         | 401  | No valid session                         |
| FORBIDDEN               | 403  | No permission                            |
| PROJECT_ACCESS_DENIED   | 403  | Not a project member                     |
| NOT_FOUND               | 404  | Resource not found                       |
| DUPLICATE_ENTRY         | 409  | Already exists (email, project name)     |
| INVALID_STATE_TRANSITION| 409  | Invalid workflow state change            |
| FILE_TOO_LARGE          | 413  | Upload exceeds limit                     |
| UNSUPPORTED_FILE_TYPE   | 400  | File type not allowed                    |
| RATE_LIMITED             | 429  | Too many requests                        |
| GENERATION_FAILED       | 500  | AI generation error                      |
| PROCESSING_FAILED       | 500  | Document processing error                |
| INTERNAL_ERROR          | 500  | Unexpected server error                  |

---

## H. IMPLEMENTATION PRIORITY

Aligned with page implementation phases from doc 12:

### Phase 1 — Foundation (endpoints for Auth + Layout)
- Auth module (6 endpoints)
- GET /api/auth/me
- GET /api/dashboard
- Basic middleware pipeline

### Phase 2 — Admin Core
- Users module (7 endpoints)
- Roles module (4 endpoints)
- Projects module (10 endpoints)
- Instruments module (14 endpoints)

### Phase 3 — Documents & KB
- Documents module (10 endpoints)
- Knowledge Base module (5 endpoints)
- Document processing worker

### Phase 4 — DED Workflow
- DED module (12 endpoints)
- DED generation worker
- Gemini service integration

### Phase 5 — Review
- Review module (10 endpoints)

### Phase 6 — Research
- Research module (14+ endpoints)
- Experiment execution worker
- RAGAS evaluation

### Phase 7 — System & Polish
- Notifications module (6 endpoints)
- Audit module (1 endpoint)
- System settings (2 endpoints)
- Email service for notifications

---

## I. CROSS-REFERENCE

| Document                              | Hubungan                                    |
|---------------------------------------|---------------------------------------------|
| 05-BACKEND-ARCHITECTURE-SECURITY-SESSION.md | Security rules, session arch, middleware patterns |
| 06-API-SPECIFICATION.md               | Original API skeleton (expanded here)       |
| 07-RAG-GEMINI-SPECIFICATION.md        | RAG pipeline, Gemini integration, hallucination controls |
| 14-DETAILED-WORKFLOW.md               | Workflows that define API behavior          |
| 15-DATABASE-FINALIZATION.md           | Database schema backing these APIs          |
| 13-PAGE-ROLE-MATRIX.md               | Which role calls which endpoint             |
| 12-PAGE-INVENTORY.md                 | Frontend pages consuming these APIs         |
