# AI Coding Agent Rules

Dokumen ini ditujukan untuk Antigravity AI, GitHub Copilot Agent, dan agent coding lain yang mengerjakan repository.

---

# 1. Mandatory Reading

Sebelum melakukan perubahan, agent wajib membaca:

1. `AGENTS.md` di root;
2. `docs/00-PROJECT-OVERVIEW.md`;
3. specification yang relevan dengan task;
4. source code yang akan diubah.

---

# 2. No Guessing Rule

Agent **DILARANG menebak** business requirement.

Jika informasi tidak tersedia:

- jangan membuat asumsi diam-diam;
- jangan membuat fitur tambahan hanya karena dianggap bagus;
- catat `TBD` atau minta keputusan manusia.

---

# 3. UI Preservation Rule

UI baseline berasal dari `/frontend`.

Agent tidak boleh:

- mengganti warna utama;
- mengganti layout;
- mengganti sidebar;
- mengganti typography;
- menghapus card;
- mengubah spacing;
- mengganti component dengan design system lain;
- membuat dashboard baru yang berbeda;

kecuali task secara eksplisit meminta perubahan UI.

---

# 4. Database Change Rule

Jika agent menambah/mengubah entity atau field:

1. update database specification;
2. update data dictionary;
3. update ERD jika tersedia;
4. create migration;
5. update repository/service;
6. update API contract;
7. update test.

Jangan membuat tabel baru hanya karena page baru membutuhkan state sederhana jika entity tersebut belum dianalisis.

---

# 5. API Rule

Setiap endpoint baru harus memiliki:

- authentication requirement;
- permission;
- request schema;
- response schema;
- error behavior;
- validation;
- test.

---

# 6. Security Rule

Agent dilarang:

- menyimpan token/session di localStorage jika architecture menggunakan cookie session;
- menaruh secret di frontend;
- bypass authorization;
- mempercayai project ID dari client tanpa authorization;
- log password/API key/session secret;
- expose stack trace production.

---

# 7. AI/RAG Rule

Agent dilarang:

- hardcode evidence;
- hardcode citation;
- membuat page number palsu;
- membuat chunk ID palsu;
- menganggap LLM sebagai database;
- mengirim data project lain ke context;
- menyimpan model output tanpa validation.

---

# 8. Accreditation Configuration Rule

Agent dilarang membuat logic seperti:

```ts
if (criterion === 'Kriteria 1') { ... }
```

sebagai cara utama mengimplementasikan seluruh instrumen.

Kriteria, dimensi, indikator, evidence requirement, dan struktur DED harus berasal dari database/configuration yang versioned.

---

# 9. Scope Rule

Agent hanya mengubah file yang relevan.

Jangan melakukan refactor besar, rename massal, dependency replacement, atau perubahan arsitektur hanya karena agent menganggapnya lebih baik.

---

# 10. Validation Before Completion

Sebelum menyatakan task selesai, agent harus:

1. menjalankan type check/build yang tersedia;
2. menjalankan test yang relevan;
3. memeriksa route;
4. memeriksa API contract;
5. memeriksa authorization;
6. memastikan tidak ada secret yang masuk repository;
7. memberikan ringkasan file yang berubah.

---

# 11. Existing Demo Data Rule

Data seperti:

- `DEMO Mode`;
- `Dr. Ir. Hendra DEMO`;
- angka KPI;
- nama file contoh;
- score retrieval;
- hasil eksperimen contoh

yang ada pada UI baseline harus diperlakukan sebagai **mock/demo content** sampai digantikan oleh backend data nyata.

Agent tidak boleh menyimpulkan bahwa angka tersebut adalah hasil penelitian atau data institusi nyata.

---

# 12. Change Report

Setiap task selesai harus menjelaskan:

- apa yang diubah;
- mengapa diubah;
- file yang diubah;
- migration yang dibuat;
- endpoint yang dibuat/diubah;
- test yang dijalankan;
- known limitation;
- specification yang perlu diperbarui.
