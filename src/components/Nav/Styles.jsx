import styled from 'styled-components';

export const NavStyle = styled.nav`
ul{
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0px 30%;
  font-size: 15px;
  margin-bottom: 55px;
}


a{
  text-decoration: none;
  color: black;
}

a: hover{
  font-weight: bold;
  color: rgb(125, 39, 39);
}
`;
