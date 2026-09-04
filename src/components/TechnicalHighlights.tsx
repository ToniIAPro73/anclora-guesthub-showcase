export default function TechnicalHighlights() {
  return (
    <section className="container">
      <div className="section-head">
        <span className="eyebrow">Technical highlights</span>
        <h2>Ingeniería de privacidad y calidad</h2>
      </div>
      <div className="grid grid-2">
        <div>
          <h3 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>
            Privacidad por diseño
          </h3>
          <ul className="highlight-list">
            <li><strong>Minimización de datos:</strong> no se almacenan imágenes de DNI/pasaporte.</li>
            <li><strong>Enmascarado por defecto:</strong> documento, IBAN y contacto ocultos salvo revelado explícito.</li>
            <li><strong>Tokens hash:</strong> los enlaces de pre-check-in se almacenan como hash, con expiración.</li>
            <li><strong>Aislamiento por usuario:</strong> cada cuenta ve solo sus propias reservas persistidas.</li>
            <li><strong>RBAC:</strong> las acciones de envío a SES quedan restringidas por rol y fallan de forma segura.</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>
            Calidad e ingeniería de producto
          </h3>
          <ul className="highlight-list">
            <li><strong>Testing:</strong> Vitest + Testing Library + Jest DOM sobre flujos de importación y validación.</li>
            <li><strong>CI/CD gated:</strong> pipeline de GitHub Actions con promoción development → staging → production.</li>
            <li><strong>Trazabilidad:</strong> modelo de estados canónico (Válido / Aviso / Error) sin bloqueos silenciosos.</li>
            <li><strong>Trilingüe:</strong> aplicación y manual de usuario en Español, English y Deutsch.</li>
            <li><strong>Persistencia desacoplada:</strong> Prisma + Vercel Blob, con modo temporal sin almacenamiento por defecto.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
