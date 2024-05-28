import styled from "styled-components";
import Logo from "../Logo/eCom.png";
import { Link } from "react-router-dom";


export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const LogoImage = styled.div`
  background-image: url("${Logo}");
  display: flex;
  height: 50px;
  width: 140px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 20px 0px 0px 20px;
`;
