export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <div className="brand">
          <img src="/brand/anclora-guesthub.png" alt="Anclora GuestHub" />
          <span className="brand-name">Anclora GuestHub</span>
          <span className="header-badge">Case study de portfolio</span>
        </div>
        <a
          className="header-link"
          href="https://github.com/ToniIAPro73/anclora-guesthub-showcase"
        >
          github.com/ToniIAPro73/anclora-guesthub-showcase
        </a>
      </div>
    </header>
  );
}
