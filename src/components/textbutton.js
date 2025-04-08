import React from "react";

const TextButton = ({ onClick = () => {}, linkText, active = false, disabled = false }) => {
  return (
    <>
      <button
        className={`flex justify-end items-center gap-1 group ${
          disabled ? "text-[#CFD2D5] cursor-not-allowed" : active ? "text-[#0E5DC1]" : "text-[#1071FF]"
        }`}
        onClick={() => {
          if (!disabled) {
            console.log("Button clicked");
            onClick();
          }
        }}
        disabled={disabled}
      >
        <span
          className={`${
            disabled ? "text-[#CFD2D5]" : active ? "text-[#0E5DC1]" : "text-[#1071FF]"
          } text-right font-medium text-[16px] leading-[16px] group-hover:text-[#004796]`}
        >
          {linkText}
        </span>
        <div className="w-[24px] h-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_2205_47502)">
              <path
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill={disabled ? "#CFD2D5" : active ? "#0E5DC1" : "#1071FF"}
                className="group-hover:fill-[#004796]"
              />
            </g>
            <defs>
              <clipPath id="clip0_2205_47502">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>
    </>
  );
};

export default TextButton;




