import React from "react";

function Reviews({ reviews }) {
  return(
    <div>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Username: {review.username}</p>
            <p>Rating: {review.rating}</p>
            <p>Description: {review.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;