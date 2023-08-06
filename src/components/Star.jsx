import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<FaStar key={`filled-${i}`} />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" />);
  }

  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} />);
  }

  return <div className='flex gap-[3px] star'>{stars}</div>;
};

export default StarRating;
