import React, { useState, useEffect, useRef } from "react";

const categories = ["All categories", "Home & Garden", "Motors", "Electronics"]; // Liste des catégories

const SearchIcon = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Par défaut : "All categories"
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="w-[543px] h-[48px] px-4 py-3 items-center gap-2 rounded-lg border border-[#EAECEE] bg-[#FFF] focus-within:border-[#1071FF]"
      ref={dropdownRef}
    >
      <div className="inline-flex items-start gap-[16px]">
        <div
          className="flex items-start gap-[4px] cursor-pointer justify-between"
          onClick={toggleDropdown}
        >
          <div className="flex flex-col w-max justify-center h-[24px] text-[#1071FF] font-normal text-[14px] leading-[170%] ">
            {selectedCategory}
          </div>
          <div className="w-[24px] h-[24px]">
            {isDropdownVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
                  fill="#1071FF"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                  fill="#1071FF"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="w-[1px] h-[24px] bg-[#737B7D]"></div>
        <div className="flex w-[359px] items-start gap-[8px]">
          <div className="w-[24px] h-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#1071FF"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by product or SKU"
            className="flex-1 text-[#737B7D] font-normal text-[14px] leading-[170%]  border-none focus:outline-none"
          />
        </div>
      </div>
      {isDropdownVisible && (
        <div className="w-[152px] h-auto absolute mt-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex p-2 items-center gap-1 border border-[#EAECEE] cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#F6F8FB] text-[#1071FF]"
                  : "bg-[#FFF] text-[#0C0C0C]"
              } ${index === 0 ? "rounded-t-[8px]" : ""} ${
                index === categories.length - 1 ? "rounded-b-[8px]" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <span className="flex text-[14px] font-basier font-normal leading-[170%]">
                {category}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchIcon;
