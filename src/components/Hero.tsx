export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-badges">
        <span className="badge-pill accent">Premium</span>
        <span className="badge-pill">Pre-MVP · Piloto controlado</span>
        <span className="badge-pill">Hospitality Compliance</span>
      </div>
      <h1>
        Gestión de huéspedes, check-in y operación de alquiler vacacional
      </h1>
      <p className="hero-tagline">
        Anclora GuestHub transforma hojas de cálculo de reservas de alojamiento en
        ficheros XML normalizados, por reserva, listos para el flujo de reporte
        requerido por SES.HOSPEDAJES — con revisión guiada y enmascarado de datos
        personales por defecto.
      </p>
      <div className="hero-note">
        <strong>Case study de portfolio.</strong> Este repositorio documenta el
        producto real (README, manual de usuario y capturas del propio piloto
        controlado), sin exponer código operativo, credenciales ni datos de
        huéspedes reales.
      </div>
      <div className="cta-row">
        <a className="btn btn-primary" href="#screenshots">
          Ver capturas reales
        </a>
        <a
          className="btn btn-secondary"
          href="https://github.com/ToniIAPro73/anclora-guesthub-showcase"
        >
          Repositorio en GitHub
        </a>
      </div>
    </section>
  );
}
