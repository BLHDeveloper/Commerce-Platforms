import React from 'react';
import Title from "@/components/title";

const Categories = () => {

  const categoriesList = [
    {
      id: 1,
      image: "/images/Photovoltaics.png",
      name: "Photovoltaics",
    },
    {
      id: 2,
      image: "/images/Electronics.png",
      name: "Electronics",
    },
    {
      id: 3,
      image: "/images/Light_Sources.png",
      name: "Light Sources",
    },
    {
      id: 4,
      image: "/images/Ventilation.png",
      name: "Ventilation and Heating",
    },
  ];
    return (
      <>
        <div className="flex-row w-full px-[88px] ">
          <Title
            title="Recommended Categories"
            linkText="Show all categories"
          />
          <div className="flex gap-[20px]">
            {categoriesList.map((product) => (
              <div key={product.id} className="flex w-[301px] flex-col">
                <div
                  className="w-[301px] h-[301px] rounded-t-[8px] rounded-b-none bg-gray-200 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                ></div>
                <div className="flex p-6 items-start gap-[10px] rounded-b-[8px] bg-[#1071FF]">
                  <h5 className="flex w-[253px] h-[26px] flex-col justify-center text-white text-center font-[Basier_Circle] text-[20px] font-bold leading-[26px]">
                    {product.name}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default Categories;