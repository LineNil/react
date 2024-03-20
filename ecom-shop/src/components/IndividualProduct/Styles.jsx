import styled from 'styled-components';

export const ProductContainer = styled.div`
display: flex;
align-items: flex-start;
flex-wrap:wrap;
`;

export const ImageContainer = styled.div`
display: flex;
flex: 1;  /* Use flexbox to center content */
justify-content: center; /* Center content horizontally */
align-items: center; /* Center content vertically */
`;

export const Img = styled.img`
width: 70%;
`;

export const DetailsContainer = styled.div`
flex: 1; /* Allow this container to grow to fill available space */
display: flex; /* Use flexbox to center content */
flex-direction: column; /* Stack children vertically */
justify-content: center; /* Center content horizontally */
align-items: center; /* Center content vertically */

`;

export const ReviewsContainer = styled.div`
margin-top: 20px;
flex-basis: 100%;
margin-top: 50px;
`;



export const Button = styled.button`
padding: 13px 105px;
  background-color: rgb(125, 39, 39);
  color: white;
  cursor: pointer;
  border: medium;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 20px;

&:hover{
  background-color: rgb(134, 91, 91);
}
`;

export const NoReviewes = styled.p`
text-align: center;
font-size: 18px;
  font-weight: bold;

`;