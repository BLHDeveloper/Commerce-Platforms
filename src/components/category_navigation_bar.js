import React, { useState, useRef, useEffect } from "react";
import Badge from "@mui/material/Badge";
import TextButton from "./textbutton";
import "../styles/globals.css";
const CategoryItem = ({
  label,
  hasIcon,
  categoryData,
  activeCategory,
  setActiveCategory,
}) => {
  const contentRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Vérifier si cette catégorie est active
  const isActive = activeCategory === label;

  const handleClick = () => {
    // Si déjà active, désactiver, sinon activer cette catégorie
    if (isActive) {
      setActiveCategory(null);
    } else {
      setActiveCategory(label);
    }
  };

  // Fonction pour gérer le défilement et mettre à jour l'indicateur
  const handleScroll = () => {
    if (contentRef.current && scrollIndicatorRef.current) {
      const container = contentRef.current;
      const scrollIndicator = scrollIndicatorRef.current;

      // Calculer le pourcentage de défilement
      const scrollPercentage =
        container.scrollTop / (container.scrollHeight - container.clientHeight);

      // Calculer la position verticale de l'indicateur
      const maxScrollPosition = 388 - scrollIndicator.clientHeight;
      const newPosition = scrollPercentage * maxScrollPosition;

      // Mettre à jour la position de l'indicateur
      scrollIndicator.style.top = `${newPosition}px`;
    }
  };

  // Ajouter l'écouteur d'événement de défilement
  useEffect(() => {
    const currentRef = contentRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      return () => currentRef.removeEventListener("scroll", handleScroll);
    }
  }, [isActive]);

  return (
    <>
      <button className="flex items-center" onClick={handleClick}>
        <div
          className={`text-sm font-semibold leading-[170%] ${
            isActive ? "text-[#1071FF]" : "text-[#0C0C0C]"
          }`}
        >
          {label}
        </div>
        {hasIcon && (
          <div className="w-[24px] h-[24px]">
            {isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_6235_25271)">
                  <path
                    d="M12.0002 8L6.00024 14L7.41024 15.41L12.0002 10.83L16.5902 15.41L18.0002 14L12.0002 8Z"
                    fill="#1071FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6235_25271">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.000244141)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_4213_15)">
                  <path
                    d="M16.5902 8.58984L12.0002 13.1698L7.41024 8.58984L6.00024 9.99984L12.0002 15.9998L18.0002 9.99984L16.5902 8.58984Z"
                    fill="#0C0C0C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4213_15">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.000244141)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
        )}
      </button>
      {isActive && categoryData && (
        <div
          className="w-[1441px] h-[484px] bg-white absolute left-0 inline-flex justify-center items-center gap-[163px] px-[42px] pt-[32px] pb-[48px] pl-[88px]"
          style={{ top: "210px" }}
        >
          <div className="flex justify-center items-start gap-[121px]">
            <div className="flex flex-col w-[200px] items-start gap-8">
              <div className="flex flex-col h-[348px] items-start gap-3 self-stretch">
                <TextButton
                  linkText={categoryData.title || "Category"}
                  variant="secondary"
                  icon="left"
                  customSvg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_6241_25595)">
                        <path
                          d="M12 2L6.5 11H17.5L12 2ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 21.5H11V13.5H3V21.5ZM5 15.5H9V19.5H5V15.5Z"
                          fill="#1071FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_6241_25595">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                />
                <div className="flex flex-col items-start gap-3">
                  {categoryData.primaryCategories &&
                    categoryData.primaryCategories.map((item, index) => (
                      <span
                        key={index}
                        className="text-black text-base font-normal leading-6"
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </div>
              <TextButton
                linkText="View all markets"
                variant="secondary"
                icon="right"
              />
            </div>
            <div className="flex w-[488px] items-start content-start gap-x-[198px] gap-y-[48px] flex-wrap">
              {categoryData.secondaryCategories &&
                categoryData.secondaryCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex  flex-col items-start gap-[12px] shrink-0"
                  >
                    <TextButton
                      linkText={category.title}
                      variant="secondary"
                      icon="right"
                    />
                    <div className="flex flex-col items-start gap-3">
                      {category.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="text-black text-base font-normal leading-6"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex w-[339px] items-center gap-[41px]">
            <div
              ref={contentRef}
              className="flex flex-col w-[310px] h-[388px] items-start gap-8 shrink-0 overflow-y-auto custom-scrollbar"
            >
              {/* logos of brands */}
              <div className="flex flex-col h-[120px] items-start gap-2 self-stretch">
                <div className="flex items-start gap-2">
                  {categoryData.brands &&
                    categoryData.brands.slice(0, 3).map((brand, index) => (
                      <div
                        key={index}
                        className="w-[95px] h-[56px] flex items-center justify-center rounded-lg bg-[#E6EFFB]"
                      >
                        <div className="text-[#434447] text-base font-normal leading-4 text-center">
                          {brand}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex items-start gap-2">
                  {categoryData.brands &&
                    categoryData.brands.slice(3, 6).map((brand, index) => (
                      <div
                        key={index}
                        className="w-[95px] h-[56px] flex items-center justify-center rounded-lg bg-[#E6EFFB]"
                      >
                        <div className="text-[#434447] text-base font-normal leading-4 text-center">
                          {brand}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col items-start gap-3 self-stretch pb-4">
                {/* promotional card item_mega menu */}
                {categoryData.promotions &&
                  categoryData.promotions.map((promo, index) => (
                    <div
                      key={index}
                      className="inline-flex p-[14px] justify-center items-center gap-2 rounded-[32px] border-2 border-[#1071FF]"
                    >
                      <div className="w-[40px] h-[40px] rounded-[29px] bg-[url('/images/product_image.png')] bg-[lightgray] bg-center bg-cover bg-no-repeat"></div>
                      <p className="text-[#0C0C0C] w-[225px] h-[48px] font-[BasierSquare] text-[16px] font-normal leading-[24px]">
                        {promo.text}
                        <span className="text-[#FF7E27] w-[225px] h-[48px] font-[BasierSquare] text-[14px] font-semibold leading-[170%] ml-1">
                          {promo.discount}
                        </span>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            {/* Custom scrollbar styling */}
            <div className="w-[6px] h-[388px] flex-shrink-0 relative">
              <div
                ref={scrollIndicatorRef}
                className="w-[6px] h-[173.602px] flex-shrink-0 rounded-[3px] bg-[#CFD2D5] absolute top-0"
              ></div>
              <div className="w-[6px] h-[388px] flex-shrink-0 rounded-[3px] bg-[#F6F8FB] absolute top-0 -z-10"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NavbarItem = ({ label, icon, badgeContent }) => (
  <div className="flex flex-col items-center gap-1">
    <Badge badgeContent={badgeContent} color="error" className="z-0">
      {icon}
    </Badge>
    <div className="text-[#1071FF] text-[14px] font-semibold leading-[170%]">
      {label}
    </div>
  </div>
);
const CompareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 17 16"
    fill="none"
  >
    <g clipPath="url(#clip0_1_83)">
      <path
        d="M7.5 2H4.16666C3.43333 2 2.83333 2.6 2.83333 3.33333V12.6667C2.83333 13.4 3.43333 14 4.16666 14H7.5V15.3333H8.83333V0.666664H7.5V2ZM7.5 12H4.16666L7.5 8V12ZM13.5 2H10.1667V3.33333H13.5V12L10.1667 8V14H13.5C14.2333 14 14.8333 13.4 14.8333 12.6667V3.33333C14.8333 2.6 14.2333 2 13.5 2Z"
        fill="#1071FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_83">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.833328)"
        />
      </clipPath>
    </defs>
  </svg>
);

const FavoritesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 17 16"
    fill="none"
  >
    <g clipPath="url(#clip0_1_86)">
      <path
        d="M15.1667 6.16L10.3733 5.74667L8.50001 1.33334L6.62668 5.75334L1.83334 6.16L5.47334 9.31334L4.38001 14L8.50001 11.5133L12.62 14L11.5333 9.31334L15.1667 6.16ZM8.50001 10.2667L5.99334 11.78L6.66001 8.92667L4.44668 7.00667L7.36668 6.75334L8.50001 4.06667L9.64001 6.76L12.56 7.01334L10.3467 8.93334L11.0133 11.7867L8.50001 10.2667Z"
        fill="#1071FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_86">
        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 17 16"
    fill="none"
  >
    <g clipPath="url(#clip0_1_89)">
      <path
        d="M10.5333 8.66667C11.0333 8.66667 11.4733 8.39334 11.7 7.98L14.0866 3.65334C14.3333 3.21334 14.0133 2.66667 13.5066 2.66667H3.63998L3.01331 1.33334H0.833313V2.66667H2.16665L4.56665 7.72667L3.66665 9.35334C3.17998 10.2467 3.81998 11.3333 4.83331 11.3333H12.8333V10H4.83331L5.56665 8.66667H10.5333ZM4.27331 4H12.3733L10.5333 7.33334H5.85331L4.27331 4ZM4.83331 12C4.09998 12 3.50665 12.6 3.50665 13.3333C3.50665 14.0667 4.09998 14.6667 4.83331 14.6667C5.56665 14.6667 6.16665 14.0667 6.16665 13.3333C6.16665 12.6 5.56665 12 4.83331 12ZM11.5 12C10.7666 12 10.1733 12.6 10.1733 13.3333C10.1733 14.0667 10.7666 14.6667 11.5 14.6667C12.2333 14.6667 12.8333 14.0667 12.8333 13.3333C12.8333 12.6 12.2333 12 11.5 12Z"
        fill="#1071FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_89">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.166656)"
        />
      </clipPath>
    </defs>
  </svg>
);

const CategoryNavigationBar = () => {
  // Ajouter un état pour suivre quelle catégorie est active
  const [activeCategory, setActiveCategory] = useState(null);

  const navbarItems = [
    { label: "COMPARE", icon: <CompareIcon />, badgeContent: 3 },
    { label: "FAVORITES", icon: <FavoritesIcon />, badgeContent: 7 },
    { label: "CART", icon: <CartIcon />, badgeContent: 45 },
  ];

  // Données dynamiques pour les catégories
  const categoryData = {
    homeAndGarden: {
      title: "Kitchen",
      primaryCategories: [
        "Kitchen, Dining & Bar",
        "Small kitchen Appliances",
        "Kitchen Tools and Gadgets",
        "Cookware",
        "Bakeware",
        "Kitchen Storage",
        "Flatware",
        "Knives and cutlery",
        "Bar accessories",
      ],
      secondaryCategories: [
        {
          title: "Smart Home",
          items: [
            "Smart door lock",
            "Smart plugs",
            "Smart TVs",
            "Media Steamers",
          ],
        },
        {
          title: "Improvements",
          items: ["Power tools", "Ceiling fans", "Home security"],
        },
        {
          title: "Home Decor",
          items: ["Blankets", "Candles", "Pillows"],
        },
        {
          title: "Garden & Outdoor",
          items: ["Gardening Tools", "Grills", "Fire pits", "Hydroponics"],
        },
      ],
      brands: ["LOGO", "LOGO", "LOGO", "LOGO", "LOGO", "LOGO"],
      promotions: [
        {
          text: "ELECTRICAL Grill Mastergrill SUP412",
          discount: "-30%",
        },
        {
          text: 'All products in "Home & Garden" Category',
          discount: "20% off",
        },
        {
          text: 'All products in "Home & Garden" Category',
          discount: "20% off",
        },
      ],
    },
    motors: {
      title: "Motors",
      primaryCategories: [
        "Car Parts & Accessories",
        "Motorcycles",
        "Automotive Tools",
        "Vehicle Electronics",
        "Boats",
        "Car Care Products",
      ],
      secondaryCategories: [
        {
          title: "Car Parts",
          items: ["Engines", "Brakes", "Filters", "Lights"],
        },
        {
          title: "Tools",
          items: ["Diagnostic Tools", "Repair Kits", "Tool Sets"],
        },
        {
          title: "Electronics",
          items: ["Car Audio", "GPS Devices", "Dash Cameras"],
        },
      ],
      brands: ["BRAND1", "BRAND2", "BRAND3", "BRAND4", "BRAND5", "BRAND6"],
      promotions: [
        {
          text: 'All products in "Home & Garden" Category',
          discount: "20% off",
        },
        {
          text: 'All products in "Home & Garden" Category',
          discount: "20% off",
        },
      ],
    },
  };

  const categories = [
    {
      label: "HOME & GARDEN",
      hasIcon: true,
      categoryData: categoryData.homeAndGarden,
    },
    { label: "MOTORS", hasIcon: true, categoryData: categoryData.motors },
    { label: "ELECTRONICS", hasIcon: false },
    { label: "OFFICE EQUIPMENT", hasIcon: false },
  ];

  return (
    <>
      <div className="flex w-full h-[82px] px-[88px] items-center bg-[#F6F8FB] justify-between">
        <div className="inline-flex items-center gap-[64px]">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              label={category.label}
              hasIcon={category.hasIcon}
              categoryData={category.categoryData}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </div>
        <div className="flex items-center gap-[32px]">
          {navbarItems.map((item, index) => (
            <NavbarItem
              key={index}
              label={item.label}
              icon={item.icon}
              badgeContent={item.badgeContent}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryNavigationBar;
