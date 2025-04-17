import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import Button from "./button";
import TextButton from "./textbutton";
import Input from "./input";
const DropdownItem = ({ label, dynamicContent, isOpen, onClick, onSelect }) => {
  return (
    <div className="inline-flex flex-col items-start gap-1">
      <div className="flex items-center gap-1 cursor-pointer" onClick={onClick}>
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
              d={
                isOpen
                  ? "M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
                  : "M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
              }
              fill="#0C0C0C"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-start absolute mt-6  w-[213px]">
          {dynamicContent.map((item) => (
            <div
              key={item.id}
              className={`flex  w-[213px] p-2 items-center gap-1 ${
                item.id === 1
                  ? "rounded-tl-lg rounded-tr-lg"
                  : item.id === dynamicContent.length
                  ? "rounded-bl-lg rounded-br-lg"
                  : ""
              } border border-[#EAECEE] bg-white cursor-pointer`}
              onClick={() => onSelect(item.content)}
            >
              <div className="text-[#0C0C0C] text-[14px] font-normal leading-[170%] flex-[1_0_0]">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ContactInfo = ({ icon, text, textColor = "#1071FF" }) => (
  <div
    className="flex items-center gap-2 cursor-pointer"
    onClick={() => (window.location.href = `tel:${text.replace(/\s+/g, "")}`)}
  >
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
  <div className="flex items-center gap-2">
    <div className="flex w-[24px] h-[24px] shrink-0">
      <Badge badgeContent={badgeContent} color="error">
        {icon}
      </Badge>
    </div>
    <div className="text-[#0C0C0C] text-[14px] font-normal leading-[170%]">
      {text}
    </div>
  </div>
);

const UserInfo = ({
  avatar,
  name,
  dropdownIcon,
  dynamicContent,
  isOpen,
  onClick,
  onSelect,
  onLogout,
}) => (
  <div className="flex flex-col items-end gap-2">
    <div
      className="flex justify-end items-start gap-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-[24px] h-[24px] shrink-0">{dropdownIcon}</div>
      <p className="text-[#0C0C0C] text-[14px] font-normal leading-[170%]">
        {name}
      </p>
      <div className="w-[24px] h-[24px]">{avatar}</div>
    </div>
    {isOpen && (
      <div className="flex flex-col items-start absolute mt-6 z-1">
        {dynamicContent.map((item) => (
          <div
            key={item.id}
            className={`flex w-[186px] p-2 items-center gap-1 ${
              item.id === 1
                ? "rounded-tl-lg rounded-tr-lg"
                : item.id === dynamicContent.length
                ? "rounded-bl-lg rounded-br-lg"
                : ""
            } border border-[#EAECEE] bg-white cursor-pointer`}
            onClick={() => onSelect(item)}
          >
            <div className="text-[#0C0C0C] text-[14px] font-normal leading-[170%] flex-[1_0_0]">
              {item.content}
            </div>
          </div>
        ))}
        <button
          className="flex w-[186px] p-2 justify-center items-center gap-1 rounded-b-lg border border-[#EAECEE] bg-white hover:bg-[#F5F5F5] cursor-pointer"
          onClick={onLogout}
        >
          <div className="flex-[1_0_0] text-[#737B7D] text-center text-[14px] font-normal leading-[170%] font-[Basier_Square]">
            Log out
          </div>
        </button>
      </div>
    )}
  </div>
);

const TopNavigationBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // État pour la modale d'inscription
  const [email, setEmail] = useState("");
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const [password, setPassword] = useState("");
  const isValidPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const [dropdownItems, setDropdownItems] = useState([
    {
      label: "Country: Sweden",
      dynamicContent: [
        { id: 1, content: "Sweden" },
        { id: 2, content: "Norway" },
        { id: 3, content: "Denmark" },
      ],
    },
    {
      label: "Language: Svenska",
      dynamicContent: [
        { id: 1, content: "Svenska" },
        { id: 2, content: "English" },
        { id: 3, content: "Deutsch" },
      ],
    },
    {
      label: "Currency: $",
      dynamicContent: [
        { id: 1, content: "USD" },
        { id: 2, content: "EUR" },
        { id: 3, content: "SEK" },
      ],
    },
  ]);
  const [userName, setUserName] = useState("Username Surname");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Simule l'état de connexion

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleSelect = (index, content) => {
    const updatedItems = [...dropdownItems];
    const baseLabel = updatedItems[index].label.split(":")[0];
    updatedItems[index].label = `${baseLabel}: ${content}`;
    setDropdownItems(updatedItems);
    setOpenDropdown(null);
  };

  const handleUserLinkClick = (link) => {
    window.location.href = link; // Redirige vers une autre page
  };

  const handleLogout = () => {
    console.log("User logged out"); // Remplacez par la logique de déconnexion réelle
  };

  return (
    <>
      <div className="flex w-full h-[48px] px-[88px] py-2 justify-between items-center bg-[#F6F8FB]">
        {/* left bar */}
        <div className="flex items-start gap-4">
          {dropdownItems.map((item, index) => (
            <DropdownItem
              key={index}
              label={item.label}
              dynamicContent={item.dynamicContent}
              isOpen={openDropdown === index}
              onClick={() => handleDropdownClick(index)}
              onSelect={(content) => handleSelect(index, content)}
            />
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
          {/* User Info or Login/Register */}
          {isUserLoggedIn ? (
            <UserInfo
              avatar={
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d={
                        openDropdown === "user"
                          ? "M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
                          : "M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                      }
                      fill="#0C0C0C"
                    />
                  </svg>
                </div>
              }
              name={userName}
              dropdownIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_906_41589)">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z"
                      fill="#0C0C0C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_906_41589">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              dynamicContent={[
                { id: 1, content: "Dashboard", link: "/dashboard" },
                { id: 2, content: "Profile", link: "/profile" },
                { id: 3, content: "Settings", link: "/settings" },
                { id: 4, content: "Help", link: "/help" },
              ]}
              isOpen={openDropdown === "user"}
              onClick={() => handleDropdownClick("user")}
              onSelect={(content) => handleUserLinkClick(content.link)}
              onLogout={handleLogout}
            />
          ) : (
            <div className="flex items-center gap-2">
              <button
                className="text-right text-[#1071FF] text-[14px] font-semibold leading-[170%]"
                onClick={() => setIsLoginModalOpen(true)} // Ouvre la modale
              >
                LOGIN / REGISTER
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modale de connexion */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          {/* login */}
          <div className="inline-flex flex-col items-center gap-6 px-6 pt-6 pb-16 rounded-lg bg-white">
            {/* Header + Close Icon */}
            <div className="flex flex-col items-end gap-4">
              <div
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsLoginModalOpen(false)} // Ferme la modale
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1985_50219)">
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="#0C0C0C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1985_50219">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <h5 className="text-[#0C0C0C] text-center font-bold text-[20px] leading-[130%] w-[498px] font-basier">
                  Welcome back! Log in
                </h5>
                <p className="text-[#0C0C0C] text-center text-[16px] leading-[24px] font-normal font-[Basier_Square]">
                  Enter your login and password below and complete your order.
                </p>
              </div>
            </div>
            {/* form */}
            <div className="flex flex-col items-end gap-4 w-[373px] ">
              <Input
                type="email"
                className="w-full"
                Label="Login/e-mail"
                info="(e.g., example@domain.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                status={
                  email === ""
                    ? "Default"
                    : isValidEmail(email)
                    ? "Success"
                    : "Error"
                }
              />
              <div className="flex flex-col items-end gap-2 w-[373px]">
                <Input
                  type="password"
                  className="w-full"
                  Label="Password"
                  info="8+ characters (e.g., Abc@1234)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  status={
                    password === ""
                      ? "Default"
                      : isValidPassword(password)
                      ? "Success"
                      : "Error"
                  }
                />
                <TextButton linkText="Forgot password?" variant="secondary" />
              </div>
            </div>
            {/* button */} <Button label="Login" className="w-[198px]" />
            {/*   register link */}
            <div className="flex justify-center items-center gap-2">
              <p className="text-[#0C0C0C] text-right text-[14px] leading-[170%] font-normal font-[Basier_Square]">
                You do not have an account?
              </p>
              <TextButton
                linkText="Register"
                variant="secondary"
                onClick={() => {
                  setIsRegisterModalOpen(true);
                  setIsLoginModalOpen(false);
                }} // Ouvre la modale d'inscription
              />
            </div>
          </div>
        </div>
      )}

      {/* Modale d'inscription */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="inline-flex flex-col items-center gap-6 px-6 pt-6 pb-16 rounded-lg bg-white">
            {/* Header + Close Icon */}
            <div className="flex flex-col items-end gap-4">
              <div
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsRegisterModalOpen(false)} // Ferme la modale
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1985_50219)">
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="#0C0C0C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1985_50219">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <h5 className="text-[#0C0C0C] text-center font-bold text-[20px] leading-[130%] w-[498px] font-basier">
                  Create an account
                </h5>
                <p className="text-[#0C0C0C] text-center text-[16px] leading-[24px] font-normal font-[Basier_Square]">
                  Enter your details below to create a new account.
                </p>
              </div>
            </div>
            {/* form */}
            <div className="flex flex-col items-end gap-4 w-[373px] ">
              <Input
                type="email"
                className="w-full"
                Label="Email"
                info="(e.g., example@domain.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                status={
                  email === ""
                    ? "Default"
                    : isValidEmail(email)
                    ? "Success"
                    : "Error"
                }
              />
              <div className="flex flex-col items-end gap-2 w-[373px]">
                <Input
                  type="password"
                  className="w-full"
                  Label="Password"
                  info="8+ characters (e.g., Abc@1234)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  status={
                    password === ""
                      ? "Default"
                      : isValidPassword(password)
                      ? "Success"
                      : "Error"
                  }
                />
              </div>
            </div>
            {/* button */}
            <Button label="Register" className="w-[198px]" />
            {/* register link */}
            <div className="flex justify-center items-center gap-2">
              <p className="text-[#0C0C0C] text-right text-[14px] leading-[170%] font-normal font-[Basier_Square]">
                You have an account?
              </p>
              <TextButton
                linkText="Login"
                variant="secondary"
                onClick={() => {
                  setIsRegisterModalOpen(false); // Ferme la modale d'inscription
                  setIsLoginModalOpen(true); // Ouvre la modale de connexion
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavigationBar;
