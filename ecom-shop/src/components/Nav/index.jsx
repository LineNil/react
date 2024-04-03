import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyle } from './Styles';

function Nav() {

  return (
    <NavStyle>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link> 
        </li>
      </ul>
    </NavStyle>
  );
}

export default Nav;
