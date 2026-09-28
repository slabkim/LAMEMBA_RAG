# AGENTS.md — AI DED LAMEMBA

## Project Rule

AI DED LAMEMBA adalah aplikasi evidence-first untuk membantu penyusunan DED LAMEMBA. UI baseline berasal dari folder `frontend`.

## Mandatory Before Coding

Baca:

1. `docs/09-AGENT-RULES.md`
2. `docs/00-PROJECT-OVERVIEW.md`
3. specification yang relevan dengan task
4. source code terkait

## Never Guess

Jika requirement tidak ada di specification atau task user, jangan menebak. Minta keputusan atau tandai TBD.

## UI

Pertahankan UI/UX baseline dari folder `frontend`. Jangan melakukan redesign tanpa instruksi eksplisit.

## Database

Database harus domain-driven, version-aware, project-scoped, dan memiliki data dictionary. Jangan hardcode kriteria/dimensi/indikator di frontend.

## Backend

Semua security enforcement berada di backend. Gunakan session architecture yang terdokumentasi. Frontend hanya UX authorization.

## AI/RAG

Gemini digunakan sebagai generator berdasarkan retrieved evidence. Tidak boleh ada fabricated source/citation/page/chunk.

## Completion

Sebelum menyatakan selesai:

- jalankan build/typecheck/test yang relevan;
- periksa authorization;
- periksa migration/API contract;
- jelaskan file yang berubah dan known limitation.
