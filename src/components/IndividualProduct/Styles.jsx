import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;


export const NotificationContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #f8f8f8;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 10px;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.5s forwards;
  animation-delay: ${({ isVisible }) => (isVisible ? '0s' : '2.5s')};
`;

export const NotificationImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Product = styled.div`
font-weight: bold;
`;

export const Price = styled.div`
margin-top: 2px;
`;

export const OriginalPrice = styled.div`
font-size: 12px;
margin-top: 5px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;

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

export const ReviewsContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  flex: 1;


  @media screen and (max-width: 768px) {
    padding: 0; /* Remove padding on smaller screens */
    text-align: center;
  }
`;

export const ProductInfo = styled.div`
margin: 0px 85px 0px 55px;  
display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1;

  @media screen and (max-width: 768px) {
    margin-top: 10px; /* Reduce top margin on smaller screens */
  }
`;

export const Title = styled.h2`
text-align: center;
font-size: 2em;
margin-bottom: 0px;
color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 15px;
  padding: 15px 45px;
  margin-bottom: 55px;
  color: #555;
  text-align: center;
  margin-top: 0px;
`;

export const DiscountContainer = styled.div`
  padding: 15px 45px;
  background-color: #e8f5e9;
`;

export const DiscountedPrice = styled.p`
  font-size: 1.5em;
  margin-bottom: 5px;
  color: #d32f2f;
`;

export const DiscountPercentage = styled.p`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #388e3c;
`;


export const Button = styled.button`
  padding: 13px 105px;
  background-color: rgba(202, 104, 44, 0.61);
  color: black;
  cursor: pointer;
  border: medium;
  border-radius: 4px;
  font-size: 14px;
  margin: 0px auto;
  margin-top: 20px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
margin-top: 60px;

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