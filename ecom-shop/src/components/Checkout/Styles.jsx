import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const Price = styled.p`
  margin-bottom: 5px;
`;

export const Header = styled.h1`
text-align: center;
`;

export const CartItemCard = styled.div`

`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 20px; /* Legg til ønsket mellomrom mellom bildet og teksten */
`;

export const Total = styled.h2`
  margin-top: 20px; /* Legg til mellomrom mellom kortene og totalsummen */
`;

export const Checkout = styled(Link)`
padding: 13px 105px;
background-color: rgb(125, 39, 39);
color: white;
cursor: pointer;
border: medium;
border-radius: 4px;
font-size: 14px;
margin-top: 20px;
text-decoration: none;

&:hover {
  background-color: rgb(134, 91, 91);
}


`;