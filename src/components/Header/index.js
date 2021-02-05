import './header.css';

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-header--heading">
        <a href="https://karencumlat.com/">
          Karen Cumlat — UI Developer & Digital Artist
        </a>
      </h1>

      <nav className="app-nav">
        <a className="app-nav--item" href="#work">
          work
        </a>
        <a className="app-nav--item" href="#about">
          about
        </a>
        <a
          className="app-nav--item"
          href="https://drive.google.com/file/d/12x40Wbz0ZUYKdRUr1rbqRlpj_TjDIoZ4/view?usp=sharing"
        >
          resume
        </a>
        <a className="app-nav--item" href="mailto:karencumlat@gmail.com">
          say hello
        </a>
      </nav>
    </header>
  );
}

export default Header;
