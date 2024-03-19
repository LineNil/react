// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyle } from './Styles';

function Nav() {

  return (
    <NavStyle>
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link> 
        </li>
      </ul>
    </NavStyle>
  );
}

export default Nav;
