# Implementation Checklist

## Phase A — UI/UX

- [ ] Shared sidebar implemented according to baseline
- [ ] Workspace selector/data context
- [ ] Header/breadcrumb
- [ ] Search component
- [ ] User identity/role badge
- [ ] Dashboard
- [ ] Projects
- [ ] Project detail
- [ ] Documents
- [ ] Knowledge Base
- [ ] DED Overview
- [ ] Criterion Detail
- [ ] Research Dashboard
- [ ] Evaluation Dataset
- [ ] Experiments
- [ ] Retrieval Inspection
- [ ] Planned Users & Access
- [ ] Planned Notifications
- [ ] Planned Settings
- [ ] Planned RAGAS Evaluation
- [ ] Planned Method Comparison

## Phase B — Database

- [ ] ERD approved
- [ ] Data dictionary approved
- [ ] migrations
- [ ] indexes
- [ ] seed roles
- [ ] seed permissions
- [ ] seed instrument version
- [ ] seed criterion/dimension/indicator only after source validation

## Phase C — Backend

- [ ] environment config
- [ ] database connection
- [ ] session store
- [ ] authentication
- [ ] authorization
- [ ] user management
- [ ] project management
- [ ] document upload
- [ ] processing queue
- [ ] knowledge base
- [ ] DED
- [ ] review
- [ ] notifications
- [ ] audit logs

## Phase D — RAG/Gemini

- [ ] extraction
- [ ] normalization
- [ ] chunking
- [ ] embedding
- [ ] BM25
- [ ] RRF
- [ ] context builder
- [ ] Gemini service
- [ ] output schema validation
- [ ] citation validation
- [ ] evidence traceability
- [ ] RAGAS

## Phase E — Testing

- [ ] unit
- [ ] integration
- [ ] RBAC
- [ ] project isolation
- [ ] upload security
- [ ] RAG regression
- [ ] Gemini failure handling
- [ ] E2E author workflow
- [ ] E2E reviewer workflow
- [ ] E2E admin workflow
- [ ] E2E researcher workflow
