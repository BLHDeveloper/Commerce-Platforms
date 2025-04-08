import React from "react";

const Button = ({ onClick, label, className, disabled, active }) => {
  return (
    <>
      <button
        className={`flex h-[48px] px-8 py-4 items-center justify-center gap-2.5 rounded-full transition duration-300 ${
          disabled
            ? " border-2 border-[#1071FF] bg-white"
            : active
            ? "bg-[#0E5DC1] text-white"
            : "bg-[#1071FF] hover:bg-[#004796] text-white"
        } ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        <span
          className={`text-base font-medium ${
            disabled ? "text-[#1071FF]" : ""
          }`}
        >
          {label}
        </span>
        <div className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_17_1760)">
              <path
                d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z"
                fill={disabled ? "#1071FF" : "white"} // Modifier la couleur selon l'état
              />
            </g>
            <defs>
              <clipPath id="clip0_17_1760">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>
    </>
  );
};

export default Button;

{
  /*
  comment utiliser le composant Button
  
  <Button
  onClick={() => console.log("Clicked!")}
  label="Cliquez-moi"
  className="custom-class"
  disabled={false} // true pour désactiver
  active={true} // true pour l'état actif/>; */
}
