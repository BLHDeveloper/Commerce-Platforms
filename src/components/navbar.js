"use client";
import React from "react";
import TopNavigationBar from "./top_navigation_bar";
import SearchNavigationBar from "./search_navigation_bar";
import CategoryNavigationBar from "./category_navigation_bar";

const Navbar = () => {
  return (
    <>
      <nav>
        {/* Top Navigation Bar */}
        <TopNavigationBar />
        {/* Search Navigation Bar */}
        <SearchNavigationBar />
        {/* Category Navigation Bar */}
        <CategoryNavigationBar />
      </nav>
    </>
  );
};
export default Navbar;
