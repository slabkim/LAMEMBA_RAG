# RAG & Gemini Generation Specification

## 1. Tujuan

RAG digunakan agar generation DED memperoleh konteks dari evidence/project documents yang relevan. Gemini menjadi model generatif, bukan database fakta.

---

# 2. Ingestion Pipeline

```text
File Upload
  ↓
File Validation
  ↓
Text / Table Extraction
  ↓
Cleaning & Normalization
  ↓
Structure Detection
  ↓
Chunking
  ↓
Metadata Enrichment
  ↓
Embedding
  ↓
Vector Index
  ↓
BM25 Index
```

---

# 3. Chunk Metadata

Setiap chunk idealnya memiliki:

- chunk ID;
- document ID;
- project ID;
- document type;
- page number;
- section title;
- criterion mapping jika diketahui;
- dimension mapping jika diketahui;
- indicator mapping jika diketahui;
- source location;
- token count;
- index status.

Metadata harus berasal dari extraction/mapping yang dapat ditelusuri, bukan hasil tebakan.

---

# 4. Retrieval

Baseline UI menunjukkan Hybrid RAG dengan:

- Semantic Retrieval;
- BM25 Keyword Retrieval;
- RRF Fusion.

Target retrieval flow:

```text
User Query
  ├── Semantic Search
  └── BM25 Search
          ↓
      Candidate Sets
          ↓
       RRF Fusion
          ↓
      Top-K Context
```

Parameter seperti vector weight, BM25 weight, RRF k, dan top-k harus configurable untuk research experiment.

---

# 5. Project Isolation

Retriever tidak boleh mengambil chunk dari project lain hanya karena chunk tersebut relevan secara semantic.

Filter project wajib diterapkan sebelum context dikirim ke Gemini.

---

# 6. Evidence-First Generation

Sebelum generation:

1. indicator definition diambil;
2. evidence requirement diambil;
3. evidence candidate dicari;
4. candidate diverifikasi scope-nya;
5. context disusun;
6. Gemini menerima context.

Jika evidence tidak cukup, sistem harus dapat menghasilkan status seperti `NEEDS_EVIDENCE` atau meminta user melengkapi evidence, bukan memaksa narasi faktual.

---

# 7. Gemini Prompt Structure

Prompt builder harus memisahkan:

1. system instruction;
2. project context;
3. instrument context;
4. indicator requirement;
5. retrieved evidence;
6. generation task;
7. output schema;
8. constraints.

Contoh logical instruction:

```text
Anda membantu menyusun draft DED.
Gunakan hanya evidence yang diberikan dalam context.
Jangan membuat sumber, nomor halaman, nama file, atau fakta yang tidak terdapat dalam context.
Jika evidence tidak cukup, nyatakan bahwa evidence belum mencukupi.
```

Prompt final harus dikelola sebagai versioned configuration.

---

# 8. Structured Output

Generation sebaiknya menghasilkan struktur:

```json
{
  "draft": "...",
  "evidence_references": [
    {
      "chunk_id": "...",
      "document_id": "...",
      "page_number": 14
    }
  ],
  "needs_human_review": true,
  "missing_evidence": []
}
```

ID evidence harus berasal dari retrieval result. Backend harus memvalidasi ID sebelum menyimpan.

---

# 9. Citation Traceability

Citation harus dapat ditelusuri:

```text
DED Response
  ↓
Evidence Reference
  ↓
Chunk
  ↓
Document
  ↓
Original File
```

User dapat membuka source asli dari citation jika permission mengizinkan.

---

# 10. Retrieval Inspection

Researcher harus dapat melihat:

- query;
- semantic rank;
- BM25 rank;
- RRF rank;
- scores;
- selected context;
- chunk metadata;
- context assembly.

Tujuannya adalah transparansi eksperimen, bukan sekadar menampilkan satu angka score.

---

# 11. RAGAS

Metrik yang terlihat pada UI:

- Faithfulness;
- Answer Relevancy;
- Context Precision;
- Context Recall.

Metrik hanya boleh ditampilkan setelah evaluation run benar-benar selesai. Jika belum ada hasil, tampilkan `Not available`, bukan angka demo.

---

# 12. Hallucination Controls

System harus mencegah:

- fabricated document name;
- fabricated page number;
- fabricated chunk ID;
- unsupported factual claim;
- evidence dari project lain;
- citation yang tidak ada di retrieval context.

Model output tidak boleh langsung dianggap benar hanya karena memiliki citation.
