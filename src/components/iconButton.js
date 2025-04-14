import React from "react";
import PropTypes from "prop-types";

export default function IconButton({ onClick, direction }) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className="shadow-[0px_8px_40px_0px_rgba(0,0,0,0.05)] rounded-lg border border-[#F6F8FB] bg-[#E6EFFB]"
    >
      <div className="w-[30.545px] h-[30.545px] flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <g clipPath={`url(#clip0_${isLeft ? "7_317" : "7_325"})`}>
            <path
              d={
                isLeft
                  ? "M20.34 21.8418L14.5109 16L20.34 10.1582L18.5455 8.36364L10.9091 16L18.5455 23.6364L20.34 21.8418Z"
                  : "M11.66 21.8418L17.4891 16L11.66 10.1582L13.4546 8.36364L21.0909 16L13.4546 23.6364L11.66 21.8418Z"
              }
              fill="#0C0C0C"
            />
          </g>
          <defs>
            <clipPath id={`clip0_${isLeft ? "7_317" : "7_325"}`}>
              <rect
                width="30.5455"
                height="30.5455"
                fill="white"
                transform="translate(0.727273 0.727272)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </button>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
};

IconButton.defaultProps = {
  direction: "left",
};
