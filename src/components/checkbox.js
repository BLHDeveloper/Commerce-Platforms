import React, { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [disabled, setDisabled] = useState(false); // Ajout de la variable disabled

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <input
        type="checkbox"
        className="hidden peer"
        id="data-management-checkbox"
        onChange={handleCheckboxChange}
        disabled={disabled} // Utilisation de la variable disabled
      />
      {isChecked === false && disabled ? (
        <div className="w-4 h-4 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="15"
              height="15"
              rx="3.5"
              fill="#EAECEE"
              stroke="#CFD2D5"
            />
          </svg>
        </div>
      ) : isChecked === null ? (
        <div className="w-4 h-4 shrink-0 rounded border border-[#1071FF] bg-[#1071FF]">
          <div className="w-3 h-3 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <g clipPath="url(#clip0_2205_80129)">
                <path d="M9.5 6.5H2.5V5.5H9.5V6.5Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_2205_80129">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      ) : isChecked ? (
        <div className="w-4 h-4 shrink-0 rounded border border-[#1071FF] bg-[#1071FF]">
          <div className="w-3 h-3 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <g clipPath="url(#clip0_2205_80126)">
                <path
                  d="M4.5002 8.1L2.4002 6L1.7002 6.7L4.5002 9.5L10.5002 3.5L9.8002 2.8L4.5002 8.1Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2205_80126">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3.5"
            fill="white"
            stroke="#1071FF"
          />
        </svg>
      )}
    </>
  );
};

export default Checkbox;
