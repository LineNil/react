import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SuccessContent = styled.div`
  text-align: center;
`;

export const Message = styled.p`
font-size: 20px;
`;

export const ProductsLink = styled(Link)`
padding: 10px 105px;
background-color: rgb(125, 39, 39);
color: white;
cursor: pointer;
border: medium;
border-radius: 4px;
font-size: 18px;margin-top: 20px;
text-decoration: none;

&:hover {
  background-color: rgb(134, 91, 91);
}
`;