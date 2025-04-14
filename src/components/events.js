import React from "react";
import Title from "@/components/title";
import Button from "./button";
const Events = () => {
  const categoriesList = [
    {
      id: 1,
      image: "/images/event1.png",
      title: "Electrician course for electricians with SEP licence",
      date: "23.05.2021 | London, UK",
      Description:
        "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
    },
    {
      id: 2,
      image: "/images/event2.png",
      title: "Interior design and decoration",
      date: "04-06.11.2021 | London, UK",
      Description:
        "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
    },
    {
      id: 3,
      image: "/images/event3.png",
      title: "AutoCAD 2d basic level",
      date: "15.06.2021 | London, UK",
      Description:
        "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
    },
    {
      id: 4,
      image: "/images/event4.png",
      title: "Paving engineer with a road construction machine",
      date: "31.03.2021 | London, UK",
      Description:
        "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
    },
  ];
  return (
    <>
      <div className="flex-row w-full px-[88px] mt-[80px] mb-[80px]">
        <Title title="Events for you" linkText="Show all events" />
        <div className="flex gap-[20px]">
          {categoriesList.map((product) => (
            <div key={product.id} className="inline-flex flex-col items-start">
              <div
                className="w-[301px] h-[170px] rounded-t-[8px] rounded-b-none bg-gray-200 bg-center bg-cover"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              ></div>
              <div className="flex h-[276px] p-[16px_8px] flex-col items-start gap-4 self-stretch rounded-b-lg border border-[#F6F8FB] bg-white">
                <h5 className="text-[#0C0C0C]  text-[20px] font-bold leading-[26px] w-[285px] h-[52px]">
                  {product.title}
                </h5>
                <span className="text-[#1071FF]  text-[14px] font-normal leading-[170%] w-[285px]">
                  23.05.2021 | London, UK
                </span>

                <p className="text-[#0C0C0C]  text-[16px] font-normal leading-[24px] w-[285px]">
                  {product.Description}
                </p>
                <Button label="Know more" variant="outlineBlue" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
