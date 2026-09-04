const FEATURES = [
  {
    title: 'Importación y parseo de Excel',
    body: 'Lectura de hojas de reserva (ExcelJS) con detección de alojamiento, contrato, pago y viajeros.',
  },
  {
    title: 'Revisión guiada con estados canónicos',
    body: 'Cada campo queda en estado Válido, Aviso o Error; los errores bloquean la generación de XML.',
  },
  {
    title: 'Generación de XML por reserva',
    body: 'fast-xml-parser produce una vista visual y una vista técnica revisable antes de exportar.',
  },
  {
    title: 'Enmascarado por defecto',
    body: 'Documento, IBAN y contacto se muestran enmascarados salvo revelado explícito en entorno privado.',
  },
  {
    title: 'Acciones SES asistidas',
    body: 'Validación local, simulación de preproducción y consulta de lote/comunicación bajo control de rol.',
  },
  {
    title: 'Pre-check-in temporal',
    body: 'Enlaces con expiración y token almacenado como hash para recoger datos de viajeros sin registro legal.',
  },
  {
    title: 'Dashboard aislado por usuario',
    body: 'Búsqueda por referencia, alojamiento o huésped; descarga de XML por la ruta protegida de la reserva.',
  },
  {
    title: 'Descarga empaquetada en ZIP',
    body: 'JSZip agrupa los XML generados para descarga cuando la operación lo requiere.',
  },
  {
    title: 'Feedback del piloto sin PII',
    body: 'Canal de feedback explícitamente diseñado para no recoger datos de huéspedes ni capturas con PII.',
  },
];

export default function Features() {
  return (
    <section className="container">
      <div className="section-head">
        <span className="eyebrow">Key features</span>
        <h2>Funcionalidades principales</h2>
        <p>Todas verificadas contra el código, el manual de usuario y las capturas del producto.</p>
      </div>
      <div className="grid grid-3">
        {FEATURES.map((feature) => (
          <div className="card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
