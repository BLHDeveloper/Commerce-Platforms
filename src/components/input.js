import React, { useState } from "react";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  defaultValue,
  className,
  Label,
  info,
  status = "default",
}) => {
  const [isFocused, setIsFocused] = useState(false); // État pour gérer le focus

  const borderColor = isFocused
    ? "#1071FF" // Bordure bleue si actif
    : status === "Error"
    ? "#F52F2F"
    : status === "Success"
    ? "#00893A"
    : "#EAECEE";

  const infoColor =
    status === "Error"
      ? "#F52F2F"
      : status === "Success"
      ? "#00893A"
      : "#1071FF";

  return (
    <>
      <div className={`flex flex-col items-start gap-1 shrink-0 ${className}`}>
        <label className="text-[#434447] text-sm font-normal leading-[170%] self-stretch">
          {Label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          onFocus={() => setIsFocused(true)} // Détecte le focus
          onBlur={() => setIsFocused(false)} // Détecte la perte de focus
          className={`flex py-3 px-4 items-center gap-2 flex-[1_0_0] self-stretch rounded-lg border bg-white focus:outline-none`}
          style={{ borderColor }} // Application de la couleur de bordure
        />
        <span
          className="text-sm font-normal leading-[170%] self-stretch text-[#1071FF]"
          style={{ color: infoColor }} // Application de la couleur du texte
        >
          {info}
        </span>
      </div>
    </>
  );
};

export default Input;
