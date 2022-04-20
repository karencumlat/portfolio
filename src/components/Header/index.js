import { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { menuItem } from '../../helpers/menu';

function Header() {
  const [active, setActive] = useState('');
  return (
    <header className="app-header">
      <h1 className="app-header--heading">
        <a href="/">karencumlat/ {active}</a>
      </h1>

      <nav className="app-nav">
        {menuItem.map((i) => {
          return i.item === 'contact' ? (
            <a className="app-nav--item" href={i.link} key={i.item}>
              {i.item}
            </a>
          ) : (
            <Link
              to={`/${i.item}`}
              className="app-nav--item"
              onClick={() => setActive(i.item)}
              key={i.item}
            >
              {i.item}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
