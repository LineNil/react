import styled from 'styled-components';

export const Form = styled.form`
  width: 50%;
  margin: auto;
  font-family: Arial, sans-serif;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  input[type='submit'] {
    background-color: rgb(125, 39, 39);
    color: white;
    cursor: pointer;
  }

  p {
    color: red;
    margin-top: -10px;
    margin-bottom: 10px;
  }
`;



export const Message = styled.h4`
    color: black;
    display: flex;
    justify-content: center;
`;
