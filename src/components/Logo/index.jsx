import React from "react";
import { LogoLink, LogoImage } from "./Styled";


function Logo(){
  return(
    <div>
        <LogoLink to="/">
          <LogoImage/>
        </LogoLink>
    </div>
  );
}

export default Logo;