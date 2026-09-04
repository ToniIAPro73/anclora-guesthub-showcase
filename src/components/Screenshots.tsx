const SHOTS = [
  {
    src: '/screenshots/dashboard.png',
    title: 'Dashboard y clasificación del producto',
    caption: 'Estado real de piloto controlado, mostrado por la propia aplicación.',
  },
  {
    src: '/screenshots/import.png',
    title: 'Importación con consentimiento informado',
    caption: 'Confirmaciones obligatorias antes de subir el Excel de la reserva.',
  },
  {
    src: '/screenshots/xml.png',
    title: 'XML generado, datos enmascarados',
    caption: 'Vista visual del XML con IBAN y documento enmascarados por defecto.',
  },
  {
    src: '/screenshots/privacy-panel.png',
    title: 'Panel de privacidad y pre-check-in',
    caption: 'Modo temporal activo: controles explícitos sobre qué ocurre con los datos.',
  },
];

export default function Screenshots() {
  return (
    <section className="container" id="screenshots">
      <div className="section-head">
        <span className="eyebrow">Screenshots</span>
        <h2>Capturas reales del piloto controlado</h2>
        <p>
          Extraídas del manual de usuario oficial de GuestHub. Los datos
          visibles son sintéticos o de demostración (cuenta{' '}
          <code>demo@anclora.local</code>, reserva <code>DEMO-2026-0001</code>);
          nunca huéspedes ni reservas reales.
        </p>
      </div>
      <div className="screens-grid">
        {SHOTS.map((shot) => (
          <figure className="screen-card" key={shot.src}>
            <img src={shot.src} alt={shot.title} loading="lazy" />
            <figcaption>
              <strong>{shot.title}</strong>
              <span>{shot.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="screens-note">
        Fuente: <code>docs/manual/screenshots/</code> del repositorio operativo de Anclora GuestHub.
      </p>
    </section>
  );
}
