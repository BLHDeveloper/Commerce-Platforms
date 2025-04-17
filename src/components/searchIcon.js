import React, { useState, useEffect, useRef } from "react";
import TextButton from "./textbutton";
import "../styles/globals.css";

const categories = [
  {
    title: "Categories",
    primaryCategories: [
      "All categories",
      "Home & Garden",
      "Motors",
      "Electronics",
    ],
  },
  {
    title: "Producer",
    brands: ["Apple", "Samsung", "Sony"],
  },
  {
    title: "Suggestions",
    primaryCategories: [
      ["Decor in", "Home Decor"],
      ["Decor in", "Booksr"],
      ["Decorative pillows set", ""],
      ["Decorative presents boxes", ""],
      ["Decor Amber lamps", ""],
      ["Decorative boxes", ""],
      ["Decorative presents", , ""],
      ["Decorative balls", ""],
      ["Decor for party", ""],
    ],
  },
  {
    title: "Articles",
    primaryCategories: [
      ["Gabriola Ivory Bouclé", " Modern Pillow Set "],
      ["Gabriola Ivory Bouclé", " Modern Pillow Set "],
      ["Gabriola Ivory Bouclé", " Modern Pillow Set "],
      ["Gabriola Ivory Bouclé", " Modern Pillow Set "],
    ],
  },
];

const products = [
  {
    image: "/images/productimg1.png",
    brand: "Brand Name | Part No. 234565",
    title: "AMBER DECOR 60W, E27 590",
    description: "Decorative lamps, lightness around",
    price: "from $45 net",
  },
  // Ajouter d'autres produits ici si nécessaire
];

// Dupliquer chaque produit 4 fois
const duplicatedProducts = products.flatMap((product) =>
  Array(4).fill(product)
);

const SearchIcon = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].primaryCategories[0]
  ); // Par défaut : "All categories"
  const [isSearchPanelVisible, setIsSearchPanelVisible] = useState(false);
  const dropdownRef = useRef(null);
  const contentRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchPanelRef = useRef(null);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  const handleClickOutside = (event) => {
    // Gérer la fermeture du dropdown de catégories
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }

    // Vérification améliorée pour fermer le panneau de recherche
    if (isSearchPanelVisible) {
      // Vérifier si le clic est à l'extérieur du panneau ET de l'input de recherche
      const isClickInsideSearchPanel =
        searchPanelRef.current && searchPanelRef.current.contains(event.target);
      const isClickInsideSearchInput =
        searchInputRef.current && searchInputRef.current.contains(event.target);

      if (!isClickInsideSearchPanel && !isClickInsideSearchInput) {
        setIsSearchPanelVisible(false);
      }
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  const handleSearchInputFocus = () => {
    setIsSearchPanelVisible(true);
  };

  const handleSearchInputBlur = () => {
    // Ne rien faire ici, la fermeture sera gérée par handleClickOutside
  };

  // Effet pour gérer le défilement et l'indicateur de défilement
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current && scrollIndicatorRef.current) {
        const container = contentRef.current;
        const scrollIndicator = scrollIndicatorRef.current;

        // Calculer le pourcentage de défilement
        const scrollPercentage =
          container.scrollTop /
          (container.scrollHeight - container.clientHeight);

        // Calculer la position verticale de l'indicateur
        const maxScrollPosition = 388 - scrollIndicator.clientHeight;
        const newPosition = scrollPercentage * maxScrollPosition;

        // Mettre à jour la position de l'indicateur
        scrollIndicator.style.top = `${newPosition}px`;
      }
    };

    const content = contentRef.current;
    if (content) {
      content.addEventListener("scroll", handleScroll);
    }

    // Utiliser document.addEventListener avec "mousedown" pour capturer les clics avant le blur
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (content) {
        content.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isSearchPanelVisible]); // Ajouter isSearchPanelVisible comme dépendance

  return (
    <div
      className="w-[543px] h-[48px] px-4 py-3 items-center gap-2 rounded-lg border border-[#EAECEE] bg-[#FFF] focus-within:border-[#1071FF] relative"
      ref={dropdownRef}
    >
      <div className="inline-flex items-start gap-[16px]">
        <div
          className="flex items-start gap-[4px] cursor-pointer justify-between"
          onClick={toggleDropdown}
        >
          <div className="flex flex-col w-max justify-center h-[24px] text-[#1071FF] font-normal text-[14px] leading-[170%] ">
            {selectedCategory}
          </div>
          <div className="w-[24px] h-[24px]">
            {isDropdownVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
                  fill="#1071FF"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                  fill="#1071FF"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="w-[1px] h-[24px] bg-[#737B7D]"></div>
        <div className="flex w-[359px] items-start gap-[8px]">
          <div className="w-[24px] h-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#1071FF"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by product or SKU"
            className="flex-1 text-[#737B7D] font-normal text-[14px] leading-[170%] border-none focus:outline-none"
            ref={searchInputRef}
            onFocus={handleSearchInputFocus}
            onBlur={handleSearchInputBlur}
          />
        </div>
      </div>
      {isDropdownVisible && (
        <div className="w-[152px] h-auto absolute mt-4 z-20">
          {categories[0].primaryCategories.map((category, index) => (
            <div
              key={index}
              className={`flex p-2 items-center gap-1 border border-[#EAECEE] cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#F6F8FB] text-[#1071FF]"
                  : "bg-[#FFF] text-[#0C0C0C]"
              } ${index === 0 ? "rounded-t-[8px]" : ""} ${
                index === categories[0].primaryCategories.length - 1
                  ? "rounded-b-[8px]"
                  : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <span className="flex text-[14px] font-basier font-normal leading-[170%]">
                {category}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Panneau de navigation de catégories qui apparaît lors du focus sur la recherche */}
      {isSearchPanelVisible && (
        <div
          className="w-[1441px] h-[484px] bg-white absolute left-0 inline-flex   gap-[90px]  pt-[32px] pb-[48px] pl-[88px] shadow-lg z-10 search-panel"
          style={{ top: "50px", left: "-448px" }}
          ref={searchPanelRef}
        >
          <div className="flex flex-col w-[200px] items-start gap-8">
            <div className="inline-flex flex-col items-start gap-3">
              <span className="text-[#1071FF]  text-[20px] font-bold leading-[130%] w-[116px] h-[24px]">
                {categories[0].title}
              </span>
              <div className="flex flex-col items-start gap-3">
                {categories[0].primaryCategories &&
                  categories[0].primaryCategories.map((item, index) => (
                    <span
                      key={index}
                      className="text-black text-base font-normal leading-6"
                    >
                      {item}
                    </span>
                  ))}
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-3">
              <span className="text-[#1071FF]  text-[20px] font-bold leading-[130%] w-[116px] h-[24px]">
                {categories[1].title}
              </span>
              <div className="flex flex-col items-start gap-1">
                {categories[1].brands &&
                  categories[1].brands.slice(0, 3).map((brand, index) => (
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
          </div>
          <div className="inline-flex flex-col items-start gap-3">
            <span className="text-[#1071FF]  text-[20px] font-bold leading-[130%] w-[116px] h-[24px]">
              {categories[2].title}
            </span>
            <div className="flex flex-col items-start gap-3">
              {categories[2].primaryCategories &&
                categories[2].primaryCategories.map((item, index) => (
                  <span
                    key={index}
                    className="text-black text-base font-normal leading-6"
                  >
                    {item[0]}
                    <span className="text-[#FF7E27] text-base font-normal leading-6 pl-0.5">
                      {item[1]}
                    </span>
                  </span>
                ))}
            </div>
          </div>
          <div className="flex flex-col w-[200px] items-start gap-30">
            <div className="inline-flex flex-col items-start gap-3 w-[251px]">
              <span className="text-[#1071FF]  text-[20px] font-bold leading-[130%] w-[116px] h-[24px]">
                {categories[3].title}
              </span>
              <div className="flex flex-col items-start gap-3">
                {categories[3].primaryCategories &&
                  categories[3].primaryCategories.map((item, index) => (
                    <span
                      key={index}
                      className=" text-[#FF7E27] text-base font-normal leading-6"
                    >
                      {item[0]}
                      <span className="text-black text-base font-normal leading-6 pl-0.5">
                        {item[1]}
                      </span>
                    </span>
                  ))}
              </div>
            </div>
            <TextButton
              linkText="View all articles (19)"
              variant="secondary"
              icon="right"
            />
          </div>

          <div className="flex w-[339px] gap-[45px]">
            <div
              ref={contentRef}
              className="flex flex-col  h-[388px] items-start gap-8 shrink-0 overflow-y-auto custom-scrollbar"
            >
              <div className="w-[408px] h-[24px] flex justify-between">
                <span className="text-[#1071FF] font-basier-circle text-[20px] font-bold leading-[130%] w-[86px] h-[24px] shrink-0">
                  Products
                </span>
                <TextButton
                  linkText="View all products (24)"
                  variant="secondary"
                  icon="right"
                />
              </div>
              <div className="flex flex-col justify-end items-start gap-3">
                {duplicatedProducts.map((product, index) => (
                  <div
                    key={index}
                    className="inline-flex p-2 items-start gap-1 rounded-lg border border-[#E6EFFB]"
                  >
                    <div
                      className="w-20 h-20 bg-[lightgray] bg-center bg-cover bg-no-repeat"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    ></div>
                    <div className="flex w-[308px] h-[92px] flex-col items-start">
                      <span className="text-[#737B7D] text-[14px] font-normal leading-[170%] self-stretch">
                        {product.brand}
                      </span>
                      <span className="text-[#0C0C0C] text-[16px] font-bold leading-[130%] self-stretch">
                        {product.title}
                      </span>
                      <span className="text-[#0C0C0C] text-[14px] font-normal leading-[170%] self-stretch">
                        {product.description}
                      </span>
                      <span className="text-[#1071FF] text-[14px] font-semibold leading-[170%] self-stretch">
                        {product.price}
                      </span>
                    </div>
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
    </div>
  );
};

export default SearchIcon;
