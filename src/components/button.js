import React from "react";

const Button = ({ onClick, label, className, disabled, active }) => {
  return (
    <>
      <button
        className={`flex h-[48px] px-8 py-4 items-center justify-center gap-2.5 rounded-full transition duration-300 ${
          disabled
            ? "bg-[#CFD2D5] text-gray-500 cursor-not-allowed"
            : active
            ? "bg-[#0E5DC1] text-white"
            : "bg-[#1071FF] hover:bg-[#004796] text-white"
        } ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-base font-medium">{label}</span>
      </button>
    </>
  );
};

export default Button;


{/*
  comment utiliser le composant Button
  
  <Button
  onClick={() => console.log("Clicked!")}
  label="Cliquez-moi"
  className="custom-class"
  disabled={false} // true pour désactiver
  active={true} // true pour l'état actif/>; */}