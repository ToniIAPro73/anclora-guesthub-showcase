const CELLS = [
  { label: 'Producto', value: 'Anclora GuestHub' },
  { label: 'Familia', value: 'Premium' },
  { label: 'Vertical', value: 'Hospitality Compliance / Travel Documentation' },
  { label: 'Estado', value: 'Pre-MVP / Validación controlada' },
  { label: 'Nivel de riesgo', value: 'Alto por tratamiento de datos personales', risk: true },
  {
    label: 'Uso previsto',
    value: 'Preparación, validación y exportación revisable de XML a partir de datos de huéspedes/reservas.',
  },
];

export default function Maturity() {
  return (
    <section className="container">
      <div className="section-head">
        <span className="eyebrow">Product maturity</span>
        <h2>Clasificación del producto</h2>
      </div>
      <div className="maturity-panel">
        <p className="maturity-lede">
          Anclora GuestHub es una herramienta Premium en fase de validación
          controlada para preparar, revisar y exportar datos estructurados de
          huéspedes y reservas en formato XML. No sustituye el criterio legal
          ni garantiza por sí sola el cumplimiento normativo — texto tomado
          literalmente del panel de clasificación que la propia aplicación
          muestra en su dashboard.
        </p>
        <div className="maturity-grid">
          {CELLS.map((cell) => (
            <div className={`maturity-cell${cell.risk ? ' risk' : ''}`} key={cell.label}>
              <div className="label">{cell.label}</div>
              <div className="value">{cell.value}</div>
            </div>
          ))}
          <div className="maturity-cell">
            <div className="label">Uso no previsto</div>
            <div className="value">
              Asesoramiento legal, envío oficial automatizado no implementado,
              custodia indefinida de datos personales.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
