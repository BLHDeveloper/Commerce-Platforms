import React from "react";

const Button = ({ onClick, label, className }) => {
  return (
    <button
      className={`flex h-[48px] px-8 py-4 items-center justify-center gap-2.5 bg-[#1071FF] rounded-full hover:bg-[#0056b3] transition duration-300 ${className}`}
      onClick={onClick}
    >
      <span className="text-white text-base font-medium">{label}</span>
    </button>
  );
};

export default Button;
