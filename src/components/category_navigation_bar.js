import React from "react";
import Badge from "@mui/material/Badge";

const CategoryItem = ({ label, hasIcon }) => (
  <div className="flex items-center">
    <div className="text-[#0C0C0C] text-sm font-semibold leading-[170%]">
      {label}
    </div>
    {hasIcon && (
      <div className="w-[24px] h-[24px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_4213_15)">
            <path
              d="M16.5902 8.58984L12.0002 13.1698L7.41024 8.58984L6.00024 9.99984L12.0002 15.9998L18.0002 9.99984L16.5902 8.58984Z"
              fill="#0C0C0C"
            />
          </g>
          <defs>
            <clipPath id="clip0_4213_15">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.000244141)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    )}
  </div>
);

const NavbarItem = ({ label, icon, badgeContent }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-[16px] h-[16px]">
      <Badge badgeContent={badgeContent} color="error">
        {icon}
      </Badge>
    </div>
    <div className="text-[#1071FF] text-[14px] font-semibold leading-[170%]">
      {label}
    </div>
  </div>
);
const CompareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 17 16"
    fill="none"
  >
    <g clipPath="url(#clip0_1_83)">
      <path
        d="M7.5 2H4.16666C3.43333 2 2.83333 2.6 2.83333 3.33333V12.6667C2.83333 13.4 3.43333 14 4.16666 14H7.5V15.3333H8.83333V0.666664H7.5V2ZM7.5 12H4.16666L7.5 8V12ZM13.5 2H10.1667V3.33333H13.5V12L10.1667 8V14H13.5C14.2333 14 14.8333 13.4 14.8333 12.6667V3.33333C14.8333 2.6 14.2333 2 13.5 2Z"
        fill="#1071FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_83">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.833328)"
        />
      </clipPath>
    </defs>
  </svg>
);

const FavoritesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 17 16"
    fill="none"
  >
    <g clipPath="url(#clip0_1_86)">
      <path
        d="M15.1667 6.16L10.3733 5.74667L8.50001 1.33334L6.62668 5.75334L1.83334 6.16L5.47334 9.31334L4.38001 14L8.50001 11.5133L12.62 14L11.5333 9.31334L15.1667 6.16ZM8.50001 10.2667L5.99334 11.78L6.66001 8.92667L4.44668 7.00667L7.36668 6.75334L8.50001 4.06667L9.64001 6.76L12.56 7.01334L10.3467 8.93334L11.0133 11.7867L8.50001 10.2667Z"
        fill="#1071FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_86">
        <rect width="16" height="16" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 17 16"
    fill="none"
  >
    <g clipPath="url(#clip0_1_89)">
      <path
        d="M10.5333 8.66667C11.0333 8.66667 11.4733 8.39334 11.7 7.98L14.0866 3.65334C14.3333 3.21334 14.0133 2.66667 13.5066 2.66667H3.63998L3.01331 1.33334H0.833313V2.66667H2.16665L4.56665 7.72667L3.66665 9.35334C3.17998 10.2467 3.81998 11.3333 4.83331 11.3333H12.8333V10H4.83331L5.56665 8.66667H10.5333ZM4.27331 4H12.3733L10.5333 7.33334H5.85331L4.27331 4ZM4.83331 12C4.09998 12 3.50665 12.6 3.50665 13.3333C3.50665 14.0667 4.09998 14.6667 4.83331 14.6667C5.56665 14.6667 6.16665 14.0667 6.16665 13.3333C6.16665 12.6 5.56665 12 4.83331 12ZM11.5 12C10.7666 12 10.1733 12.6 10.1733 13.3333C10.1733 14.0667 10.7666 14.6667 11.5 14.6667C12.2333 14.6667 12.8333 14.0667 12.8333 13.3333C12.8333 12.6 12.2333 12 11.5 12Z"
        fill="#1071FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_89">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.166656)"
        />
      </clipPath>
    </defs>
  </svg>
);

const CategoryNavigationBar = () => {
  const navbarItems = [
    { label: "COMPARE", icon: <CompareIcon />, badgeContent: 3 },
    { label: "FAVORITES", icon: <FavoritesIcon />, badgeContent: 7 },
    { label: "CART", icon: <CartIcon />, badgeContent: 45 },
  ];
  const categories = [
    { label: "HOME & GARDEN", hasIcon: true },
    { label: "MOTORS", hasIcon: true },
    { label: "ELECTRONICS", hasIcon: false },
    { label: "OFFICE EQUIPMENT", hasIcon: false },
  ];
  return (
    <>
      <div className="flex w-full h-[82px] px-[88px] items-center bg-[#F6F8FB] justify-between">
        <div className="inline-flex items-center gap-[64px]">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              label={category.label}
              hasIcon={category.hasIcon}
            />
          ))}
        </div>
        <div className="flex items-center gap-[32px]">
          {navbarItems.map((item, index) => (
            <NavbarItem
              key={index}
              label={item.label}
              icon={item.icon}
              badgeContent={item.badgeContent}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryNavigationBar;
