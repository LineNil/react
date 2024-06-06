import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-top: 45px;
`;

export const SuccessContent = styled.div`
  text-align: center;
`;

export const Message = styled.p`
font-size: 20px;
margin-bottom: 0px;
`;

export const MessageLine2 = styled.p`
margin-bottom: 100px;
`;

export const ProductsLink = styled(Link)`
padding: 10px 105px;
background-color: rgba(202, 104, 44, 0.61);
color: black;
cursor: pointer;
border: medium;
border-radius: 4px;
font-size: 18px;
margin-top: 20px;
text-decoration: none;
transition: background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s;


&:hover {
  background-color: rgb(202, 104, 44);
  color: rgb(255, 255, 255);
  border-color: rgb(212, 148, 11);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 8px;}}
`;