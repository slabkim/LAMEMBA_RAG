# STEP 1 — SOURCE CODE AUDIT: Frontend (ex-Figma Export)

Tanggal Audit: 28 September 2026
Source: frontend/ (Vite + React + TypeScript + Tailwind)

---

## 1. PROJECT CONFIGURATION

| Item              | Value                                    |
|-------------------|------------------------------------------|
| Project Name      | "myapp" (dari package.json, perlu rename)|
| Framework         | React 19.2 + TypeScript 5                |
| Build Tool        | Vite 7.2.4                               |
| Styling           | Tailwind CSS 3.3.2                       |
| Routing           | react-router-dom 6.21.1                  |
| Icons             | react-icons 4.11.0 (tidak dipakai)       |
| HTML Title        | "My App" (perlu rename)                  |
| Dev Port          | 5173                                     |
| Tailwind Config   | Minimal (no custom theme/plugins)        |
| PostCSS           | autoprefixer                             |
| Global CSS        | Hanya @tailwind directives               |
| node_modules      | Belum ada (perlu npm install)            |

---

## 2. ROUTING (App.tsx)

Semua route FLAT, tidak ada nested routing, tidak ada layout wrapper, tidak ada auth guard.

| Route                                  | Component                          |
|----------------------------------------|------------------------------------|
| /                                      | AdminDashboard                     |
| /AdminDashboard                        | AdminDashboard                     |
| /CriterionDetailOrientasiStrategis     | CriterionDetailOrientasiStrategis  |
| /DedOverview                           | DedOverview                        |
| /DocumentsProcessing                   | DocumentsProcessing                |
| /EvaluationDataset                     | EvaluationDataset                  |
| /Experiments                           | Experiments                        |
| /KnowledgeBase                         | KnowledgeBase                      |
| /ProjectDetail                         | ProjectDetail                      |
| /ProjectsList                          | ProjectsList                       |
| /ResearchDashboard                     | ResearchDashboard                  |
| /RetrievalInspection                   | RetrievalInspection                |

TOTAL ROUTES: 12 (11 unique pages + 1 alias "/" -> AdminDashboard)

ISSUES:
- Route naming PascalCase (bukan kebab-case seperti standar web)
- Tidak ada parameter dinamis (/:id)
- Tidak ada nested route / layout
- Tidak ada 404 / catch-all route
- Tidak ada auth guard / role-based routing

---

## 3. SIDEBAR NAVIGATION (dari source code)

Sidebar di-copy-paste di SETIAP page (tidak ada shared Sidebar component).
Struktur sidebar yang konsisten di semua page:

### Workspace Section:
- Dashboard (ada route)
- Projects (ada route)
- Documents (ada route)
- Knowledge Base (ada route)
- DED Overview (ada route)

### Research Section:
- Research Dashboard (ada route)
- Evaluation Dataset (ada route)
- Experiments (ada route)
- Retrieval Inspection (ada route)
- RAGAS Evaluation (TIDAK ADA route/page)
- Method Comparison (TIDAK ADA route/page)

### System Section:
- Users & Access (TIDAK ADA route/page)
- Notifications (TIDAK ADA route/page)
- Settings (TIDAK ADA route/page)

### Footer Info:
- Engine: Hybrid RAG v1.4
- LLM: Gemini Pro Academic

---

## 4. PAGE-BY-PAGE AUDIT

### PAGE 1: AdminDashboard (~58KB, ~1100 lines)
- **Route:** / dan /AdminDashboard
- **Breadcrumb:** "Workspace / Dashboard"
- **Active sidebar:** Dashboard (bold)
- **Header:** user "Dr. Ir. Hendra DEMO", role "Asesor internal", badge "ADMIN"
- **Content:**
  - Title: "Dashboard"
  - Subtitle: "Monitor seluruh progres penyusunan DED LAMEMBA..."
  - Stat Cards (4): Total Proyek (3), Dokumen Aktif (48), Total Chunks (2,847), Completion Rate (67%)
  - Project list table (3 rows mock data)
  - Recent Activity log
  - DED Summary panel
- **Mock Data:** semua hardcoded
- **Interactivity:** onClick -> alert("Pressed!") pada semua button
- **Images:** semua dari tagjs-prod GCS (expires 30 days!)
- **State:** input1, input2 (search inputs)
- **Components:** NONE — single monolithic file

### PAGE 2: ProjectsList (~6.5KB, 155 lines)
- **Route:** /ProjectsList
- **Content:** Modal "Buat Proyek Baru" overlay (BUKAN halaman list proyek)
- **Form Fields:**
  - Perguruan Tinggi / Instansi (*)
  - Unit Pengelola Program Studi (UPPS) (*)
  - Jenis Program (PS) (*)
  - Tahun Akreditasi (*)
  - Nama Program Studi (*)
  - Status Mulai (Persiapan / Aktif langsung)
- **Buttons:** Batal, Buat Proyek
- **State:** input1-input5
- **NOTE:** Ini BUKAN page list proyek, ini adalah modal create project

### PAGE 3: ProjectDetail (~65KB, ~1200+ lines)
- **Route:** /ProjectDetail
- **Breadcrumb:** "Workspace / Projects / S1 Manajemen 2026 · DEMO"
- **Content:**
  - Project info header (S1 Manajemen 2026)
  - Meta: Universitas Indonesia Mulia DEMO, Fakultas Ekonomi & Bisnis
  - Status badges: Aktif, DEMO MODE
  - Stat cards: Completion (67%), Documents (12), Chunks (1,842), Evidence (24)
  - Team Members section (3 users)
  - Kriteria Overview table (7 kriteria LAMEMBA)
  - Recent Activity log
  - Right panel: Quick Actions
- **Mock Data:** extensive hardcoded

### PAGE 4: DocumentsProcessing (~38KB, 881 lines)
- **Route:** /DocumentsProcessing
- **Breadcrumb:** "Workspace / Documents"
- **Content:**
  - Title: "Documents"
  - Upload zone (drag & drop, PDF/DOCX/XLSX max 50MB)
  - Filter bar: Project, Tipe, Status, Kriteria
  - Document table (6 rows): columns NAMA DOKUMEN, TIPE, UKURAN, TANGGAL, STATUS RAG, CHUNKS, ACTIONS
  - Status badges: Processing, Processed, Uploaded, Failed
  - Right panel: Processing Detail (pipeline steps)
    - Extract text -> Clean & Normalization -> Chunking & Tokenization -> Generating Vector Embeddings -> BM25 index -> Ready for Hybrid RAG
  - Hybrid RAG Integration info box
  - Failed process detail
  - Pagination: "1-6 dari 48 dokumen"

### PAGE 5: KnowledgeBase (~38KB, 849 lines)
- **Route:** /KnowledgeBase
- **Breadcrumb:** "Workspace / Knowledge Base"
- **Content:**
  - Title: "Knowledge Base & Vector Store"
  - RRF Algorithm active banner
  - Stat cards (4): Total Sources (14), Total Chunks (1,842), Successfully Indexed (1,798), Failed (44)
  - Filter section: Project, Document, Kriteria, Dimensi, Search
  - Chunks table: SOURCE/BUKTI, HLM, KRITERIA/DIMENSI, CHUNK ID, SEMANTIC, BM25, STATUS
  - Right panel: Chunk Detail & Evidence (kutipan, metadata, status)
  - Pagination: "1-5 dari 1,842 chunks"

### PAGE 6: DedOverview (~38KB, 816 lines)
- **Route:** /DedOverview
- **Breadcrumb:** "DED Overview / Kriteria 1 / Orientasi Strategis"
- **Content:**
  - Title: "Kriteria 1 - Orientasi Strategis" + DEMO MODE badge
  - Progress bar: 90% Lengkap (Approved), 4 Dimensi, 15 Indikator
  - Left: Daftar Dimensi (4 cards: Visi, Misi, Tujuan, Strategi)
  - Right:
    - AI Processing pipeline visualization (5 steps)
    - Indicator guide (4 indicators: 1.2.1 - 1.2.4)
    - AI-Assisted Draft (Gemini generated text + warning disclaimer)
    - Source Citations (2 references with page numbers)
    - Evidence Linked (3 document cards)
    - Supervisor & Human Review Panel
    - Version History (3 versions)

### PAGE 7: CriterionDetailOrientasiStrategis (~38KB, 816 lines)
- **Route:** /CriterionDetailOrientasiStrategis
- **NOTE:** DUPLICATE — konten identik dengan DedOverview

### PAGE 8: ResearchDashboard (~52KB, ~950 lines)
- **Route:** /ResearchDashboard
- **Breadcrumb:** "Research / Dashboard"
- **Content:** Research Dashboard, stat cards, experiment list, performance metrics, charts

### PAGE 9: EvaluationDataset (~62KB, ~1100 lines)
- **Route:** /EvaluationDataset
- **Breadcrumb:** "Research / Evaluation Dataset"
- **Content:** Dataset Manager, Q&A pairs table, ground truth data, stats

### PAGE 10: Experiments (~53KB, ~950 lines)
- **Route:** /Experiments
- **Breadcrumb:** "Research / Experiments"
- **Content:** Experiment cards, RAG config options, retrieval method settings, results

### PAGE 11: RetrievalInspection (~52KB, ~950 lines)
- **Route:** /RetrievalInspection
- **Breadcrumb:** "Research / Retrieval Inspection"
- **Content:** Query input, retrieved chunks, relevance scores, ranking comparison

---

## 5. COMMON PATTERNS (ALL PAGES)

### A. Code Quality Issues
- ALL pages are SINGLE MONOLITHIC FILES (no component extraction)
- Sidebar duplicated in every page (260px fixed width)
- Header/topbar duplicated in every page
- ALL images use external GCS URLs that EXPIRE in 30 days
- ALL buttons use `onClick={() => alert("Pressed!")}`
- State variables named generically (input1, input2, etc.)
- `export default (props) => {...}` — anonymous arrow function
- No TypeScript types/interfaces used despite .tsx extension
- Hardcoded pixel values everywhere (mr-[23px], w-[260px], etc.)
- No responsive design
- No accessibility (no aria labels, no semantic HTML)

### B. Shared UI Elements (duplicated per page, not extracted)
- **Sidebar** (260px, white bg): Logo, workspace selector, nav groups, footer
- **Top bar:** Breadcrumb, search input, notification bell, user profile
- **Color scheme:** Navy #163A5F (primary), Gray #667085, Background #F7F9FC, Border #E4E7EC

### C. Mock Data
- User: "Dr. Ir. Hendra DEMO" (Asesor internal, ADMIN)
- Project: "S1 Manajemen 2026" at "Universitas Indonesia Mulia DEMO"
- Documents: Renstra, DKPS, DED, Sertifikat, Laporan, Kebijakan (all DEMO)
- Kriteria: 7 LAMEMBA criteria
- All numeric values hardcoded

---

## 6. SIDEBAR vs IMPLEMENTATION STATUS

| Sidebar Item       | Route | Page | Status              |
|--------------------|-------|------|---------------------|
| Dashboard          | YES   | YES  | UI Ready            |
| Projects           | YES   | YES* | Modal Only (bukan list) |
| Documents          | YES   | YES  | UI Ready            |
| Knowledge Base     | YES   | YES  | UI Ready            |
| DED Overview       | YES   | YES  | UI Ready            |
| Research Dashboard | YES   | YES  | UI Ready            |
| Evaluation Dataset | YES   | YES  | UI Ready            |
| Experiments        | YES   | YES  | UI Ready            |
| Retrieval Inspec.  | YES   | YES  | UI Ready            |
| RAGAS Evaluation   | NO    | NO   | NOT BUILT           |
| Method Comparison  | NO    | NO   | NOT BUILT           |
| Users & Access     | NO    | NO   | NOT BUILT           |
| Notifications      | NO    | NO   | NOT BUILT           |
| Settings           | NO    | NO   | NOT BUILT           |

*ProjectsList = modal "Buat Proyek Baru", bukan halaman daftar proyek.

### Extra pages (tidak di sidebar):
- ProjectDetail — detail single project
- CriterionDetailOrientasiStrategis — duplikat DedOverview

---

## 7. CRITICAL FINDINGS

### 7.1 IMAGE ASSETS — URGENT
Semua gambar (icons, avatars, logos) di-host di:
`https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/xxx_expires_30_days.png`
URL akan EXPIRE. Harus di-download/replace dengan aset lokal/permanen.
Estimasi: 100+ unique image URLs.

### 7.2 NO SHARED COMPONENTS
Zero reusable components. Harus extract minimal:
- Sidebar, TopBar/Header, StatCard, DataTable, Badge, Modal, Button, SearchInput, Breadcrumb, Pagination

### 7.3 NO ROLE-BASED ANYTHING
- Hanya tampilan ADMIN
- Tidak ada login/auth page
- Tidak ada role switching
- Tidak ada permission-based UI

### 7.4 NO DATA LAYER
- Tidak ada API calls, state management, data fetching
- Semua data hardcoded di JSX

### 7.5 NO NAVIGATION FUNCTIONALITY
- Sidebar items TIDAK menggunakan Link/navigate()
- Tidak ada transisi antar halaman yang berfungsi
- Active page di sidebar menggunakan `<input>` dengan placeholder sebagai label

### 7.6 DUPLICATE PAGE
- DedOverview dan CriterionDetailOrientasiStrategis adalah halaman yang sama

---

## 8. FILE SIZE SUMMARY

| Page                              | Size    | Lines  |
|-----------------------------------|---------|--------|
| AdminDashboard                    | ~58 KB  | ~1100  |
| ProjectsList (Create Modal)       | 6.5 KB  | 155    |
| ProjectDetail                     | ~65 KB  | ~1200  |
| DocumentsProcessing               | 38 KB   | 881    |
| KnowledgeBase                     | 38 KB   | 849    |
| DedOverview                       | 38 KB   | 816    |
| CriterionDetailOrientasiStrategis | 38 KB   | 816    |
| ResearchDashboard                 | ~52 KB  | ~950   |
| EvaluationDataset                 | ~62 KB  | ~1100  |
| Experiments                       | ~53 KB  | ~950   |
| RetrievalInspection               | ~52 KB  | ~950   |
| **TOTAL**                         | ~500 KB | ~9767  |

---

## 9. DEPENDENCY AUDIT

| Package          | Version   | Note                                  |
|------------------|-----------|---------------------------------------|
| react            | ^19.2.0   | OK                                    |
| react-dom        | ^19.2.0   | OK                                    |
| react-router-dom | ^6.21.1   | OK                                    |
| react-icons      | ^4.11.0   | Declared tapi TIDAK dipakai           |
| vite             | ^7.2.4    | OK                                    |
| typescript       | ^5.0.0    | OK tapi no types used                 |
| tailwindcss      | ^3.3.2    | OK                                    |

---

## 10. KESIMPULAN

Frontend ini adalah **static UI export dari Figma** (via TagJS/CodeTea).
Nilainya adalah sebagai **visual baseline / design reference**.

Kondisi saat ini:
- UI layout dan design system sudah terlihat jelas
- Warna, spacing, typography konsisten
- Konten mock data menggambarkan domain akreditasi LAMEMBA dengan baik

Yang harus dilakukan SEBELUM menjadi production-ready:
1. Download/replace semua expired GCS image assets
2. Extract shared components (Sidebar, Header, dll.)
3. Implementasi proper routing (nested, parameterized, guarded)
4. Implementasi role-based views (Admin, Penyusun, Reviewer, Researcher)
5. Build data layer (API service, state management)
6. Bangun halaman yang belum ada (RAGAS, Method Comparison, Users, Notifications, Settings)
7. Bangun halaman untuk role Penyusun dan Reviewer
8. Responsive design
9. Accessibility

**Baseline ini dipertahankan sebagai referensi visual. Jangan langsung refactor.**
**Langkah selanjutnya: buat 12-PAGE-INVENTORY.md**
