import React from "react";
import profile from "../../images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 mx-4 border-b-2">
      <h1 className="text-4xl font-bold text-blue-700">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
