import React from "react";
import TextButton from "./textbutton";

export default function Title({ title, linkText }) {
  return (
    <>
      <div className="flex w-full h-[82px] px-[88px] justify-between items-center shrink-0">
        <h3 className="flex flex-col justify-center flex-1 self-stretch text-[#0C0C0C] text-[28px] font-bold leading-[130%]">
          {title}
        </h3>
        <TextButton linkText={linkText}  />
      </div>
    </>
  );
}
