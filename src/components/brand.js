"use client";

import { useState } from "react";
import Image from "next/image";
import panasonic from "../../public/images/panasonic.png";
import legrand from "../../public/images/legrand.png";
import huawei from "../../public/images/huawei.png";
import sharp from "../../public/images/sharp.png";
import Title from "@/components/title";
import IconButton from "@/components/iconButton";

export default function Brand() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const brands = [
    { id: 1, name: "Sharp", image: sharp },
    { id: 2, name: "Panasonic", image: panasonic },
    { id: 3, name: "Huawei", image: huawei },
    { id: 4, name: "Legrand", image: legrand },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % brands.length
    );
  };

  return (
    <>
      <div className="flex-row w-full px-[88px]">
        <Title title="Our brands" linkText="Show all brands" />
        {/* brand carousel */}
        <div className="flex flex-col justify-between items-center gap-[17px]">
          <div className="flex w-full justify-between items-center gap-6 overflow-x-auto">
            {/* button with icon only */}
            <IconButton onClick={handlePrev} direction="left" />
            {/* brands tiles */}
            {brands
              .slice(currentIndex, currentIndex + 4)
              .concat(
                brands.slice(0, Math.max(0, currentIndex + 4 - brands.length))
              )
              .map((brand) => (
                <div
                  key={brand.id}
                  className="flex flex-col items-start gap-[10px] px-[48px] py-[10px] rounded-[8px] border border-[#F6F8FB] bg-white"
                >
                  <Image src={brand.image} alt={brand.name} />
                </div>
              ))}
            {/* button with icon only */}
            <IconButton onClick={handleNext} direction="right" />
          </div>
          {/* slider pagination */}
          <div className="inline-flex items-start gap-3">
            {brands.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-[#1071FF]" : "bg-[#E6EFFB]"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
