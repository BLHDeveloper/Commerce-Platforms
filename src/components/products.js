"use client";
import Title from "@/components/title";
import Button from "./button";
import { useState } from "react";
import Input from "./input";
import Dropdown from "./Dropdown";
export default function Products() {
  const [clickedButtons, setClickedButtons] = useState({});
  const [cart, setCart] = useState({});

  const handleButtonClick = (id) => {
    setClickedButtons((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleAddToCart = (id) => {
    setCart((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const productList = [
    {
      id: 1,
      image: "/images/product1.png",
      discount: "-30%",
      stockStatus: true, // Modifié pour utiliser un booléen
      partNo: "Omnires | Part No. 2123532",
      title: "Connection with a handle Omnires round",
      details: [
        "Material of execution: brass",
        "Manufacturer’s color: chrome",
        "Guarantee: 5 years",
      ],
      price: "$45.00 net",
      oldPrice: "$55.00 net",
      quantity: 1,
      itemLabel: "Item",
    },
    {
      id: 2,
      image: "/images/product2.png",
      discount: "-15%",
      stockStatus: true, // Modifié pour utiliser un booléen
      partNo: "GoodHome | Part No. 234565",
      title: "Countertop washbasin GoodHome Tekapo",
      details: [
        "Basin width : 45 cm",
        "Basin height: 12 cm",
        "Basin depth: 35 cm",
      ],
      price: "$51.00 net",
      oldPrice: "$64.00 net",
      quantity: 1,
      itemLabel: "Item",
    },
    {
      id: 3,
      image: "/images/product3.png",
      discount: "-15%",
      stockStatus: true, // Modifié pour utiliser un booléen
      partNo: "GoodHome | Part No. 234565",
      title: "Perforated Simpson tape 25 x 2500 x 2 mm",
      details: [
        "Basin width : 45 cm",
        "Basin height: 12 cm",
        "Basin depth: 35 cm",
      ],
      price: "$51.00 net",
      oldPrice: "$64.00 net",
      quantity: 1,
      itemLabel: "Item",
    },
    {
      id: 4,
      image: "/images/product4.png",
      discount: "-15%",
      stockStatus: false, // Modifié pour utiliser un booléen
      partNo: "Omnires | Part No. 2123532",
      title: "Connection with a handle Omnires round",
      details: [
        "Material of execution: brass",
        "Manufacturer’s color: chrome",
        "Guarantee: 5 years",
      ],
      price: "$45.00 net",
      oldPrice: "$55.00 net",
      quantity: 1,
      itemLabel: "Item",
    },
  ];

  return (
    <>
      <div className="flex-row w-full px-[88px]">
        <Title
          title="Recommended products"
          linkText="Show all recommended products"
        />
        <div className="flex gap-[20px]">
          {productList.map((product) => (
            <div key={product.id} className="flex w-[301px] flex-col">
              <div
                className="flex justify-between w-full pt-4 pb-4 h-[246px] flex-col shrink-0 rounded-t-[8px] border border-[#F6F8FB]"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              >
                <div className="flex pr-2 justify-between items-center">
                  <div className="flex w-[52px] px-2 py-1 items-center shrink-0 bg-[#FF7E27]">
                    <span className="text-white text-[14px] font-semibold leading-[170%]">
                      {product.discount}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="flex w-8 h-8 p-[5.333px] justify-center items-center shrink-0 rounded-full bg-[#E6EFFB]"
                    onClick={() => handleButtonClick(product.id)}
                  >
                    <div className="w-[22px] h-[22px] shrink-0">
                      {clickedButtons[product.id] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M5.3395 19.2499L6.82909 12.8103L1.83325 8.47909L8.43325 7.90617L10.9999 1.83325L13.5666 7.90617L20.1666 8.47909L15.1708 12.8103L16.6603 19.2499L10.9999 15.8353L5.3395 19.2499Z"
                            fill="#1071FF"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.11242 14.4228L9.99992 12.6812L12.8874 14.4458L12.1312 11.1458L14.6749 8.94575L11.3291 8.64784L9.99992 5.53117L8.67075 8.62492L5.32492 8.92284L7.86867 11.1458L7.11242 14.4228ZM4.3395 18.2499L5.82909 11.8103L0.833252 7.47909L7.43325 6.90617L9.99992 0.833252L12.5666 6.90617L19.1666 7.47909L14.1708 11.8103L15.6603 18.2499L9.99992 14.8353L4.3395 18.2499Z"
                            fill="#1071FF"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
                <div className="flex px-2 justify-between items-end">
                  <div className="w-[117px] h-[28px] shrink-0">
                    {product.stockStatus ? (
                      <div className="flex w-[88px] h-[28px] shrink-0 rounded-[4px] border border-[#F6F8FB] bg-white justify-center items-center gap-[4px]">
                        <div className="w-4 h-4 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_17_1732)">
                              <path
                                d="M8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.9399 2.66668 7.99992C2.66668 5.05992 5.06001 2.66659 8.00001 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8.00001 13.3333ZM11.06 5.05325L6.66668 9.44659L4.94001 7.72659L4.00001 8.66659L6.66668 11.3333L12 5.99992L11.06 5.05325Z"
                                fill="#00893A"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_17_1732">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <span className="text-[#00893A] text-[14px] font-normal leading-[170%] ">
                          In stock
                        </span>
                      </div>
                    ) : (
                      <div className="flex w-[226px] h-[28px] shrink-0 rounded-[4px] border border-[#F6F8FB] bg-white justify-center items-center gap-[4px]">
                        <div className="w-4 h-4 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M7.33325 10H8.66659V11.3333H7.33325V10ZM7.33325 4.66667H8.66659V8.66667H7.33325V4.66667ZM7.99325 1.33334C4.31325 1.33334 1.33325 4.32 1.33325 8C1.33325 11.68 4.31325 14.6667 7.99325 14.6667C11.6799 14.6667 14.6666 11.68 14.6666 8C14.6666 4.32 11.6799 1.33334 7.99325 1.33334ZM7.99992 13.3333C5.05325 13.3333 2.66659 10.9467 2.66659 8C2.66659 5.05334 5.05325 2.66667 7.99992 2.66667C10.9466 2.66667 13.3333 5.05334 13.3333 8C13.3333 10.9467 10.9466 13.3333 7.99992 13.3333Z"
                              fill="#F52F2F"
                            />
                          </svg>
                        </div>
                        <span className="text-[#F52F2F] font-[Basier_Square] text-[14px] font-normal leading-[170%]">
                          Exp. delivery on Jun 14, 2022
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex w-6 flex-col items-start gap-[10px] shrink-0">
                    <div className="w-4 h-4 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_17_1723)">
                          <path
                            d="M10 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H10V23H12V1H10V3ZM10 18H5L10 12V18ZM19 3H14V5H19V18L14 12V21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                            fill="#1071FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_1723">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="w-4 h-4 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_17_1726)">
                          <path
                            d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08ZM18 4C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6C17.45 6 17 5.55 17 5C17 4.45 17.45 4 18 4ZM6 13C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11C6.55 11 7 11.45 7 12C7 12.55 6.55 13 6 13ZM18 20.02C17.45 20.02 17 19.57 17 19.02C17 18.47 17.45 18.02 18 18.02C18.55 18.02 19 18.47 19 19.02C19 19.57 18.55 20.02 18 20.02Z"
                            fill="#1071FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_1726">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-2 flex-col items-start gap-[19px] self-stretch rounded-b-[8px] border border-[#F6F8FB] bg-white">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <span className="text-[#737B7D] text-[14px] font-normal leading-[170%] self-stretch">
                    {product.partNo}
                  </span>
                  <h5 className="text-[#0C0C0C] text-[20px] font-bold leading-[130%] self-stretch">
                    {product.title}
                  </h5>
                  <div className="flex flex-col items-start self-stretch">
                    {product.details.map((detail, index) => (
                      <span
                        key={index}
                        className="text-[#0C0C0C] text-[14px] font-normal leading-[170%] self-stretch"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-stretch">
                  <div className="flex justify-between items-center">
                    <span className="text-[#1071FF] text-[14px] font-semibold leading-[170%]">
                      your price
                    </span>
                    <span className="text-[#1071FF] text-[24px] font-semibold leading-[140%]">
                      {product.price}
                    </span>
                    <span className="text-[#FF7E27] text-[14px] font-normal leading-[24px] line-through">
                      {product.oldPrice}
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-2">
                    <Input
                      type="number"
                      defaultValue={product.quantity}
                      className="w-[71px]"
                    />

                    <Dropdown value={product.itemLabel} className="w-[200px]" />
                  </div>
                  <Button
                    label={cart[product.id] ? "Remove to cart" : "Add to cart"}
                    onClick={() => handleAddToCart(product.id)}
                    disabled={!product.stockStatus} // Désactiver si stockStatus est false
                    icon="right"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
