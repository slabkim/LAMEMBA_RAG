# Testing Specification

## 1. Testing Pyramid

```text
        E2E
       /   \
 Integration
    /       \
   Unit / Service
```

---

# 2. Authentication Tests

- valid login;
- invalid password;
- invalid email;
- disabled account;
- expired session;
- revoked session;
- logout;
- password reset;
- brute-force/rate-limit behavior.

Expected security behavior harus diuji, bukan hanya status UI.

---

# 3. Authorization Tests

Untuk setiap endpoint protected:

1. unauthenticated → 401;
2. authenticated without permission → 403;
3. correct permission but wrong project → 403/404 sesuai policy;
4. correct role + project → success.

Test wajib mencakup IDOR scenario, misalnya user mencoba mengganti URL project ID milik user lain.

---

# 4. Project Tests

- create;
- required validation;
- duplicate handling;
- update;
- archive;
- add member;
- remove member;
- member isolation.

---

# 5. Document Tests

- valid PDF;
- valid DOCX;
- valid XLSX;
- oversized file;
- wrong MIME;
- corrupted file;
- duplicate checksum;
- upload permission;
- processing success;
- processing failure;
- retry;
- cancellation;
- status transitions.

---

# 6. Knowledge Base Tests

- chunk creation;
- metadata correctness;
- page mapping;
- embedding index;
- BM25 index;
- reindex;
- failed chunk;
- project isolation;
- retrieval filter.

---

# 7. DED Tests

- correct section loading;
- correct indicator mapping;
- generation with evidence;
- generation without sufficient evidence;
- citation validation;
- edit;
- version creation;
- submit;
- revision;
- approval.

---

# 8. AI/RAG Tests

Test case harus memeriksa:

- retrieval relevance;
- project scope;
- evidence traceability;
- no fabricated citation;
- no fabricated page number;
- structured output;
- Gemini timeout;
- Gemini API error;
- malformed model output;
- retry safety.

---

# 9. Research Tests

- dataset import;
- schema validation;
- test case mapping;
- experiment configuration;
- queue;
- run state;
- cancellation;
- metrics storage;
- RAGAS result persistence;
- method comparison.

---

# 10. UI Tests

Setiap page harus diuji minimal pada:

- loaded;
- empty;
- loading;
- error;
- unauthorized;
- not found;
- mobile/responsive jika halaman ditargetkan responsive.

---

# 11. Regression Rule

Setiap perubahan backend yang memengaruhi contract harus menjalankan test frontend/API terkait.

Setiap perubahan database harus menjalankan migration test.

Setiap perubahan retrieval harus menjalankan regression retrieval test.

Setiap perubahan prompt harus menjalankan evaluation dataset yang relevan sebelum dianggap siap production.
