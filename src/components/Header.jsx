import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Daniele Karoline</h1>
        </div>
        <nav className="nav-menu">
          <a href="mailto:carvalho.danielekr@gmail.com">Me contate</a>
        </nav>
      </div>
    </header>
  );
}