import React from 'react';
import Title from "@/components/title";
import TextButton from "@/components/textbutton";
const Hints = () => {

  const categoriesList = [
    {
      id: 1,
      image: "/images/Article1.png",
      title: "How much does it cost to finish an apartment?",
      Description:
        'Are you standing on the threshold of your own "M", to which you have just picked up the keys, and with the eye...',
    },
    {
      id: 2,
      image: "/images/Article2.png",
      title: "Demolition of the load-bearing wall",
      Description:
        "Are you planning a home renovation or renovation? Your vision is limited by the load-bearing wall, which you...",
    },
    {
      id: 3,
      image: "/images/Article3.png",
      title: "What color to paint a hall in a block of flats?",
      Description:
        "Matching the right paint is a real challenge. If you are wondering what color to paint your hall with, you can...",
    },
    {
      id: 4,
      image: "/images/Article4.png",
      title: "How does a concrete pump work?",
      Description:
        "A concrete pump is currently one of the most common equipment used on construction sites. Its operation...",
    },
  ];
    return (
      <>
        <div className="flex-row w-full px-[88px] mt-[80px] mb-[80px]">
          <Title title="Hints for you" linkText="Show all hints" />
          <div className="flex gap-[20px]">
            {categoriesList.map((product) => (
              <div
                key={product.id}
                className="inline-flex flex-col items-start"
              >
                <div
                  className="w-[301px] h-[170px] rounded-t-[8px] rounded-b-none bg-gray-200 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                ></div>
                <div className="flex h-[212px] p-4 px-2 flex-col items-start gap-4 self-stretch rounded-b-[8px] border border-[#F6F8FB] bg-white">
                  <h5 className="text-[#0C0C0C]  text-[20px] font-bold leading-[26px] w-[285px]">
                    {product.title}
                  </h5>
                  <p className="text-[#0C0C0C] font-[Basier_Square] text-[16px] font-normal leading-[24px] w-[285px]">
                    {product.Description}
                  </p>
                  <TextButton linkText="Read more" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default Hints;