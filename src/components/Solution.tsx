export default function Solution() {
  return (
    <section className="container">
      <div className="section-head">
        <span className="eyebrow">Solution</span>
        <h2>Un flujo guiado de importación, revisión y exportación</h2>
        <p>
          GuestHub introduce controles antes de leer el archivo, marca errores
          y avisos frente a las reglas SES antes de generar nada, y bloquea la
          descarga mientras existan incidencias críticas.
        </p>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Necesidad</th>
            <th>Cómo ayuda GuestHub</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Importar reservas</td>
            <td>Lee <code>.xlsx</code> y detecta reserva, alojamiento, pago y viajeros.</td>
          </tr>
          <tr>
            <td>Validar datos</td>
            <td>Marca errores y avisos antes de generar XML.</td>
          </tr>
          <tr>
            <td>Corregir campos</td>
            <td>Permite completar campos SES obligatorios desde revisión guiada.</td>
          </tr>
          <tr>
            <td>Preparar XML</td>
            <td>Genera una vista visual y una vista técnica revisable.</td>
          </tr>
          <tr>
            <td>Probar SES</td>
            <td>Incluye validación local y acciones asistidas de preproducción.</td>
          </tr>
          <tr>
            <td>Revisar historial</td>
            <td>Guarda reservas aisladas por usuario cuando la persistencia está activa.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
