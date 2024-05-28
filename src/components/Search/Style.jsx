import styled from "styled-components";

export const SearchForm = styled.form`
display: flex; 
justify-content: center;
margin-bottom: 20px;
height: 25px;
margin-left: 15px;

`;

export const SearchButton = styled.button`
padding: 0px 16px;
  background-color: rgb(255, 156, 66);
  color: black;
  cursor: pointer;
  border: medium;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 10px;

  &:hover,
  &:active {
    background-color: rgb(255, 121, 0);
    color: #fff;
    border-color: #d4940b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(237, 171, 13, 0.5);
  }
`;