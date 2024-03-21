import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px; /* Add padding for better spacing */

  @media screen and (max-width: 768px) {
    padding: 0; /* Remove padding on smaller screens */
    text-align: center;
  }
`;

export const ReviewsContainer = styled.div`
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 10px; /* Reduce top margin on smaller screens */
  }
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

  &:hover {
    background-color: rgb(134, 91, 91);
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px; /* Adjust padding on smaller screens */
    font-size: 12px; /* Adjust font size on smaller screens */
  }
`;

export const NoReviews = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 16px; /* Adjust font size on smaller screens */
  }
`;
