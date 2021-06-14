import './header.css';

import { menuItem } from '../../helpers/menu';

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-header--heading">
        <a href="https://karencumlat.com/">Karen Cumlat</a>
      </h1>

      <nav className="app-nav">
        {menuItem.map((i) => {
          return i.item === 'contact' ? (
            <a className="app-nav--item contact" href={i.link} key={i.item}>
              {i.item}
            </a>
          ) : i.link !== '' ? (
            <a className="app-nav--item" href={i.link} key={i.item}>
              {i.item}
            </a>
          ) : (
            <a className="app-nav--item" href={`#${i.item}`} key={i.item}>
              {i.item}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
