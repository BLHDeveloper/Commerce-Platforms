"use client";

import Image from "next/image";
import panasonic from "../../public/images/panasonic.png";
import legrand from "../../public/images/legrand.png";
import huawei from "../../public/images/huawei.png";
import sharp from "../../public/images/sharp.png";
import Title from "@/components/title";
export default function Brand() {


  const brands = [
    { id: 1, name: "Sharp", image: sharp },
    { id: 2, name: "Panasonic", image: panasonic },
    { id: 3, name: "Huawei", image: huawei },
    { id: 4, name: "Legrand", image: legrand },
  ];

  return (
    <>
    <Title title="Our brands" linkText="Show all brands" />

      <div className="flex flex-col w-full px-[88px] justify-between items-center gap-[17px]">
        <div className="flex w-full justify-between items-center gap-6 overflow-x-auto" >
          <button
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
                <g clipPath="url(#clip0_7_317)">
                  <path
                    d="M20.34 21.8418L14.5109 16L20.34 10.1582L18.5455 8.36364L10.9091 16L18.5455 23.6364L20.34 21.8418Z"
                    fill="#0C0C0C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_317">
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
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-start gap-[10px] px-[48px] py-[10px] rounded-[8px] border border-[#F6F8FB] bg-white"
            >
              <Image src={brand.image} alt={brand.name} />
            </div>
          ))}
          <button
            className="shadow-[0px_8px_40px_0px_rgba(0,0,0,0.05)] rounded-[8px] border border-[#F6F8FB] bg-[#E6EFFB]"
          >
            <div className="w-[30.545px] h-[30.545px] shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_7_325)">
                  <path
                    d="M11.66 21.8418L17.4891 16L11.66 10.1582L13.4546 8.36364L21.0909 16L13.4546 23.6364L11.66 21.8418Z"
                    fill="#0C0C0C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_325">
                    <rect
                      width="30.5455"
                      height="30.5455"
                      fill="white"
                      transform="translate(0.727295 0.727272)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </button>
        </div>
        <div className="inline-flex items-start gap-3">
          <div className="w-2 h-2 fill-[#1071FF]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#1071FF" />
            </svg>
          </div>
          <div className="w-2 h-2 fill-[#E6EFFB]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#E6EFFB" />
            </svg>
          </div>
          <div className="w-2 h-2 fill-[#E6EFFB]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#E6EFFB" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
