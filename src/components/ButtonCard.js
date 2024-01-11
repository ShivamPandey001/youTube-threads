import React from "react";

const ButtonCard = ({name}) => {
  return (
    <div>
      <button className="m-2 px-5 bg-gray-200 rounded-lg py-2">{name}</button>
    </div>
  );
};

export default ButtonCard;
