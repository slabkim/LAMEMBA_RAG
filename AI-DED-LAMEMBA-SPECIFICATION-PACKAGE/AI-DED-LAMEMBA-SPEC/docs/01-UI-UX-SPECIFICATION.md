# UI/UX Specification — AI DED LAMEMBA

## 1. Sumber UI

UI baseline berasal dari `/frontend`, hasil export Figma/Code yang menggunakan React, TypeScript, React Router, Tailwind CSS, dan React Icons.

**Aturan utama:** implementasi backend, API, database, atau fitur baru tidak boleh menjadi alasan untuk mengubah desain visual baseline. Jika perubahan UI memang diperlukan, perubahan harus dinyatakan sebagai requirement baru.

---

# 2. Design System Existing

## 2.1 Teknologi UI

- React 19.x
- TypeScript
- React Router 6.x
- Tailwind CSS 3.x
- React Icons
- Vite

## 2.2 Warna yang terlihat pada source

| Token              | Nilai       | Penggunaan                                    |
| ------------------ | ----------- | --------------------------------------------- |
| Primary            | `#163A5F`   | brand, tombol utama, active text, badge utama |
| Text               | `#172033`   | heading dan body utama                        |
| Secondary text     | `#667085`   | label, metadata, breadcrumb                   |
| Surface background | `#F7F9FC`   | area content/background                       |
| Border             | `#E4E7EC`   | card, input, separator                        |
| Secondary surface  | `#E8EEF5`   | active navigation / highlighted control       |
| Warning border     | `#F59E0B`   | alert/warning                                 |
| Warning surface    | `amber-100` | warning panel                                 |

Agent tidak boleh memperkenalkan warna brand baru tanpa instruksi.

---

# 3. Global Application Shell

Semua halaman existing menggunakan pola shell yang serupa.

## 3.1 Sidebar

Sidebar berada di sisi kiri dan pada source menggunakan lebar sekitar **260px**.

Elemen wajib baseline:

1. Brand icon/logo.
2. Brand title `DED LAMEMBA`.
3. Subtitle `AI DOC GENERATOR`.
4. Kartu **AKTIF WORKSPACE**.
5. Nama workspace aktif, contoh `S1 Manajemen 2026`.
6. Status workspace, contoh `DEMO Mode`.
7. Group navigation `Workspace`.
8. Group navigation `Research`.
9. Group navigation `System`.
10. Informasi engine dan LLM pada bagian bawah.

### Active navigation

Item aktif menggunakan background `#E8EEF5`, text `#163A5F`, dan font lebih tebal dibanding item normal.

### Navigation existing

**Workspace**

- Dashboard
- Projects
- Documents
- Knowledge Base
- DED Overview

**Research**

- Research Dashboard
- Evaluation Dataset
- Experiments
- Retrieval Inspection
- RAGAS Evaluation
- Method Comparison

**System**

- Users & Access
- Notifications
- Settings

Tidak semua item di atas sudah memiliki route/page dalam source. Item yang belum memiliki implementasi harus ditandai sebagai planned, bukan dibuat dengan mock page tanpa requirement.

---

## 3.2 Active Workspace Card

Kartu workspace pada sidebar memiliki:

- label kecil uppercase `AKTIF WORKSPACE`;
- nama project/workspace;
- icon/dropdown indicator;
- status kecil seperti `DEMO Mode`;
- border tipis;
- background `#F7F9FC`;
- rounded corners.

Target backend nantinya harus mengisi data ini secara dinamis berdasarkan project/workspace yang aktif.

---

## 3.3 Header / Top Bar

Header existing menggunakan background putih dan breadcrumb di sisi kiri.

Elemen:

1. Breadcrumb context, contoh `Admin / Dashboard`.
2. Search box pada sisi kanan.
3. Notification/avatar icon.
4. Nama user.
5. Role label, contoh `ADMIN`.

Search placeholder berbeda berdasarkan konteks halaman, misalnya:

- `Cari dokumen, DKPS...`
- `Cari dokumen, bukti...`
- `Cari kriteria, bukti, RAG...`
- `Cari eksperimen...`

Search harus dipertahankan sebagai context-aware search, bukan satu search field yang selalu melakukan pencarian terhadap semua entity tanpa aturan.

---

# 4. Page Specification — Existing UI

## 4.1 Admin Dashboard

### Tujuan

Dashboard memberikan ringkasan kondisi project akreditasi, status DED, pemrosesan dokumen, RAG, AI draft, review, dan isu yang membutuhkan perhatian.

### Header page

- Breadcrumb `Admin / Dashboard`.
- Judul `Admin Dashboard`.
- Project aktif: `Akreditasi S1 Manajemen 2026 · DEMO`.
- Timestamp pembaruan.
- Tombol `Export LAP`.
- Tombol `Generate Baru`.

### KPI/statistic cards

Dashboard existing menampilkan enam kelompok informasi:

1. **Active Projects** — jumlah project aktif dan perubahan dibanding periode sebelumnya.
2. **Total Documents** — jumlah DED, DKPS, dan Evidence.
3. **Processed Docs** — jumlah dan persentase dokumen selesai diproses AI.
4. **DED Progress** — persentase progress DED dan perubahan progress.
5. **AI Drafts** — jumlah draft yang dihasilkan Gemini Academic.
6. **Pending Reviews** — jumlah DED yang membutuhkan verifikasi manusia.

Setiap card memiliki:

- label;
- angka utama;
- perubahan (`+...`) jika tersedia;
- deskripsi konteks.

### Status Kriteria DED

Panel menampilkan 7 kriteria dengan kolom:

- nomor/nama kriteria;
- versi/standar instrumen;
- progress sinkronisasi;
- jumlah dokumen/evidence;
- status review atau status AI.

Status yang terlihat pada baseline antara lain:

- Approved;
- Pending Review;
- Drafting AI;
- Missing Evidence.

### Document Processing Health

Panel kesehatan pemrosesan menampilkan empat status:

- Uploaded;
- Processing;
- Processed;
- Failed.

Masing-masing menampilkan jumlah dokumen dan deskripsi status pipeline.

### Attention Required

Panel khusus untuk isu yang membutuhkan tindakan manusia. Existing UI memuat contoh:

- failed processing;
- missing evidence;
- pending human review.

Setiap issue harus memiliki:

- jenis issue;
- object yang bermasalah;
- penjelasan masalah;
- tindakan lanjutan.

### Aktivitas Terkini

Timeline aktivitas menampilkan:

- jenis aktivitas;
- deskripsi;
- actor;
- timestamp.

Contoh aktivitas existing:

- upload evidence;
- Gemini auto-draft;
- komentar reviewer;
- approved version.

### Search

Search dashboard baseline menggunakan placeholder `Cari dokumen, DKPS...`.

---

## 4.2 Projects List

### Tujuan

Menjadi halaman daftar project dan entry point pembuatan project baru.

### Existing UI

Source saat ini berupa modal/form `Buat Proyek Baru`.

### Field

1. Perguruan Tinggi / Instansi — wajib.
2. Unit Pengelola Program Studi (UPPS).
3. Jenis Program (PS), contoh S1/S2/S3.
4. Tahun Akreditasi.
5. Nama Program Studi.
6. Status Mulai:
   - Persiapan;
   - Aktif langsung.

### Tombol

- `Batal` — menutup form tanpa membuat project.
- `Buat Proyek` — validasi input dan membuat project.

### Aturan UX target

- field wajib harus jelas;
- error validasi muncul dekat field;
- submit tidak boleh membuat duplicate request ketika user double-click;
- setelah sukses, user diarahkan ke detail project atau daftar project sesuai keputusan workflow;
- status `DEMO` yang terdapat pada source harus diperlakukan sebagai data/flag, bukan label permanen untuk production.

---

## 4.3 Project Detail

### Tujuan

Memberikan ringkasan lengkap satu project akreditasi.

### Header

- breadcrumb `Projects / Detail Proyek`;
- nama project;
- badge `DEMO` pada source;
- status `Aktif`;
- metadata instansi, UPPS, PS, tahun;
- `Edit Proyek`;
- `Generate Baru`;
- timestamp pembaruan.

### Tab/section existing

- Overview
- DED Templates
- Activity Log

### KPI

- Total Documents;
- Processed Docs;
- Knowledge Base Chunks;
- DED Progress;
- AI Drafts;
- Pending Review.

### Status 7 Kriteria

Sama seperti dashboard tetapi scoped pada project. Setiap baris menampilkan:

- kriteria;
- standar/version;
- progress;
- dokumen;
- draft AI;
- review status.

### Dokumen & Evidence Terbaru

List file terbaru menampilkan:

- nama file;
- ukuran;
- tipe;
- actor;
- timestamp.

### Attention Required

Issue scoped project:

- parser gagal;
- evidence hilang;
- review tertunda.

### Tim Penyusun & Asesor

Existing UI menunjukkan daftar anggota dengan peran seperti:

- Asesor Internal;
- Penyusun DED / Kontributor;
- Reviewer Eksternal.

Target backend harus mengambil data ini dari `project_members`, bukan hardcode.

### Aktivitas Terkini

Timeline scoped project dengan actor dan waktu.

---

## 4.4 Documents Processing

### Tujuan

Mengelola upload dan status pemrosesan file DED, DKPS, dan Evidence.

### Header

- breadcrumb `Documents`;
- search;
- tombol `Upload Dokumen`.

### Upload area

Existing UI menyediakan drag-and-drop area dengan pesan:

- `Tarik dan lepas file di sini untuk upload`;
- format PDF, DOCX, XLSX;
- batas ukuran 50 MB pada mock UI.

Nilai 50 MB harus menjadi configurable server-side limit dan tidak boleh hanya menjadi validasi frontend.

### Filter

- Search berdasarkan nama.
- Project.
- Tipe.
- Status.
- Kriteria.

### Table

Kolom:

1. checkbox selection;
2. nama dokumen;
3. tipe;
4. ukuran;
5. tanggal;
6. status RAG;
7. chunks;
8. actions.

### Status

Existing:

- Uploaded;
- Processing;
- Processed;
- Failed.

### Processing Detail

Panel detail menampilkan pipeline:

1. Extract text;
2. Clean & Normalization;
3. Chunking & Tokenization;
4. Generating Vector Embeddings;
5. BM25 index generation;
6. Hybrid RAG Integration.

Setiap tahap memiliki status dan timestamp/progress bila tersedia.

### Failure state

Menampilkan pesan parser error dan tombol `Retry Processing`.

### Cancel

Tombol `Batalkan Proses` harus hanya tersedia saat job masih cancellable. Backend harus memvalidasi state transition sehingga user tidak dapat membatalkan job yang sudah completed.

---

## 4.5 Knowledge Base

### Tujuan

Menampilkan source/evidence yang telah di-index menjadi chunks dan status index Hybrid RAG.

### Header

- `Knowledge Base & Vector Store`;
- project aktif;
- last indexing;
- `Re-index RRF`;
- `Tambah Source`.

### KPI

- Total Sources;
- Total Chunks;
- Successfully Indexed;
- Failed Chunks.

### Search/filter

- Project;
- Document;
- Kriteria 1–7;
- Dimensi;
- search chunk ID atau kutipan.

### Table

Kolom:

- Source/Bukti;
- Hlm;
- Kriteria/Dimensi;
- Chunk ID;
- Semantic;
- BM25;
- Status.

### Status chunk

Existing examples:

- Indexed;
- Needs Review;
- Failed.

### Chunk Detail & Evidence

Detail harus menampilkan:

- relevant excerpt;
- nama dokumen;
- halaman/lokasi;
- tipe dokumen;
- kriteria mapping;
- status sinkronisasi store;
- status Semantic;
- status BM25;
- tombol `Lihat Dokumen Asli`;
- tombol `Inspect RRF Rank`.

Catatan evidence harus tetap menjelaskan bahwa citation membantu traceability tetapi tidak otomatis membuktikan kebenaran isi klaim.

---

## 4.6 DED Overview

### Tujuan

Menampilkan status kompilasi DED pada tingkat keseluruhan project.

### Header

- project aktif;
- update timestamp;
- `Lihat Struktur DED`;
- `Run Gemini RAG Draft`.

### KPI

- Total Sections / 7 Kriteria;
- AI Drafts Ready;
- Approved;
- Evidence Linked;
- Needs Human Review.

### Rincian Kriteria

Setiap kriteria menampilkan:

- nomor;
- nama;
- status;
- progress;
- jumlah dimensi;
- jumlah draft AI;
- evidence linked;
- preview dimensi;
- CTA untuk membuka kriteria/editor.

### Struktur DED

Existing UI menampilkan struktur seperti:

- Identitas Pengusul & UPPS;
- Identitas Tim Penyusun DED;
- Kata Pengantar & Lembar Pernyataan;
- Ringkasan Eksekutif;
- BAB I: Pendahuluan;
- BAB II: DED 7 Kriteria;
- Analisis Strategi Pengembangan & Keberlanjutan PS;
- BAB III: Penutup;
- Lampiran DKPS & Link Evidence Fisik.

Struktur ini harus disimpan sebagai configuration/instrument structure, bukan hardcoded di React.

### Evidence-first warning

Panel peringatan menampilkan isu seperti evidence coverage rendah dan human review tertunda.

---

## 4.7 Criterion Detail — Kriteria 1 Orientasi Strategis

### Tujuan

Memberikan workspace detail untuk satu kriteria, dimensi, indikator, evidence, AI draft, dan review.

### Header

- breadcrumb `DED Overview / Kriteria 1 / Orientasi Strategis`;
- judul kriteria;
- badge DEMO MODE pada source;
- deskripsi;
- `Lihat Semua Evidence`;
- `Buka Workspace`.

### Progress

Menampilkan:

- persentase kelengkapan;
- status Approved/Needs Review;
- jumlah dimensi;
- jumlah indikator;
- Draft count;
- Reviewed count;
- Evidence Linked count.

Progress harus dipahami sebagai kelengkapan administratif/naskah, bukan prediksi skor akreditasi.

### Dimensi

Setiap dimensi berupa card/row dengan:

- nomor;
- nama dimensi;
- progress;
- status;
- deskripsi;
- jumlah indikator;
- CTA `Lihat Dimensi`.

### AI processing pipeline

UI menunjukkan tahapan:

1. Sources Searched;
2. RRF Combined;
3. Context Prepped;
4. Gemini Drafted;
5. Evidence Linked.

### Indicator guide

Panel menampilkan daftar indikator dan untuk setiap indikator:

- ID indikator;
- judul;
- deskripsi/panduan asesmen.

### AI-Assisted Draft

Harus menampilkan:

- label `Generated by Gemini Academic`;
- warning bahwa draft wajib ditinjau manusia;
- narasi hasil generation;
- source citation terkait.

### Source citation

Setiap citation menampilkan:

- nama dokumen;
- halaman;
- kutipan singkat;
- `View Source`.

### Evidence Linked

Menampilkan dokumen utama dan metadata kategori evidence.

### Human Review Panel

Menampilkan:

- status review;
- komentar reviewer;
- actor reviewer;
- timestamp.

### Version History

Menampilkan versi seperti:

- Initial Draft Generated;
- Revised;
- Awaiting Review.

Target implementasi harus menyimpan versi secara immutable setelah snapshot/version dibuat.

---

## 4.8 Research Dashboard

### Tujuan

Dashboard untuk research/evaluation prototype.

### Header

- search experiment/dataset;
- badge `RESEARCH PROTOTYPE`;
- project aktif;
- `Lihat Experiments`.

### Summary cards

- Dataset;
- Test Cases;
- Methods Available;
- Latest Evaluation Run.

### Method cards

Baseline UI menunjukkan tiga pendekatan:

1. LLM Only / Zero-shot;
2. Semantic RAG;
3. Hybrid RAG — Semantic + BM25 + RRF.

UI harus membedakan status descriptive/prototype dengan hasil penelitian formal.

### RAGAS Metrics

Card menampilkan:

- Faithfulness;
- Answer Relevancy;
- Context Precision;
- Context Recall.

Jika belum ada hasil, tampilkan `Not available`, bukan angka palsu.

### Dataset Overview

Menampilkan:

- nama dataset;
- jumlah entries;
- update time;
- coverage kategori;
- readiness.

### Research workflow

1. Dataset Setup;
2. konfigurasi method dan parameter;
3. retrieval inspection;
4. run evaluation;
5. comparison.

### Run history

Kolom:

- Run ID;
- Dataset;
- Method;
- Status;
- Start;
- Finish.

---

## 4.9 Evaluation Dataset

### Tujuan

Mengelola test cases evaluasi kualitatif/kuantitatif untuk membandingkan LLM Only, Semantic RAG, dan Hybrid RAG.

### Header/actions

- search;
- `Import Dataset`;
- `Tambah Test Case`;
- filter version, criteria, dimension, status;
- `Reset Filter`.

### KPI

- Total Test Cases;
- Ready for Evaluation;
- Needs Review;
- Coverage Criteria.

### Table

Kolom:

- ID;
- pertanyaan evaluatif;
- kriteria;
- bukti acuan;
- status review;
- aksi.

### Detail Test Case

Harus menampilkan:

- pertanyaan;
- kriteria;
- dimensi;
- expected ground truth;
- reference evidence citations;
- source document/page/paragraph;
- evaluator notes;
- human review metadata;
- `Edit Test Case`;
- `Mark as Ready`.

### Dataset coverage

Chart/summary coverage harus dapat dihitung dari data test case, bukan hardcoded.

---

## 4.10 Experiments

### Tujuan

Mengelola konfigurasi dan execution run eksperimen AI/RAG.

### Summary

- Total Runs;
- Draft Configurations;
- Running;
- Completed Results.

### Filters

- search;
- status;
- method;
- dataset;
- reset.

### Experiment history table

Kolom:

- Run ID;
- nama eksperimen;
- dataset version;
- method;
- model;
- status;
- creator;
- start/end;
- action.

### New Experiment

Form harus memiliki:

- evaluation dataset;
- LLM model;
- method;
- evidence-first mode;
- vector weight;
- BM25 weight;
- RRF k;
- top-k chunks;
- RAGAS metrics checklist;
- advanced configuration.

### Actions

- `Save as Draft`;
- `Queue Experiment`.

### State machine

Minimal:

```text
DRAFT -> QUEUED -> RUNNING -> COMPLETED
                     |-> FAILED
                     |-> CANCELLED
```

State transition harus divalidasi backend.

---

## 4.11 Retrieval Inspection

### Tujuan

Menginspeksi retrieval Hybrid RAG secara transparan pada level test case/query.

### Header

- badge Research Prototype;
- deskripsi;
- `Run Inspection`;
- search.

### Query & Retrieval Configuration

Field:

- Test Case ID;
- Kriteria;
- Top-K chunks;
- pertanyaan evaluatif.

### Pipeline visualization

```text
Query
  -> Semantic Retrieval
  -> BM25 Keyword
  -> RRF Fusion
  -> Gemini Context
```

### Result groups

- Semantic Results;
- BM25 Results;
- RRF Combined Results.

Setiap result menampilkan:

- rank;
- source document;
- page/location;
- chunk ID;
- origin ranking;
- active in context;
- score jika tersedia;
- View Source.

### Context Assembly

Menampilkan daftar active chunks dan token estimate.

### Chunk Detail

Menampilkan:

- chunk ID;
- source metadata;
- file;
- page/location;
- criteria mapping;
- semantic rank;
- BM25 rank;
- RRF rank;
- full excerpt;
- matched keywords;
- relevance warning;
- `Open Source`;
- `Add to Context`.

### Empty state

Jika tidak ada result:

- pesan `No retrieval results for current filters`;
- `Reset Filters`.

---

# 5. Global State yang Wajib Ditentukan

Setiap page production harus memiliki state:

1. Initial loading;
2. Loaded;
3. Empty;
4. Validation error;
5. API error;
6. Permission denied;
7. Not found;
8. Processing/pending;
9. Success feedback;
10. Unsaved changes jika form/editor.

Agent tidak boleh hanya mengimplementasikan happy path.

---

# 6. UI yang Belum Ada di Source

Navigation existing mengacu pada:

- Users & Access;
- Notifications;
- Settings;
- RAGAS Evaluation;
- Method Comparison.

Namun source ZIP tidak menyediakan page implementation untuk seluruh item tersebut. Page production harus dibuat berdasarkan specification terpisah sebelum agent diminta mengimplementasikannya.

Hal yang sama berlaku untuk workspace role Penyusun dan Reviewer.
