<div align="center">
  <img src="assets/brand/anclora-guesthub.webp" alt="Anclora GuestHub" width="120" />

  # Anclora GuestHub

  **Gestión de huéspedes, check-in y operación de alquiler vacacional — case study de portfolio**

  `Next.js` · `React` · `TypeScript` · `Prisma` · `ExcelJS` · `fast-xml-parser` · `Vercel Blob`

  [English version → README.en.md](README.en.md)
</div>

---

> [!IMPORTANT]
> Este repositorio es una versión reducida para portfolio profesional.
> No contiene el código fuente operativo, datos reales de huéspedes,
> reservas reales, credenciales, lógica propietaria de integración SES,
> configuración de producción ni documentación interna del proyecto original.

> [!NOTE]
> Los datos visibles en las capturas de este repositorio son sintéticos o de
> demostración (cuenta `demo@anclora.local`, reserva `DEMO-2026-0001`,
> documentos e IBAN enmascarados) y se utilizan exclusivamente con fines de
> demostración profesional.

## Live Demo

Para ejecutar el case study en local:

```bash
npm install && npm run dev
```

Es una página informativa construida con Vite + React + TypeScript sobre el
producto real; no reproduce funcionalidad operativa (no hay parsing de Excel
ni generación de XML reales). Detalle en [docs/demo-architecture.md](docs/demo-architecture.md).

## El problema

Las reservas de alquiler vacacional llegan como hojas de cálculo de formatos
heterogéneos, con datos de huéspedes a menudo incompletos: documento,
nacionalidad, dirección o relación entre viajeros. Convertir esa información
en el XML que exige el flujo de reporte SES.HOSPEDAJES a mano es lento,
propenso a errores y obliga a manipular datos personales sensibles sin
controles claros.

## La solución

Anclora GuestHub introduce un flujo vinculante **importar → revisar →
generar XML → consolidar**: la aplicación lee el Excel de la reserva, marca
errores y avisos frente a las reglas SES, y bloquea la descarga mientras
existan incidencias críticas. Todo el flujo trabaja bajo minimización de
datos: enmascarado por defecto, sin almacenamiento de imágenes de documento
y aislamiento de reservas por usuario.

## At a glance

| Área | Qué demuestra |
|---|---|
| Ingesta documental | Parseo defensivo de reservas en Excel (ExcelJS) |
| Validación de dominio | Estados canónicos Válido / Aviso / Error, sin bloqueos silenciosos |
| Generación de XML | Vista visual y técnica revisable (fast-xml-parser) |
| Privacidad por diseño | Enmascarado por defecto, sin imágenes de DNI, tokens con hash |
| Control de acceso | RBAC, piloto controlado con acceso solo tras revisión manual |
| Frontend engineering | Next.js + React + TypeScript, Tailwind, componentes por dominio |
| Calidad | Vitest, Testing Library, Jest DOM, CI con promoción gated |
| Localización | Aplicación y manual en Español, English y Deutsch |

## Flujo de alto nivel

```text
Excel de reserva (.xlsx)
        ↓
Parseo y detección
        ↓
Validación y revisión guiada
        ↓
Generación de XML (vista visual + técnica)
        ↓
Acciones SES asistidas (preproducción)
        ↓
Dashboard consolidado (aislado por usuario)
```

## Clasificación del producto

> Texto tomado literalmente del panel de clasificación que la propia
> aplicación muestra en su dashboard (ver captura en la sección de screenshots).

| Campo | Valor |
|---|---|
| Familia | Premium |
| Vertical | Hospitality Compliance / Travel Documentation |
| Estado | Pre-MVP / Validación controlada |
| Nivel de riesgo | Alto por tratamiento de datos personales |
| Uso previsto | Preparación, validación y exportación revisable de XML a partir de datos de huéspedes/reservas |
| Uso no previsto | Asesoramiento legal, envío oficial automatizado, custodia indefinida de datos personales |

## Capturas reales

Ver `public/screenshots/` — copiadas verbatim del manual de usuario oficial
del producto (`docs/manual/screenshots/`), con datos sintéticos/demo.

## Arquitectura (producto completo)

| Capa | Responsabilidad |
|---|---|
| Aplicación web | Next.js + React, flujos de importación y revisión |
| Persistencia | Prisma |
| Procesado de datos | ExcelJS, fast-xml-parser, JSZip |
| Almacenamiento | Vercel Blob |
| Email | Resend |
| Módulos de dominio | `lib/ses`, `lib/xml`, `lib/excel`, `lib/ine`, `lib/municipios`, `lib/privacy`, `lib/security`, `lib/storage` |

## Seguridad y privacidad

- Minimización de datos y enmascarado por defecto.
- Sin almacenamiento de imágenes de documento (DNI/pasaporte).
- Enlaces de pre-check-in con token almacenado como hash y expiración.
- Aislamiento de reservas por usuario; RBAC en acciones SES.
- Envío real a producción SES bloqueado por defecto hasta aprobación operativa.

## Estrategia de calidad

- TypeScript estricto, ESLint.
- Vitest, Testing Library, Jest DOM.
- CI con GitHub Actions y promoción gated `development → staging → production`.
- Fixtures sintéticas; nunca datos reales de huéspedes en tests.

## Contenido del repositorio

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

## Alcance y limitaciones

Este repositorio público no incluye detalle de implementación suficiente
para ejecutar, reproducir o desplegar comercialmente Anclora GuestHub.

Demuestra el enfoque del autor en:

- definición de producto en un dominio regulado (compliance de hospedaje);
- modelado de datos personales sensibles con minimización;
- arquitectura full-stack orientada a producto;
- diseño defensivo de software;
- ingeniería de privacidad y control de acceso;
- pruebas automatizadas y pipelines gated.

---

<div align="center">

### Antonio Ballesteros

Desarrollador orientado a producto, especializado en automatización de
negocio, IA aplicada y sistemas trazables.

[![GitHub](https://img.shields.io/badge/GitHub-ToniIAPro73-181717?logo=github)](https://github.com/ToniIAPro73)

</div>
