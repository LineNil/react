
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled component for lenker
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
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

// Styled component for produktoverskrift
export const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  color: black;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

// Styled component for rutenettcontainer
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin: 0px 15px;
  overflow-x: hidden;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

// Styled component for knapp
export const Button = styled.button`
  padding: 7px 16px;
  background-color: rgb(125, 39, 39);
  color: white;
  cursor: pointer;
  border: medium;
  border-radius: 4px;
  font-size: 12px;

  &:hover {
    background-color: rgb(134, 91, 91);
  }
`;
