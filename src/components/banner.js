import React from "react";
import Button from "./button";

const Banner = () => {
  return (
    <>
      <div className="inline-flex p-[40px_88px] flex-col justify-center items-start gap-2.5 bg-[#F6F8FB]">
        <div className="flex items-center gap-[127px]">
          <div className="flex flex-col items-start gap-[40px]">
            {/* text */}
            <div className="flex flex-col items-start gap-[24px] self-stretch">
              <h2 className="text-[#0C0C0C] font-[Basier Circle] text-3xl font-bold leading-[46.8px] w-[515px]">
                DPD delivery already available!
              </h2>
              <p className="text-[#0C0C0C] font-[Basier Square] text-base font-normal leading-[24px] w-[408px]">
                Choose DPD for speed, ease and convenience. Track your parcel in
                real time. This will help you plan your work while waiting for
                the parcel.
              </p>
            </div>
            {/* button */}
            <Button label="Show more" />
          </div>
          <div className="w-[622px] h-[329px] bg-[url('/images/banner.png')] bg-center bg-cover bg-no-repeat"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
