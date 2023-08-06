import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cardcount }) => {
  return (
     
    Array(cardcount).fill(0).map((item, id) => (
      <div className="card-skeleton  " key={id}>
        <div className="">
          <Skeleton height='400px' />
        </div>

        <div className="">
          <Skeleton count={3} height={30} />
        </div>
      </div>
    ))
  );
};

export default CardSkeleton;
