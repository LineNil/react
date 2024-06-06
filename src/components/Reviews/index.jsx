import React from "react";
import {ReviewsContainer, ReviewsTitle, ReviewsList, ReviewItem, ReviewUsername, ReviewRating, ReviewDescription } from "./styles";

function Reviews({ reviews }) {
  return(
    <ReviewsContainer>
      <ReviewsTitle>Reviews:</ReviewsTitle>
      <ReviewsList>
        {reviews.map((review) => (
          <ReviewItem  key={review.id}>
            <ReviewUsername>Username: {review.username}</ReviewUsername>
            <ReviewRating>Rating: {review.rating}</ReviewRating>
            <ReviewDescription>Description: {review.description}</ReviewDescription>
          </ReviewItem >
        ))}
      </ReviewsList>
    </ReviewsContainer>
  );
}

export default Reviews;