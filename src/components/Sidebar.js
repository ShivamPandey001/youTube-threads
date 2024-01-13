import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  // Early Return
  if(!isMenuOpen) return null;

  return (
    <div className="shadow-lg p-5 w-48 overflow-y-scroll">
      <div className="border-gray-800 border-b-2">
        <ul className="my-2 py-2">
          
          <li className="my-2"> <Link to="/">Home </Link></li>
          
          <li className="my-2">Shorts</li>
          <li className="my-2">Subscriptions</li>
          <li className="my-2">Youtube Music</li>
        </ul>
      </div>
      <div className="border-gray-800 my-2 py-2">
        <h1 className="font-bold border-gray-800 border-b-2">You ➤</h1>
        <ul>
          <li className="my-2">Your Channel</li>
          <li className="my-2">History</li>
          <li className="my-2">Your Videos</li>
          <li className="my-2">Watch Later</li>
        </ul>
      </div>
      <div className="border-gray-800">
        <h1 className="border-gray-800 border-b-2">Explore</h1>
        <ul>
          <li className="my-2">Trending</li>
          <li className="my-2">Shopping</li>
          <li className="my-2">Music</li>
          <li className="my-2">Movies</li>
          <li className="my-2">News</li>
          <li className="my-2">Sports</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
