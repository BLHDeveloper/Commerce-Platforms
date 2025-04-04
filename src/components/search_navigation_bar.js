"use client";

import React from "react";
import Button from "./button";
import SearchIcon from "./SearchIcon";
import Logo from "./logo";

const SearchNavigationBar = () => {
  const handleQuickOrderClick = () => {
    console.log("Quick Order Button Clicked");
  };

  return (
    <div className="flex w-full h-[80px] px-[88px] py-4 justify-between items-center bg-white border border-[#EAECEE]">
      <Logo />
        <SearchIcon />
      <Button onClick={handleQuickOrderClick} label="Quick Order Form" />
    </div>
  );
};

export default SearchNavigationBar;
