const STACK = [
  { area: 'Framework', tech: 'Next.js, React' },
  { area: 'Base de datos', tech: 'Prisma' },
  { area: 'Procesado de datos', tech: 'ExcelJS, fast-xml-parser, JSZip' },
  { area: 'Almacenamiento', tech: 'Vercel Blob' },
  { area: 'Email', tech: 'Resend' },
  { area: 'Testing', tech: 'Vitest, Testing Library, Jest DOM' },
];

const MODULES = [
  { module: 'lib/excel', responsibility: 'Parseo defensivo del Excel de reserva' },
  { module: 'lib/xml', responsibility: 'Construcción y serialización del XML SES' },
  { module: 'lib/ses', responsibility: 'Validación local y acciones de preproducción' },
  { module: 'lib/ine · lib/municipios', responsibility: 'Resolución de códigos municipales INE' },
  { module: 'lib/privacy · lib/security', responsibility: 'Enmascarado, RBAC y controles de acceso' },
  { module: 'lib/storage', responsibility: 'Persistencia de reservas en Vercel Blob' },
  { module: 'lib/email · lib/email-templates', responsibility: 'Notificaciones vía Resend' },
];

export default function Architecture() {
  return (
    <section className="container">
      <div className="section-head">
        <span className="eyebrow">Architecture · Stack</span>
        <h2>De la subida del Excel al XML consolidado</h2>
      </div>
      <div className="arch-diagram" role="img" aria-label="Diagrama de flujo: Excel de reserva a XML consolidado">
{`Excel de reserva (.xlsx)
        │
        ▼
Parseo y detección (ExcelJS)
        │
        ▼
Validación y revisión guiada (reglas SES)
        │
        ▼
Generación de XML (fast-xml-parser)
        │
        ▼
Acciones SES asistidas (preproducción)
        │
        ▼
Dashboard consolidado (aislado por usuario)`}
      </div>
      <div className="grid grid-2" style={{ marginTop: '1.75rem' }}>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Área</th>
                <th>Tecnología</th>
              </tr>
            </thead>
            <tbody>
              {STACK.map((row) => (
                <tr key={row.area}>
                  <td>{row.area}</td>
                  <td>{row.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Módulo de dominio</th>
                <th>Responsabilidad</th>
              </tr>
            </thead>
            <tbody>
              {MODULES.map((row) => (
                <tr key={row.module}>
                  <td>{row.module}</td>
                  <td>{row.responsibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
