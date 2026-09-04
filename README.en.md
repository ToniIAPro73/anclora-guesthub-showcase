<div align="center">
  <img src="assets/brand/anclora-guesthub.webp" alt="Anclora GuestHub" width="120" />

  # Anclora GuestHub

  **Guest management, check-in and vacation rental operations — portfolio case study**

  `Next.js` · `React` · `TypeScript` · `Prisma` · `ExcelJS` · `fast-xml-parser` · `Vercel Blob`

  [Versión en español → README.md](README.md)
</div>

---

> [!IMPORTANT]
> This repository is a reduced professional showcase.
> It does not contain the operational source code, real guest data, real
> reservation data, credentials, proprietary SES integration logic,
> production configuration, or internal documentation from the original
> project.

> [!NOTE]
> Data shown in this repository's screenshots is fictional or demo data
> (account `demo@anclora.local`, reservation `DEMO-2026-0001`, masked
> documents and IBAN) and is used exclusively for professional portfolio
> demonstration purposes.

## Live Demo

To run the case study locally:

```bash
npm install && npm run dev
```

This is an informational page built with Vite + React + TypeScript about the
real product; it does not reproduce operational functionality (no real Excel
parsing or XML generation happens here). Details in
[docs/demo-architecture.md](docs/demo-architecture.md).

## The problem

Vacation rental reservations arrive as spreadsheets in heterogeneous formats,
with guest data that is often incomplete: document, nationality, address or
relationship between travelers. Turning that information into the XML
required by the SES.HOSPEDAJES reporting flow by hand is slow, error-prone,
and requires handling sensitive personal data without clear controls.

## The solution

Anclora GuestHub introduces a binding **import → review → generate XML →
consolidate** flow: the application reads the reservation's Excel file,
flags errors and warnings against SES rules, and blocks the download while
critical issues remain. The whole flow operates under data minimization:
masking by default, no document image storage, and per-user reservation
isolation.

## At a glance

| Area | What it demonstrates |
|---|---|
| Document ingestion | Defensive Excel parsing for reservations (ExcelJS) |
| Domain validation | Canonical Valid / Warning / Error states, no silent failures |
| XML generation | Reviewable visual and technical view (fast-xml-parser) |
| Privacy by design | Masking by default, no document images, hashed tokens |
| Access control | RBAC, controlled pilot with manually reviewed access |
| Frontend engineering | Next.js + React + TypeScript, Tailwind, domain-oriented modules |
| Quality | Vitest, Testing Library, Jest DOM, gated CI |
| Localization | Application and manual in Spanish, English and German |

## High-level flow

```text
Reservation Excel (.xlsx)
        ↓
Parsing and detection
        ↓
Validation and guided review
        ↓
XML generation (visual + technical view)
        ↓
Assisted SES actions (pre-production)
        ↓
Consolidated dashboard (per-user isolated)
```

## Product classification

> Text taken verbatim from the classification panel the application itself
> shows on its dashboard (see the screenshots section).

| Field | Value |
|---|---|
| Family | Premium |
| Vertical | Hospitality Compliance / Travel Documentation |
| Status | Pre-MVP / Controlled validation |
| Risk level | High, due to personal data processing |
| Intended use | Preparation, validation and reviewable export of XML from guest/reservation data |
| Not intended for | Legal advice, automated official submission, indefinite retention of personal data |

## Real screenshots

See `public/screenshots/` — copied verbatim from the product's official
user manual (`docs/manual/screenshots/`), showing synthetic/demo data.

## Architecture (complete product)

| Layer | Responsibility |
|---|---|
| Web application | Next.js + React, import and review workflows |
| Persistence | Prisma |
| Data processing | ExcelJS, fast-xml-parser, JSZip |
| Storage | Vercel Blob |
| Email | Resend |
| Domain modules | `lib/ses`, `lib/xml`, `lib/excel`, `lib/ine`, `lib/municipios`, `lib/privacy`, `lib/security`, `lib/storage` |

## Security and privacy

- Data minimization and masking by default.
- No document image storage (ID/passport).
- Pre-check-in links with hashed tokens and expiration.
- Per-user reservation isolation; RBAC on SES actions.
- Real production SES submission disabled by default until operational approval.

## Quality strategy

- Strict TypeScript, ESLint.
- Vitest, Testing Library, Jest DOM.
- GitHub Actions CI with gated `development → staging → production` promotion.
- Synthetic fixtures; never real guest data in tests.

## Repository contents

```text
anclora-guesthub-showcase/
├── assets/brand/
├── public/
│   ├── brand/
│   └── screenshots/
├── src/
│   ├── components/
│   └── styles/
├── docs/
│   └── demo-architecture.md
├── LICENSE
├── NOTICE.md
└── README.md
```

## Scope and limitations

This public repository does not include enough implementation detail to
run, reproduce or commercially deploy Anclora GuestHub.

It demonstrates the author's approach to:

- product definition in a regulated domain (hospitality compliance);
- sensitive personal-data modelling with minimization;
- product-oriented full-stack architecture;
- defensive software design;
- privacy and access-control engineering;
- automated testing and gated pipelines.

---

<div align="center">

### Antonio Ballesteros

Product-oriented developer focused on business automation, applied AI and
traceable digital systems.

[![GitHub](https://img.shields.io/badge/GitHub-ToniIAPro73-181717?logo=github)](https://github.com/ToniIAPro73)

</div>
