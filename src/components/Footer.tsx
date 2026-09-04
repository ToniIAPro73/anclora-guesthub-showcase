export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-brand">
          Portfolio Showcase ·{' '}
          <a href="https://github.com/ToniIAPro73/anclora-guesthub-showcase">
            github.com/ToniIAPro73/anclora-guesthub-showcase
          </a>
        </p>
        <p className="footer-disclaimer">
          Case study de portfolio con capturas reales del piloto controlado y
          datos ficticios/sintéticos. No contiene código operativo completo,
          credenciales ni datos de huéspedes reales.
        </p>
        <p className="footer-disclaimer" lang="en">
          Portfolio case study with real screenshots from the controlled pilot
          and fictional/synthetic data. It does not contain the complete
          operational codebase, credentials, or real guest data.
        </p>
      </div>
    </footer>
  );
}
