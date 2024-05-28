import React from "react";
import Nav from "../Nav/index";

import Logo from "../Logo";
import { LogoLink } from "../Logo/Styled";

function Header(){
  return(
    <div>
      <LogoLink>
        <Logo/>
        </LogoLink>
      <Nav/>
      
      
      </div>
  );
}

export default Header;