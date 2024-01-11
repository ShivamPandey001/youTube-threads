import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () =>{
    dispatch(toggleMenu());
  } 
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="col-span-1 flex">
        <img
          onClick={() => handleToggleMenu()}
          className="h-10 py-2 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsc4XPNLoMWDMRnPN7Wl_lgqH-e6O9GiLkbqcfJoyDAxMJHDzWRiDdE1RiDbyL5ENB0g&usqp=CAU"
        />
        <a href="/">
          <img
            className="h-10 mx-2"
            alt="youtubeLogo"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          />
        </a>
      </div>
      <div className="col-span-10">
        <input className="w-1/2 px-10 border border-gray-400 p-2 rounded-l-full" type="text"/>
        <button className="py-2 border border-gray-400 bg-gray-100 rounded-r-full px-4">🔍</button>
      </div>
      <div className="col-span-1">
        <img
        className="h-8"
          alt="userIcon"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
