import React from 'react';

const Dropdown = ({
  options = [
    { value: "item1", label: "Item 1" },
    { value: "item2", label: "Item 2" },
    { value: "item3", label: "Item 3" },
  ],
  value,
  onChange = () => {}, // Ajout d'un gestionnaire par défaut
  className,
}) => {
  return (
    <>
      <div
        className={`flex w-[368px] py-3 px-4 justify-center items-center gap-2 rounded-lg border border-[#EAECEE] bg-white ${className}`}
      >
        <select
          value={value}
          onChange={onChange} // Assurez-vous que `onChange` est défini
          className="flex-1 text-[14px] font-normal leading-[170%] outline-none bg-transparent appearance-none"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="w-6 h-6 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_2210_56344)">
              <path
                d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"
                fill="#1071FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_2210_56344">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      
    </>
  );
};

export default Dropdown;