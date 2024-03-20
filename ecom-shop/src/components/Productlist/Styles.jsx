
import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledLink = styled(Link)`
  text-decoration: none;
`;

// Styled component for produktkort
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Styled component for produktbilde
export const ProductImage = styled.img`
  width: 200px;
  height: 200px; /* Sett maksimal bredde for bildet */
  object-fit: cover; /* Automatisk høyde basert på proporsjoner */
  margin-bottom: 10px;
`;

// Styled component for produktoverskrift
export const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  color: black;
`;

// Styled component for rutenettcontainer
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)); // Four columns with equal width
  gap: 20px; // Mellomrom mellom produktkortene
  margin: 0px 15px;
  overflow-x: hidden; /* Hide horizontal overflow */
`;


export const Button = styled.button`
padding: 7px 16px;
background-color: rgb(125, 39, 39);
color: white;
cursor: pointer;
border: medium;
border-radius: 4px;
font-size: 12px;

&:hover{
  background-color: rgb(134, 91, 91);
}
`;