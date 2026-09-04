export default function Problem() {
  return (
    <section className="container">
      <div className="section-head">
        <span className="eyebrow">Problem</span>
        <h2>El reporte de hospedaje parte de datos que no están listos</h2>
        <p>
          Las reservas de alquiler vacacional llegan como hojas de cálculo de
          formatos heterogéneos, con datos de huéspedes incompletos o
          inconsistentes: documento, nacionalidad, dirección o relación entre
          viajeros. Convertir esa información en el XML que exige
          SES.HOSPEDAJES a mano es lento, propenso a errores y obliga a
          manipular información personal sensible sin controles claros.
        </p>
      </div>
      <div className="grid grid-2">
        <div className="card">
          <h3>Datos heterogéneos y parciales</h3>
          <p>
            Cada exportación de reserva puede faltarle el código de municipio
            INE, el soporte del documento o el sexo/relación conforme a
            catálogos MIR.
          </p>
        </div>
        <div className="card">
          <h3>Riesgo operativo con PII</h3>
          <p>
            Trabajar con documento, nacimiento y contacto de huéspedes sin
            enmascarado ni trazabilidad aumenta la superficie de exposición de
            datos personales.
          </p>
        </div>
      </div>
    </section>
  );
}
