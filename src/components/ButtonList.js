import React from "react";
import ButtonCard from "./ButtonCard";

const ButtonList = () => {
  const listOfButtons = [
    "All",
    "Music",
    "Live",
    "Movies",
    "Gaming",
    "Songs",
    "Cricket",
  ];
  return (
    <div className="flex">
      <div className="flex overflow-x-scroll">
        {listOfButtons.map((button) => (
          <ButtonCard key={button} name={button} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
