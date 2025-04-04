import React from "react";
import Badge from "@mui/material/Badge";

const DropdownItem = ({ label }) => (
  <div className="flex items-center gap-1">
    <div className="text-[#0C0C0C] text-sm font-normal leading-[170%]">
      {label}
    </div>
    <div className="w-6 h-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
          fill="#0C0C0C"
        />
      </svg>
    </div>
  </div>
);
const ContactInfo = ({ icon, text, textColor = "#1071FF" }) => (
  <div className="flex items-center gap-2">
    <div className="w-5 h-5">
      <div className="w-[24px] h-[24px] shrink-0">{icon}</div>
    </div>
    <div
      className={`flex w-full h-[30px] flex-col justify-center text-sm font-semibold leading-[170%]`}
      style={{ color: textColor }}
    >
      {text}
    </div>
  </div>
);

const Divider = () => <div className="w-[1px] h-[28px] bg-[#434447]"></div>;

const BadgeInfo = ({ icon, badgeContent, text }) => (
  <div className="flex items-center gap-4">
    <div className="w-[24px] h-[24px] shrink-0">
      <Badge badgeContent={badgeContent} color="error">
        {icon}
      </Badge>
    </div>
    <div className="text-[#0C0C0C] text-[14px] font-normal leading-[170%]">
      {text}
    </div>
  </div>
);

const UserInfo = ({ avatar, name, dropdownIcon }) => (
  <div className="flex justify-end items-start gap-2">
    <div className="w-[24px] h-[24px]">{avatar}</div>
    <p className="text-[#0C0C0C] text-[14px] font-normal leading-[170%]">
      {name}
    </p>
    <div className="w-[24px] h-[24px]">{dropdownIcon}</div>
  </div>
);

const TopNavigationBar = () => {
  const dropdownItems = [
    { label: "Country: Sweden" },
    { label: "Language: Svenska" },
    { label: "Currency: $" },
  ];
  return (
    <>
      <div className="flex w-full h-[48px] px-[88px] py-2 justify-between items-center bg-[#F6F8FB]">
        {/* left bar */}
        <div className="flex items-start gap-4">
          {dropdownItems.map((item, index) => (
            <DropdownItem key={index} label={item.label} />
          ))}
        </div>
        {/* right bar */}
        <div className="flex justify-end items-center gap-2">
          {/* Contact Info */}
          <ContactInfo
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.55 2.16667C12.5 2.90833 12.375 3.63333 12.175 4.325L13.175 5.325C13.5167 4.325 13.7333 3.26667 13.8083 2.16667H12.55V2.16667ZM4.33333 12.1833C3.625 12.3833 2.9 12.5083 2.16667 12.5583V13.8C3.26667 13.725 4.325 13.5083 5.33333 13.175L4.33333 12.1833ZM11.75 0.5H14.6667C15.125 0.5 15.5 0.875 15.5 1.33333C15.5 9.15833 9.15833 15.5 1.33333 15.5C0.875 15.5 0.5 15.125 0.5 14.6667V11.7583C0.5 11.3 0.875 10.925 1.33333 10.925C2.36667 10.925 3.375 10.7583 4.30833 10.45C4.39167 10.4167 4.48333 10.4083 4.56667 10.4083C4.78333 10.4083 4.99167 10.4917 5.15833 10.65L6.99167 12.4833C9.35 11.275 11.2833 9.35 12.4833 6.99167L10.65 5.15833C10.4167 4.925 10.35 4.6 10.4417 4.30833C10.75 3.375 10.9167 2.375 10.9167 1.33333C10.9167 0.875 11.2917 0.5 11.75 0.5Z"
                  fill="#1071FF"
                />
              </svg>
            }
            text="+32 (0) 15 28 76 67"
          />
          <Divider />
          {/* Messages */}
          <BadgeInfo
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                  fill="#0C0C0C"
                />
              </svg>
            }
            badgeContent={12}
            text="Messages"
          />
          <Divider />
          {/* User Info */}
          <UserInfo
            avatar={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z"
                  fill="#0C0C0C"
                />
              </svg>
            }
            name="Username Surname"
            dropdownIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
                  fill="#0C0C0C"
                />
              </svg>
            }
          />
        </div>
      </div>
    </>
  );
};

export default TopNavigationBar;
