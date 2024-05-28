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

  &:hover,
  &:active {
    background-color: rgb(89, 36, 36);    
    color: #fff;
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