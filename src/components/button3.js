import React from "react";

const Button = ({ onClick, label, className, disabled, active }) => {
  return (
    <>
      <button
        className={`inline-flex h-12 px-8 py-[10px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[30px] bg-white ${
          disabled
            ? "text-[#CFD2D5] cursor-not-allowed"
            : active
            ? "text-[#0E5DC1]"
            : "bg-[#FFF] hover:text-[#004796] text-[#1071FF]"
        } ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-base font-medium ">{label}</span>
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