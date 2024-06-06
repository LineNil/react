import styled from "styled-components";
import { Link } from "react-router-dom";



export const EmptyCart = styled.p`
margin-bottom: 70px;

`;


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const CartItemCardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%; 
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemTitle = styled.h3`
margin-bottom: 0px;
`;

export const Price = styled.p`
  margin-bottom: 30px;
  margin-top: 0px;
`;

export const Header = styled.h1`
text-align: center;
`;


export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 20px; /* Legg til ønsket mellomrom mellom bildet og teksten */
`;

export const Total = styled.h2`
  margin-top: 20px; /* Legg til mellomrom mellom kortene og totalsummen */
`;

export const CheckoutLink = styled(Link)`
padding: 13px 105px;
background-color: rgba(202, 104, 44, 0.61);
color: black;
cursor: pointer;
border: medium;
border-radius: 4px;
font-size: 14px;
margin-top: 20px;
text-decoration: none;
transition: background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s;
margin-bottom:40px;

&:hover {
  background-color: rgb(202, 104, 44);
  color: rgb(255, 255, 255);
  border-color: rgb(212, 148, 11);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 8px;}
`;