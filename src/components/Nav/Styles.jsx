import styled from 'styled-components';

export const NavStyle = styled.nav`
ul{
  list-style-type: none;
  display: flex;
  font-size: 15px;
  gap: 20px;
  padding: 0px 0px 25px 30px;
  position: relative;}


a{
  text-decoration: none;
  color: black;
}

a: hover{
  text-decoration: underline;
  color: rgb(125, 39, 39);
}
`;
