import "./header.css";

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-header--heading">
        <a href="https://karencumlat.ca/">
          Karen Cumlat — Digital Artist & Front End Developer
        </a>
      </h1>

      <nav className="app-nav">
        <a className="app-nav--item" href="#app-work">
          work
        </a>
        <a className="app-nav--item" href="#app-about">
          about
        </a>
        <a
          className="app-nav--item"
          href="https://karencumlat.ca/files/Karen_Cumlat_Resume.pdf"
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
