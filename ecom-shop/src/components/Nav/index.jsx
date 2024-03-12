// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/products">Produkter</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link> {/* Legg til lenken til kontakt-siden */}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
