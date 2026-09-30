# 16 — Instrument Template Specification: AI DED LAMEMBA

Tanggal: 28 September 2026
Sumber: `14-DETAILED-WORKFLOW.md` (Bagian 8) + `15-DATABASE-SCHEMA.md`
Step: 6 — Pembuatan template struktur instrumen

Dokumen ini mendefinisikan struktur data untuk template instrumen akreditasi (LAMEMBA). File JSON ini digunakan oleh Admin (SYS-06) untuk melakukan **Bulk Import** atau inisialisasi awal database secara otomatis tanpa harus membuat Kriteria/Dimensi/Indikator satu per satu melalui UI.

---

## A. FORMAT JSON (BULK IMPORT PAYLOAD)

Berikut adalah struktur JSON yang mengikuti relasi pada Prisma Schema (`InstrumentVersion` → `Criterion` → `Dimension` → `Indicator` → `EvidenceRequirement`).

```json
{
  "instrument_name": "LAMEMBA",
  "version_name": "Versi 2024",
  "year": 2024,
  "criteria": [
    {
      "number": 1,
      "name": "Visi, Misi, Tujuan, dan Strategi",
      "description": "Evaluasi terhadap orientasi strategis Unit Pengelola Program Studi (UPPS)",
      "dimensions": [
        {
          "number": "1.1",
          "name": "Kejelasan Visi dan Misi",
          "description": "Visi dan Misi harus jelas, realistis, dan dipahami oleh pemangku kepentingan.",
          "indicators": [
            {
              "number": "1.1.1",
              "name": "Mekanisme Penyusunan Visi, Misi, Tujuan, dan Sasaran",
              "description": "Keterlibatan pemangku kepentingan dalam penyusunan VMTS.",
              "assessment_guide": "Nilai 4 jika penyusunan VMTS melibatkan seluruh pemangku kepentingan internal dan eksternal, dilengkapi bukti dokumen legal.",
              "evidence_requirements": [
                {
                  "name": "Dokumen VMTS (Buku Pedoman/Statuta)",
                  "type": "Document",
                  "description": "Dokumen resmi penetapan visi misi",
                  "is_required": true
                },
                {
                  "name": "Notulensi Rapat Penyusunan",
                  "type": "Document",
                  "description": "Bukti kehadiran pihak eksternal dan internal",
                  "is_required": true
                }
              ]
            },
            {
              "number": "1.1.2",
              "name": "Pemahaman Pemangku Kepentingan",
              "description": "Tingkat pemahaman sivitas akademika terhadap VMTS.",
              "assessment_guide": "Survei pemahaman VMTS menunjukkan hasil di atas 80%.",
              "evidence_requirements": [
                {
                  "name": "Laporan Survei Pemahaman VMTS",
                  "type": "Document",
                  "description": "Hasil kuesioner dosen, mahasiswa, dan tendik",
                  "is_required": true
                }
              ]
            }
          ]
        },
        {
          "number": "1.2",
          "name": "Strategi Pencapaian Sasaran",
          "description": "Strategi pencapaian visi, misi, dan tujuan yang berkesinambungan.",
          "indicators": [
            {
              "number": "1.2.1",
              "name": "Rencana Strategis (Renstra)",
              "description": "Keberadaan Renstra yang mencakup indikator kinerja.",
              "assessment_guide": "Renstra mencakup milestone yang jelas dan terukur.",
              "evidence_requirements": [
                {
                  "name": "Dokumen Renstra UPPS",
                  "type": "Document",
                  "description": "Rencana Strategis 5 tahunan",
                  "is_required": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 2,
      "name": "Tata Pamong, Tata Kelola, dan Kerjasama",
      "description": "Sistem tata pamong dan kelembagaan yang menjamin kredibilitas dan transparansi",
      "dimensions": [
        {
          "number": "2.1",
          "name": "Sistem Tata Pamong",
          "description": "Sistem tata pamong yang berjalan secara efektif.",
          "indicators": [
            {
              "number": "2.1.1",
              "name": "Kelengkapan Struktur Organisasi",
              "description": "Kelengkapan dan kejelasan wewenang dalam struktur organisasi.",
              "assessment_guide": "Struktur organisasi memiliki job description yang jelas dan dievaluasi berkala.",
              "evidence_requirements": [
                {
                  "name": "SK Struktur Organisasi",
                  "type": "Document",
                  "description": "Surat Keputusan penetapan struktur UPPS",
                  "is_required": true
                },
                {
                  "name": "SOP Tata Kelola",
                  "type": "Document",
                  "description": "Dokumen standar operasional prosedur terkait tata pamong",
                  "is_required": true
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

*(Catatan: JSON di atas adalah sampel untuk Kriteria 1 & 2. Pada implementasi asli, JSON ini akan mencakup seluruh 7 Kriteria, Dimensi, Indikator, dan persyaratan Evidence sesuai matriks LAMEMBA.)*

---

## B. ATURAN IMPORT BACKEND

Ketika file JSON ini di-upload di halaman **SYS-06**:

1. **Transaction Wrapping:** 
   Seluruh proses parsing dan insert (Instrument → InstrumentVersion → Criteria → Dimensions → Indicators → Evidence Requirements) wajib dijalankan dalam satu transaksi database (`prisma.$transaction`). Jika satu gagal, semua di-rollback.

2. **Validasi Unik:**
   Backend harus memastikan tidak ada duplikasi nomor Kriteria (e.g., dua Kriteria dengan `number: 1`), nomor Dimensi, dan nomor Indikator di dalam scope satu `InstrumentVersion`.

3. **Status:**
   Versi yang baru di-import secara default mendapatkan status `DRAFT` sesuai definisi di Prisma Schema. Admin harus me-review struktur di UI sebelum melakukan aksi **Activate**.

4. **Hubungan ke Project Baru:**
   Setelah diaktifkan (`ACTIVE`), struktur ini menjadi template utama setiap kali Admin membuat Proyek Baru di **WS-02**.

---

## C. IMPLEMENTASI FRONTEND UNTUK JSON IMPORT

Halaman **SYS-06 (Instrument Management)** akan memiliki tombol *Import JSON* dengan flow:

1. Klik tombol **Import Template (JSON)**.
2. File Dialog terbuka, user memilih file `.json`.
3. Frontend melakukan validasi awal skema (memastikan key `instrument_name`, `version_name`, dan `criteria` array ada).
4. Data dikirim via `POST /api/instruments/import` (payload JSON murni, Content-Type: `application/json`).
5. Menampilkan Loading state.
6. Saat response `201 Created` diterima, UI otomatis me-refresh tree view Instrumen.
