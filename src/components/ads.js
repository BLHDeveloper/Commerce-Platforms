import React from "react";

const Ads = () => {
  const categoriesList = [
    {
      id: 1,
      image: "/images/Ads4.jpg",
      title: "New tool kits!",
    },
    {
      id: 2,
      image: "/images/Ads2.png",
      title: "New rules for wind farms!",
    },
    {
      id: 3,
      image: "/images/Ads3.png",
      title: "New iPhone now available!",
    },
  ];
  return (
    <>
      <div className="flex-row w-full px-[88px] mt-[80px] mb-[80px]">
        <div className="inline-flex items-start gap-5">
          {categoriesList.map((product) => (
            <div
              key={product.id}
              className="flex items-center rounded-[8px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.05)]"
            >
              <div className="flex flex-col justify-center items-start gap-2.5 px-6 py-21.5 rounded-tl-[8px] rounded-bl-[8px] bg-[#FF7E27]">
                <h5 className="flex flex-col justify-center w-[156px] h-[62px] text-white font-[Basier_Circle] text-[20px] font-bold leading-[26px]">
                  {product.title}
                </h5>
              </div>
              <div
                className="w-[204px] h-[234px] rounded-tr-[8px] rounded-br-[8px] bg-gray-200 bg-center bg-cover"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ads;
