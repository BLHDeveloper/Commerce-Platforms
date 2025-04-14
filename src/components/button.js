import React from "react";

const Button = ({
  onClick,
  label,
  className,
  disabled,
  active,
  variant = "primary",
  icon,
}) => {
  const baseClasses =
    "inline-flex h-12 px-8 py-4 items-center justify-center gap-2.5 rounded-full transition duration-300";

  const secondaryClasses = `bg-white ${
    disabled
      ? "text-[#CFD2D5] cursor-not-allowed"
      : active
      ? "text-[#0E5DC1]"
      : "hover:text-[#004796] text-[#1071FF] group"
  }`;

  const tertiaryClasses = `text-white ${
    disabled
      ? "bg-[#CFD2D5] cursor-not-allowed"
      : active
      ? "bg-[#FF924A]"
      : "bg-[#FF4E00] hover:bg-[#FF7E27]"
  }`;

  const primaryClasses = `text-white ${
    disabled
      ? "bg-[#CFD2D5]  cursor-not-allowed"
      : active
      ? "bg-[#0E5DC1] "
      : "bg-[#1071FF] hover:bg-[#004796] "
  }`;

  const outlineBlueClasses = `border-2  ${
    disabled
      ? "bg-white border-[#CFD2D5] text-[#CFD2D5]  cursor-not-allowed"
      : active
      ? "bg-[#0E5DC1] border-[#0E5DC1] text-white"
      : "bg-white border-[#1071FF] hover:text-white  hover:border-[#004796] hover:bg-[#004796]   text-[#1071FF]  group"
  }`;
  const outlineWhiteClasses = `border-2  ${
    disabled
      ? "border-[#CFD2D5] text-[#CFD2D5]  cursor-not-allowed"
      : active
      ? "bg-[#0E5DC1] border-[#0E5DC1] text-white"
      : "border-white text-white hover:text-white  hover:border-[#004796] hover:bg-[#004796]     group"
  }`;
  const variantClasses =
    variant === "secondary"
      ? secondaryClasses
      : variant === "tertiary"
      ? tertiaryClasses
      : variant === "outlineBlue"
      ? outlineBlueClasses
      : variant === "outlineWhite"
      ? outlineWhiteClasses
      : primaryClasses;

  return (
    <>
      <button
        className={`${baseClasses} ${variantClasses} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {variant === "secondary" ? (
          <>
            {/* icon */}
            {icon === "left" ? (
              <>
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#1071FF"
                  >
                    <g clipPath="url(#clip0_1056_33001)">
                      <path
                        d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                        fill={
                          disabled ? "gray" : active ? "[#0E5DC1]" : "[#1071FF]"
                        }
                        className="group-hover:fill-[#004796]"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1056_33001">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span
                  className={`${
                    disabled
                      ? "text-[#CFD2D5]"
                      : active
                      ? "text-[#0E5DC1]"
                      : "text-[#1071FF]"
                  } text-right font-medium text-[16px] leading-[16px] group-hover:text-[#004796] text-nowrap`}
                >
                  {label}
                </span>
              </>
            ) : icon === "right" ? (
              <>
                <span
                  className={`${
                    disabled
                      ? "text-[#CFD2D5]"
                      : active
                      ? "text-[#0E5DC1]"
                      : "text-[#1071FF]"
                  } text-right font-medium text-[16px] leading-[16px] group-hover:text-[#004796] text-nowrap`}
                >
                  {label}
                </span>
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#1071FF"
                  >
                    <g clipPath="url(#clip0_1085_57467)">
                      <path
                        d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                        fill={
                          disabled ? "gray" : active ? "[#0E5DC1]" : "[#1071FF]"
                        }
                        className="group-hover:fill-[#004796]"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1085_57467">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </>
            ) : (
              <>
                <span className="text-base font-medium text-nowrap">
                  {label}
                </span>
              </>
            )}
          </>
        ) : variant === "tertiary" ? (
          <>
            {/* icon */}
            {icon === "left" ? (
              <>
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1056_32977)">
                      <path
                        d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1056_32977">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-base font-medium text-nowrap">
                  {label}
                </span>
              </>
            ) : icon === "right" ? (
              <>
                <span className="text-base font-medium text-nowrap">
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
                    <g clipPath="url(#clip0_1085_57467)">
                      <path
                        d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1085_57467">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </>
            ) : (
              <>
                <span className="text-base font-medium text-nowrap">
                  {label}
                </span>
              </>
            )}
          </>
        ) : variant === "outlineBlue" ? (
          <>
            {/* icon */}
            {icon === "left" ? (
              <>
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#1071FF"
                  >
                    <g clipPath="url(#clip0_1056_33001)">
                      <path
                        d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                        fill={
                          disabled ? "#CFD2D5" : active ? "white" : "[#1071FF]"
                        }
                        className="group-hover:fill-white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1056_33001">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span
                  className={`${
                    disabled
                      ? "text-[#CFD2D5]"
                      : active
                      ? "text-white"
                      : "text-[#1071FF]"
                  } text-right font-medium text-[16px] leading-[16px] group-hover:text-white text-nowrap`}
                >
                  {label}
                </span>
              </>
            ) : icon === "right" ? (
              <>
                <span
                  className={`${
                    disabled
                      ? "text-[#CFD2D5]"
                      : active
                      ? "text-white"
                      : "text-[#1071FF]"
                  } text-right font-medium text-[16px] leading-[16px] group-hover:text-white text-nowrap`}
                >
                  {label}
                </span>
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#1071FF"
                  >
                    <g clipPath="url(#clip0_1085_57467)">
                      <path
                        d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                        fill={
                          disabled ? "#CFD2D5" : active ? "white" : "[#1071FF]"
                        }
                        className="group-hover:fill-white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1085_57467">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </>
            ) : (
              <>
                <span className="text-base font-medium text-nowrap">
                  {label}
                </span>
              </>
            )}
          </>
        ) : variant === "outlineWhite" ? (
          <>
            {/* icon */}
            {icon === "left" ? (
              <>
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <g clipPath="url(#clip0_1056_33001)">
                      <path
                        d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                        fill={
                          disabled ? "#CFD2D5" : active ? "white" : "[#1071FF]"
                        }
                        className="group-hover:fill-white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1056_33001">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span
                  className={`${
                    disabled
                      ? "text-[#CFD2D5]"
                      : active
                      ? "text-white"
                      : "text-white"
                  } text-right font-medium text-[16px] leading-[16px] group-hover:text-white text-nowrap`}
                >
                  {label}
                </span>
              </>
            ) : icon === "right" ? (
              <>
                <span
                  className={`${
                    disabled
                      ? "text-[#CFD2D5]"
                      : active
                      ? "text-white"
                      : "text-white"
                  } text-right font-medium text-[16px] leading-[16px] group-hover:text-white text-nowrap`}
                >
                  {label}
                </span>
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <g clipPath="url(#clip0_1085_57467)">
                      <path
                        d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                        fill={
                          disabled ? "#CFD2D5" : active ? "white" : "[#1071FF]"
                        }
                        className="group-hover:fill-white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1085_57467">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </>
            ) : (
              <>
                <span className="text-base font-medium text-nowrap">
                  {label}
                </span>
              </>
            )}
          </>
        ) : (
          <>
            {/* icon */}
            {icon === "left" ? (
              <>
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1056_32977)">
                      <path
                        d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1056_32977">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-base font-medium text-nowrap">
                  {label}
                </span>
              </>
            ) : icon === "right" ? (
              <>
                <span className="text-base font-medium text-nowrap">
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
                    <g clipPath="url(#clip0_1085_57467)">
                      <path
                        d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1085_57467">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </>
            ) : (
              <>
                <span className="text-base font-medium text-nowrap">
                  {label}
                </span>
              </>
            )}
          </>
        )}
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
  active={true} // true pour l'état actif
  iconOn={<svg>...</svg>} // icône pour l'état actif
  iconOff={<svg>...</svg>} // icône pour l'état inactif
  variant="secondary" // "primary" ou "secondary"
  />;
*/
}
