const STEPS = [
  {
    title: 'Importar Excel',
    body: 'Confirmaciones informadas obligatorias, extensión y tamaño validados antes de leer el archivo.',
  },
  {
    title: 'Revisar datos',
    body: 'Tabla de huéspedes con estado por campo; informe CSV de incidencias exportable.',
  },
  {
    title: 'Generar XML',
    body: 'Vista visual y vista técnica. La descarga queda bloqueada si hay incidencias críticas.',
  },
  {
    title: 'Consolidar',
    body: 'La reserva queda disponible en el dashboard, aislada por usuario, para su seguimiento.',
  },
];

export default function Workflow() {
  return (
    <section className="container">
      <div className="section-head">
        <span className="eyebrow">Workflow · How it works</span>
        <h2>El flujo documental de una reserva</h2>
        <p>
          Los cuatro pasos que muestra la propia aplicación en pantalla,
          visibles en las capturas de la sección siguiente.
        </p>
      </div>
      <div className="workflow-steps">
        {STEPS.map((step, index) => (
          <div className="workflow-step" key={step.title}>
            <span className="workflow-step-num">{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
