import React from "react";

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="w-44 text-xs flex flex-auto flex-col relative">
      {badgeText && (
        <div className="absolute top-2 left-2 bg-white py-1 px-2 rounded-sm font-bold">
          {badgeText}
        </div>
      )}
      <img
        src={`/assets/${props.coverImg}`}
        alt="cover"
        className="rounded-lg mb-2 h-80 object-cover"
      />
      <div className="flex items-center">
        <img src="/assets/Star.png" alt="star" className="h-3" />
        <span>{props.stats.rating}</span>
        <span className="text-dark-gray">({props.stats.reviewCount}) • </span>
        <span className="text-dark-gray">{props.location}</span>
      </div>
      <p className="overflow-hidden text-ellipsis">{props.title}</p>
      <p className="mt-auto">
        <span className="font-bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
