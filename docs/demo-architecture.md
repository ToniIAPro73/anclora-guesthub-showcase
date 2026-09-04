# Demo architecture

This repository is an **informational case study**, not a functional replica
of Anclora GuestHub. There is no Excel parsing, no XML generation, no
database and no backend of any kind — the application is a single static
page built with Vite + React + TypeScript, composed of one component per
section (Hero, Overview, Problem, Solution, Features, Workflow, Architecture,
Screenshots, Maturity, Technical highlights).

## Why no interactive demo

Anclora GuestHub processes real personal data belonging to hotel/rental
guests (documents, nationality, contact details) for an official regulatory
report (SES.HOSPEDAJES). Rebuilding even a synthetic interactive replica of
that review flow risks visually blurring the line between "portfolio demo"
and "the real tool that handles guest PII" — a confusion this repository
must never create.

Instead, this case study documents the real product faithfully through:

- the product's own public README (`anclora-guesthub/README.md`);
- its official user manual (`anclora-guesthub/docs/manual/manual-usuario.md`);
- real screenshots from that manual, showing only synthetic/demo data
  (`docs/manual/screenshots/`).

## Content provenance

Every claim in this showcase's copy is traceable to one of the sources
above — no invented users, clients, metrics, revenue or adoption figures.
Where the source product is explicitly a "controlled pilot / pre-MVP", this
showcase states that status as-is (see the Maturity section), rather than
implying a more mature commercial product.

## Stack

Vite 5 + React 18 + TypeScript, no external UI library, plain CSS
(`src/styles/app.css`). Matches the scaffold used by sibling repositories in
this portfolio family (`anclora-shiftimport-showcase`,
`anclora-portfolio-showcase`).
