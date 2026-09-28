# Database ERD — Logical Model

> ERD ini adalah logical baseline. Physical SQL syntax dapat disesuaikan dengan DBMS final.

```mermaid
erDiagram
    USERS ||--o{ USER_ROLES : has
    ROLES ||--o{ USER_ROLES : assigned
    ROLES ||--o{ ROLE_PERMISSIONS : grants
    PERMISSIONS ||--o{ ROLE_PERMISSIONS : included
    USERS ||--o{ SESSIONS : owns

    INSTITUTIONS ||--o{ STUDY_PROGRAMS : contains
    INSTITUTIONS ||--o{ PROJECTS : owns
    STUDY_PROGRAMS ||--o{ PROJECTS : used_by
    USERS ||--o{ PROJECTS : creates
    PROJECTS ||--o{ PROJECT_MEMBERS : has
    USERS ||--o{ PROJECT_MEMBERS : joins

    INSTRUMENTS ||--o{ INSTRUMENT_VERSIONS : has
    INSTRUMENT_VERSIONS ||--o{ CRITERIA : contains
    CRITERIA ||--o{ DIMENSIONS : contains
    DIMENSIONS ||--o{ INDICATORS : contains
    INDICATORS ||--o{ EVIDENCE_REQUIREMENTS : requires
    INSTRUMENT_VERSIONS ||--o{ PROJECTS : selected_by

    PROJECTS ||--o{ DOCUMENTS : owns
    DOCUMENTS ||--o{ DOCUMENT_VERSIONS : versions
    DOCUMENTS ||--o{ DOCUMENT_PROCESSING_RUNS : processed_by
    DOCUMENTS ||--o{ DOCUMENT_CHUNKS : split_into
    DOCUMENT_CHUNKS ||--o{ CHUNK_INDEX_STATUS : indexed_as
    PROJECTS ||--o{ KNOWLEDGE_BASES : has

    PROJECTS ||--o{ DED_SECTIONS : contains
    DED_SECTIONS ||--o{ DED_SECTIONS : parent_of
    DED_SECTIONS ||--o{ DED_RESPONSES : answered_by
    DED_RESPONSES ||--o{ DED_VERSIONS : versioned_as
    DED_RESPONSES ||--o{ EVIDENCE_REFERENCES : supported_by
    DOCUMENTS ||--o{ EVIDENCE_REFERENCES : cited
    DOCUMENT_CHUNKS ||--o{ EVIDENCE_REFERENCES : cited_chunk

    PROJECTS ||--o{ REVIEWS : has
    DED_RESPONSES ||--o{ REVIEWS : reviewed
    USERS ||--o{ REVIEWS : performs
    REVIEWS ||--o{ REVIEW_COMMENTS : contains
    REVIEWS ||--o{ REVISION_REQUESTS : produces

    DATASETS ||--o{ DATASET_TEST_CASES : contains
    PROJECTS ||--o{ EXPERIMENTS : scopes
    DATASETS ||--o{ EXPERIMENTS : evaluates
    EXPERIMENTS ||--o{ EXPERIMENT_RUNS : runs
    EXPERIMENT_RUNS ||--o{ EXPERIMENT_METRICS : produces
    PROJECTS ||--o{ RETRIEVAL_INSPECTIONS : scopes
    DATASET_TEST_CASES ||--o{ RETRIEVAL_INSPECTIONS : inspects
    RETRIEVAL_INSPECTIONS ||--o{ RETRIEVAL_RESULTS : returns
    DOCUMENT_CHUNKS ||--o{ RETRIEVAL_RESULTS : retrieved

    USERS ||--o{ NOTIFICATIONS : receives
    USERS ||--o{ AUDIT_LOGS : performs
    PROJECTS ||--o{ AUDIT_LOGS : scopes
```

## Critical Relationship Rules

1. Semua `project-scoped resource` harus dapat ditelusuri ke `projects.id` secara langsung atau melalui parent chain yang tidak ambigu.
2. `projects.instrument_version_id` menentukan configuration instrumen yang dipakai project.
3. `DED_RESPONSES` harus dapat ditelusuri ke `DED_SECTIONS`, lalu ke criterion/dimension/indicator bila mapping tersedia.
4. `EVIDENCE_REFERENCES` harus menunjuk ke `DOCUMENTS` dan, bila berasal dari retrieval, ke `DOCUMENT_CHUNKS`.
5. `REVIEWS` tidak boleh mengubah history `DED_VERSIONS` secara destruktif.
6. `AUDIT_LOGS` tidak boleh dihapus oleh operasi CRUD biasa.
