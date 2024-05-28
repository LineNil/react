
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
  border-radius: 8px;
  transition: transform 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.29) 0px 2px 8px;

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
  background-color: rgba(202, 104, 44, 0.61);
  color: black;
  cursor: pointer;
  border: medium;
  border-radius: 4px;
  font-size: 12px;

  &:hover,
  &:active {
    background-color: rgb(202, 104, 44);    color: #fff;
    border-color: #d4940b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(237, 171, 13, 0.5);
  }
`;

export const ViewButton = styled(Link)`
padding: 7px 16px;
  background-color: rgba(202, 104, 44, 0.61);
  color: black;
  cursor: pointer;
  border: medium;
  border-radius: 4px;
  font-size: 12px;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover,
  &:active {
    background-color: rgb(202, 104, 44);    
    color: #fff;
    border-color: #d4940b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(237, 171, 13, 0.5);
  }
`;


