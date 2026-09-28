# Backend Architecture, Session, Security & Service Specification

## 1. Tujuan

Backend menjadi satu-satunya lapisan yang bertanggung jawab atas business logic, authentication, authorization, data validation, workflow, file processing orchestration, RAG orchestration, Gemini integration, dan audit.

Frontend tidak boleh menjadi sumber kebenaran security.

---

# 2. Layer Architecture

```text
HTTP / API Layer
      ↓
Middleware
      ↓
Controller / Route Handler
      ↓
Application Service
      ↓
Domain / Business Rules
      ↓
Repository / Data Access
      ↓
Database / External Services
```

Untuk asynchronous workload:

```text
API
 ↓
Job Queue
 ↓
Worker
 ↓
Document/RAG/AI Service
 ↓
Database + Search/Vector Store
```

---

# 3. Backend Modules

## 3.1 Auth Module

Tanggung jawab:

- login;
- logout;
- password verification;
- password reset;
- email verification jika digunakan;
- session creation;
- session revocation;
- current user.

## 3.2 User & Access Module

- user CRUD;
- role assignment;
- permission evaluation;
- user status.

## 3.3 Project Module

- institution;
- study program;
- project;
- project member;
- project status.

## 3.4 Instrument Module

- instrument;
- version;
- criterion;
- dimension;
- indicator;
- evidence requirement;
- DED structure.

## 3.5 Document Module

- upload;
- metadata;
- version;
- processing job;
- status;
- retry;
- cancellation.

## 3.6 Knowledge Base/RAG Module

- chunk metadata;
- index status;
- semantic retrieval;
- BM25 retrieval;
- RRF fusion;
- context assembly.

## 3.7 DED Module

- section;
- response;
- generation;
- version;
- evidence reference;
- submit.

## 3.8 Review Module

- assignment;
- comments;
- revision request;
- approval;
- review history.

## 3.9 Research Module

- dataset;
- test case;
- experiment;
- run;
- metrics;
- retrieval inspection.

## 3.10 Audit Module

- audit event;
- security event;
- entity history.

---

# 4. Session Architecture

## 4.1 Model

Target model menggunakan **server-managed session** dengan cookie HTTP-only. Raw session secret tidak disimpan sebagai plaintext di database.

Cookie konseptual:

```text
Name: ded_session
HttpOnly: true
Secure: true pada HTTPS
SameSite: Lax atau Strict sesuai deployment
Path: /
```

## 4.2 Login

1. User mengirim email/password melalui HTTPS.
2. Backend melakukan rate-limit check.
3. Backend mencari user berdasarkan normalized email.
4. Backend memeriksa status user.
5. Password diverifikasi menggunakan password hashing algorithm yang aman, misalnya Argon2id.
6. Backend membuat cryptographically secure random session secret.
7. Backend menyimpan hash session secret + metadata session.
8. Backend mengirim cookie HTTP-only.
9. Backend menulis audit event login berhasil.

## 4.3 Request Authentication

Untuk setiap request protected:

1. Cookie dibaca server.
2. Session secret di-hash.
3. Session dicari.
4. Expiry diperiksa.
5. Revocation diperiksa.
6. User status diperiksa.
7. User context dibuat.

Jika gagal:

- `401 Unauthorized` untuk belum authenticated/session invalid.
- `403 Forbidden` untuk authenticated tetapi tidak punya permission.

## 4.4 Logout

1. Session saat ini direvoke.
2. Cookie dihapus/expired.
3. Audit event dibuat.

## 4.5 Session Expiration

Session harus memiliki:

- absolute expiration;
- idle timeout;
- revocation mechanism.

Nilai durasi final harus dikonfigurasi berdasarkan kebijakan deployment, bukan di-hardcode di frontend.

---

# 5. Password Security

- Password tidak pernah disimpan plaintext.
- Gunakan password hashing adaptif seperti Argon2id.
- Jangan gunakan SHA-256 biasa untuk password.
- Password reset token harus random, single-use, short-lived, dan disimpan sebagai hash.
- Jangan menulis password/token ke log.

---

# 6. Authorization

Authorization harus dilakukan pada backend.

Pola:

```text
requireAuthenticated()
      ↓
requirePermission('ded.generate')
      ↓
requireProjectAccess(projectId)
      ↓
Service operation
```

Untuk setiap request project-scoped, `projectId` tidak boleh dipercaya hanya karena dikirim client.

Backend harus mengambil resource dan memastikan resource tersebut benar-benar milik/terkait project yang diizinkan.

---

# 7. Input Validation

Semua input eksternal dianggap untrusted:

- JSON body;
- query parameter;
- path parameter;
- header;
- multipart file;
- imported dataset;
- webhook.

Validation dilakukan sebelum business logic.

Validation mencakup:

- required;
- type;
- length;
- enum;
- format;
- numeric range;
- relationship existence;
- authorization.

---

# 8. File Upload Security

Frontend validation tidak cukup.

Backend harus memeriksa:

1. ukuran file;
2. MIME type;
3. extension;
4. file signature/magic bytes jika relevan;
5. checksum;
6. filename normalization;
7. path traversal;
8. executable content;
9. storage isolation.

File sebaiknya disimpan menggunakan generated storage key, bukan nama file mentah sebagai path.

Jika deployment memiliki antivirus/malware scanner, scan dilakukan sebelum file dianggap trusted evidence.

---

# 9. API Security

- HTTPS only untuk production.
- CORS allowlist.
- CSRF protection bila menggunakan cookie session.
- Rate limiting terutama pada login, upload, generation, dan expensive retrieval.
- Request body limit.
- Timeout.
- Idempotency untuk operation yang dapat ter-trigger dua kali.
- Structured error response.
- Jangan expose stack trace.

---

# 10. CSRF

Karena session menggunakan cookie, request mutating seperti POST/PATCH/DELETE harus dilindungi dari CSRF.

Pilihan implementasi dapat berupa:

- SameSite cookie policy;
- CSRF token;
- Origin/Referer validation;
- kombinasi yang sesuai deployment.

Frontend tidak boleh menganggap CORS sebagai CSRF protection.

---

# 11. API Error Contract

Response error harus konsisten.

Contoh:

```json
{
  "error": {
    "code": "PROJECT_ACCESS_DENIED",
    "message": "Anda tidak memiliki akses ke project ini.",
    "request_id": "..."
  }
}
```

`message` aman untuk user. Detail internal berada pada server log dan menggunakan `request_id` untuk tracing.

---

# 12. Transaction Rules

Gunakan database transaction untuk operasi yang harus atomic.

Contoh:

### Create Project

Satu transaction untuk:

- project;
- initial member;
- instrument association;
- audit event.

Jika salah satu gagal, operasi harus rollback.

### Approve DED

Transaction harus memastikan:

- review status;
- response/version;
- approval metadata;
- audit event

konsisten.

---

# 13. Async Job Processing

Operasi berat tidak boleh memblokir HTTP request terlalu lama:

- document extraction;
- OCR;
- chunking;
- embedding;
- BM25 indexing;
- RAG generation;
- RAGAS evaluation.

Gunakan queue/worker architecture.

Job harus memiliki:

- job ID;
- status;
- attempt;
- started_at;
- completed_at;
- error code;
- retry policy.

---

# 14. Gemini Integration

Gemini dipanggil melalui service khusus, bukan langsung dari React.

```text
DED Service
   ↓
Retrieval Service
   ↓
Context Builder
   ↓
Gemini Service
   ↓
Output Validator
   ↓
DED Response Service
```

API key/credential hanya berada di server-side secret/configuration.

Jangan pernah mengirim secret Gemini ke browser.

---

# 15. AI Output Validation

Output Gemini harus divalidasi sebelum disimpan sebagai DED response.

Validasi minimal:

- output tidak kosong;
- format sesuai schema;
- evidence reference valid;
- citation mengacu pada retrieved source;
- page number bila ada harus berasal dari metadata source;
- tidak ada source ID fiktif;
- tidak ada chunk ID yang tidak ada;
- project scope cocok.

Jika validation gagal, output tidak boleh dipublikasikan sebagai valid draft tanpa status error/needs review.

---

# 16. Logging

Log aplikasi harus mencakup:

- request ID;
- user ID bila authenticated;
- route;
- method;
- status code;
- latency;
- service/job ID;
- error code.

Jangan log:

- password;
- session secret;
- API key;
- access token;
- sensitive document content secara penuh kecuali ada policy eksplisit.

---

# 17. Audit Logging

Audit event minimal:

- LOGIN_SUCCESS;
- LOGIN_FAILED;
- LOGOUT;
- USER_CREATED;
- USER_DISABLED;
- ROLE_ASSIGNED;
- PROJECT_CREATED;
- PROJECT_UPDATED;
- MEMBER_ADDED;
- DOCUMENT_UPLOADED;
- DOCUMENT_PROCESSING_STARTED;
- DOCUMENT_PROCESSING_FAILED;
- DED_GENERATED;
- DED_UPDATED;
- DED_SUBMITTED;
- REVIEW_CREATED;
- REVISION_REQUESTED;
- DED_APPROVED;
- INSTRUMENT_VERSION_PUBLISHED;
- EXPERIMENT_STARTED;
- EXPERIMENT_COMPLETED.

---

# 18. Configuration & Secrets

Configuration harus dipisahkan dari source code.

Contoh kategori:

- database URL;
- session secret/config;
- Gemini credential;
- object storage credential;
- vector store configuration;
- queue configuration;
- allowed origins;
- upload limits;
- rate limits.

Secret tidak boleh di-commit ke Git.
