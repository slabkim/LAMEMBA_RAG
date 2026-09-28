# Accreditation Domain & Configuration Specification

## 1. Purpose

Dokumen ini mendefinisikan bagaimana informasi instrumen akreditasi dimodelkan di dalam aplikasi tanpa mengikat frontend pada satu versi instrumen.

Dokumen LAMEMBA yang diberikan pada project menjadi sumber domain. Struktur konkret yang berasal dari dokumen harus dimasukkan melalui proses validasi/seed oleh administrator, bukan diketik ulang sebagai conditional logic React.

---

# 2. Configuration Hierarchy

```text
Instrument
  ↓
Instrument Version
  ↓
Criterion
  ↓
Dimension
  ↓
Indicator
  ↓
Evidence Requirement
  ↓
DED Section / Question
```

---

# 3. Instrument Versioning

Setiap project harus menyimpan `instrument_version_id`.

Dengan demikian dua project yang dibuat pada periode berbeda dapat menggunakan versi instrumen yang berbeda tanpa merusak histori project lama.

### Version lifecycle

```text
DRAFT
  ↓
VALIDATED
  ↓
PUBLISHED
  ↓
ARCHIVED
```

`PUBLISHED` harus immutable dari perspektif editing langsung.

---

# 4. Criterion

Criterion memiliki:

- code;
- name;
- description;
- order;
- status;
- parent instrument version.

Frontend menampilkan criterion berdasarkan query API.

---

# 5. Dimension

Dimension selalu memiliki parent criterion.

Field:

- code;
- name;
- description;
- order;
- status.

---

# 6. Indicator

Indicator memiliki:

- code;
- title;
- description;
- assessment guidance jika tersedia;
- order;
- status.

Indicator adalah unit penting untuk retrieval dan generation karena pertanyaan/requirement evidence dapat dipetakan sampai level ini.

---

# 7. Evidence Requirement

Evidence requirement menjelaskan data/dokumen yang diperlukan untuk mendukung indicator.

Contoh tipe source secara konseptual:

- DED;
- DKPS;
- policy/SK;
- report;
- meeting minutes;
- certificate;
- curriculum document;
- other supporting evidence.

Tipe dan daftar final harus mengikuti domain source yang telah divalidasi.

---

# 8. DED Structure

DED structure tidak boleh di-hardcode.

Admin dapat mengelola:

- section;
- subsection;
- criterion mapping;
- dimension mapping;
- indicator mapping;
- order;
- section type;
- visibility;
- generation capability.

---

# 9. Data vs Configuration

### Data project

- user input;
- project metadata;
- uploaded documents;
- evidence;
- DED content;
- review;
- experiment runs.

### Configuration

- instrument;
- instrument version;
- criterion;
- dimension;
- indicator;
- evidence requirements;
- DED structure;
- prompt version;
- retrieval parameters.

Pemisahan ini harus dipertahankan agar perubahan instrumen tidak membutuhkan perubahan source code.
