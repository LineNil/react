import React from "react";
import Nav from "../Nav/index";
import CartOverlay from "../CartOverlay";
import Logo from "../Logo";
import { LogoStyle } from "../Logo/Styled";

function Header(){
  return(
    <div>
      <LogoStyle>
        <Logo/>
        </LogoStyle>
      <Nav/>
      <CartOverlay/>
      
      </div>
  );
}

export default Header;