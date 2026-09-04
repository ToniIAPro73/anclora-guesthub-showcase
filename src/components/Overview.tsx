export default function Overview() {
  return (
    <section className="container">
      <div className="section-head">
        <span className="eyebrow">Product overview</span>
        <h2>Qué es Anclora GuestHub</h2>
        <p>
          Gestiona huéspedes, check-in y la operación de alquiler vacacional:
          convierte hojas Excel de reservas de hospedaje en ficheros XML
          individuales por reserva, con validación de datos y flujo de descarga
          controlado. Pensado para simplificar el cumplimiento de reporte de
          alojamiento (SES.HOSPEDAJES) a partir de fuentes de datos habituales
          del sector.
        </p>
      </div>
      <div className="grid grid-3">
        <div className="card">
          <div className="card-icon">01</div>
          <h3>Import → Review → Export</h3>
          <p>
            Flujo vinculante de tres pasos: importar el Excel de la reserva,
            revisar y corregir los datos marcados, generar el XML revisable.
          </p>
        </div>
        <div className="card">
          <div className="card-icon">02</div>
          <h3>Datos sensibles bajo minimización</h3>
          <p>
            Enmascarado por defecto, sin almacenamiento de imágenes de
            documento y aislamiento de reservas por usuario.
          </p>
        </div>
        <div className="card">
          <div className="card-icon">03</div>
          <h3>Piloto controlado, no producción SES</h3>
          <p>
            Acceso solo tras revisión manual. Las acciones de envío real a SES
            permanecen bloqueadas por defecto hasta aprobación operativa.
          </p>
        </div>
      </div>
    </section>
  );
}
