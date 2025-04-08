import React from 'react';

const Checkbox = () => {
    return (
      <>
        <label className="flex w-[301px] items-center gap-[8px]">
          <input
            type="checkbox"
            className="hidden peer"
            id="data-management-checkbox"
          />
    
          <svg
            className="w-4 h-4 border rounded  stroke-[#ffffff]   peer-checked:bg-[#1071FF] border-[#1071FF] bg-white"
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
          <span className="text-sm text-[#0C0C0C]">
            I accept{" "}
            <a href="#" className="text-[#1071FF] ">
              the personal data management.
            </a>
          </span>
        </label>
      </>
    );
};


export default Checkbox;