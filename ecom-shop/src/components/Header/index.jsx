import React from "react";
import Nav from "../Nav/index";

import Logo from "../Logo";
import { LogoStyle } from "../Logo/Styled";

function Header(){
  return(
    <div>
      <LogoStyle>
        <Logo/>
        </LogoStyle>
      <Nav/>
      
      
      </div>
  );
}

export default Header;