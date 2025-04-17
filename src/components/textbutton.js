import React from "react";

const Icon = ({ direction, color, hoverColor, disabled, customSvg }) => (
  <div className="w-6 h-6">
    {customSvg || (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={color}
        className={!disabled ? `group-hover:fill-[${hoverColor}]` : ""}
      >
        <path
          d={
            direction === "left"
              ? "M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
              : "M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
          }
        />
      </svg>
    )}
  </div>
);

const TextButton = ({
  onClick = () => {},
  linkText,
  active,
  disabled,
  variant = "primary",
  icon,
  className,
  customSvg, // Ajout de la prop customSvg
}) => {
  const colors = {
    primary: { text: "#434447", hover: "#0C0C0C", active: "#737B7D" },
    secondary: { text: "#1071FF", hover: "#004796", active: "#0E5DC1" },
    tertiary: { text: "#FFF", hover: "#EAECEE", active: "#E6EFFB" },
  };

  const color = disabled
    ? "#CFD2D5"
    : active
    ? colors[variant].active
    : colors[variant].text;

  const hoverColor = disabled ? "" : colors[variant].hover;

  return (
    <button
      className={`inline-flex justify-center items-center gap-1 group ${
        className || ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon === "left" && (
        <Icon
          direction="left"
          color={color}
          hoverColor={hoverColor}
          disabled={disabled}
          customSvg={customSvg} // Passage de customSvg
        />
      )}
      <span
        className={`${
          disabled
            ? "text-[#CFD2D5] cursor-not-allowed"
            : active
            ? `text-[${colors[variant].active}] underline`
            : `text-[${colors[variant].text}] group-hover:text-[${colors[variant].hover}]`
        } text-[16px] text-base font-normal leading-4`}
      >
        {linkText}
      </span>
      {icon === "right" && (
        <Icon
          direction="right"
          color={color}
          hoverColor={hoverColor}
          disabled={disabled}
          customSvg={customSvg} // Passage de customSvg
        />
      )}
    </button>
  );
};

export default TextButton;
