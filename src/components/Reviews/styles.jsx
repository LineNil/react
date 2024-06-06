import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  margin: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ReviewsTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #333;
`;

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const ReviewUsername = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
`;

export const ReviewRating = styled.p`
  font-size: 1.2em;
  margin-bottom: 5px;
  color: #ff9900;
`;

export const ReviewDescription = styled.p`
  font-size: 1em;
  color: #666;
`;