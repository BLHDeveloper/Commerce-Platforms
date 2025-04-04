import React from "react";
import Button from "./button";
const Footer = () => {
    const footerSections = [
      {
        title: "How to buy",
        links: [
          "Payment methods",
          "Order and pick up",
          "Order with delivery",
          "Shopping over the phone",
          "Returns",
        ],
      },
      {
        title: "Help",
        links: ["Contact", "Online Help", "Our Commitments", "Give feedback"],
      },
      {
        title: "Services",
        links: [
          "Transport",
          "Design service",
          "Paint an plaster mixing service",
          "Dimensioning and assembly service",
          "Return of used equipment",
          "Additional services",
        ],
      },
      {
        title: "About",
        links: [
          "About us",
          "Press Office",
          "For suppliers",
          "Regulations",
          "Privacy Policy",
          "Cookies",
          "Personal Data Request",
        ],
      },
    ];
  return (
    // <footer class="flex w-[1440px] px-[88px] pt-[40px] items-start gap-[20px] bg-[#F6F8FB]">
    <footer className="flex flex-col w-full px-[88px] pt-[40px] bg-[#F6F8FB]">
      <div class="flex flex-col items-start gap-[40px]">
        {/* footer section */}
        <div class="flex w-[1263px] justify-between items-start">
          {/* newsletter section */}
          <div class="flex flex-col items-start gap-[24px]">
            <h2 className="text-xl font-bold text-[#0C0C0C]">
              Sign up for news
            </h2>
            <p class="w-[301px] text-[#0C0C0C] font-normal text-[14px] leading-[170%] font-['Basier_Square']">
              Keep up to date with the latest product launches and news. Find
              out more about our brands and get special promo codes.
            </p>
            {/* input */}
            <div className="flex w-[301px] px-[16px] py-[12px] items-center gap-[8px] rounded-[8px] border border-[#EAECEE] bg-[#FFF]">
              <input
                type="email"
                placeholder="Your e-mail address"
                className="flex-1 text-[#737B7D] font-normal text-[14px] leading-[170%] font-['Basier_Square'] outline-none bg-transparent"
              />
            </div>
            {/* CTA+checkbox */}

            <div class="flex flex-col w-[301px] items-start gap-[16px]">
              {/* Button */}
              <Button label="Sign up for newsletter" className="w-full" />
              {/* checkbox */}
              <label className="flex w-[301px] items-center gap-[8px]">
                <input
                  type="checkbox"
                  className="hidden peer"
                  id="data-management-checkbox"
                />
                <svg
                  className="w-4 h-4 border rounded  stroke-[#ffffff]  peer-checked:stroke-[#1071FF] border-[#1071FF] bg-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="#1071FF"
                  strokeWidth="2"
                >
                  <path
                    d="M6 12l4 4 8-8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-[#0C0C0C]">
                  I accept{" "}
                  <a href="#" className="text-[#1071FF] ">
                    the personal data management.
                  </a>
                </span>
              </label>
            </div>
          </div>
          {/* footer sections with links */}
          <div className="flex flex-wrap justify-between gap-[24px]">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col gap-[24px]">
                <h4 className="text-lg font-bold text-[#0C0C0C]">
                  {section.title}
                </h4>
                <div className="flex flex-col gap-2">
                  {section.links.map((link, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-sm text-[#0C0C0C] hover:underline"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* button bar */}
        <div class="flex flex-col items-start">
          {/* divider */}
          <div class="w-[1264px] h-[1px] bg-[#E6EFFB]"></div>
          {/* bottom bar/box */}
          <div class="flex w-[1264px] py-[16px] justify-between items-center bg-[#F6F8FB]">
            {/* copyright */}
            <div class="flex items-start gap-[8px]">
              <div class="w-[24px] h-[24px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1027_36879)">
                    <path
                      d="M10.08 10.86C10.13 10.53 10.24 10.24 10.38 9.99C10.52 9.74 10.72 9.53 10.97 9.37C11.21 9.22 11.51 9.15 11.88 9.14C12.11 9.15 12.32 9.19 12.51 9.27C12.71 9.36 12.89 9.48 13.03 9.63C13.17 9.78 13.28 9.96 13.37 10.16C13.46 10.36 13.5 10.58 13.51 10.8H15.3C15.28 10.33 15.19 9.9 15.02 9.51C14.85 9.12 14.62 8.78 14.32 8.5C14.02 8.22 13.66 8 13.24 7.84C12.82 7.68 12.36 7.61 11.85 7.61C11.2 7.61 10.63 7.72 10.15 7.95C9.67 8.18 9.27 8.48 8.95 8.87C8.63 9.26 8.39 9.71 8.24 10.23C8.09 10.75 8 11.29 8 11.87V12.14C8 12.72 8.08 13.26 8.23 13.78C8.38 14.3 8.62 14.75 8.94 15.13C9.26 15.51 9.66 15.82 10.14 16.04C10.62 16.26 11.19 16.38 11.84 16.38C12.31 16.38 12.75 16.3 13.16 16.15C13.57 16 13.93 15.79 14.24 15.52C14.55 15.25 14.8 14.94 14.98 14.58C15.16 14.22 15.27 13.84 15.28 13.43H13.49C13.48 13.64 13.43 13.83 13.34 14.01C13.25 14.19 13.13 14.34 12.98 14.47C12.83 14.6 12.66 14.7 12.46 14.77C12.27 14.84 12.07 14.86 11.86 14.87C11.5 14.86 11.2 14.79 10.97 14.64C10.72 14.48 10.52 14.27 10.38 14.02C10.24 13.77 10.13 13.47 10.08 13.14C10.03 12.81 10 12.47 10 12.14V11.87C10 11.52 10.03 11.19 10.08 10.86ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                      fill="#434447"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1027_36879">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p class="text-[#434447] font-normal text-[14px] leading-[170%] font-['Basier_Square']">
                2021 Cloudflight
              </p>
            </div>
            {/* logo/socials */}
            <div class="flex justify-center items-center gap-[40px]">
              <div class="flex items-start gap-[16px]">
                <div class="w-[24px] h-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1027_36883)">
                      <path
                        d="M12 24C18.6353 24 24 18.6353 24 12C24 5.36471 18.6353 0 12 0C5.36471 0 0 5.36471 0 12C0 18.6353 5.36471 24 12 24Z"
                        fill="#0C0C0C"
                      />
                      <path
                        d="M9.10547 9.95294H10.3761V8.75294C10.3761 8.18823 10.3761 7.41176 10.7996 6.91765C11.1525 6.35294 11.7172 6 12.7055 6C14.2584 6 14.9643 6.21176 14.9643 6.21176L14.6819 8.04706C14.6819 8.04706 14.1878 7.90588 13.6937 7.90588C13.1996 7.90588 12.7761 8.04706 12.7761 8.54118V9.95294H14.7525L14.6114 11.7176H12.7055V17.9294H10.3761V11.7176H9.10547V9.95294Z"
                        fill="#F6F8FB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1027_36883">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="w-[24px] h-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1027_36884)">
                      <path
                        d="M14.2969 12C14.2969 13.2686 13.2686 14.2969 12 14.2969C10.7314 14.2969 9.70312 13.2686 9.70312 12C9.70312 10.7314 10.7314 9.70312 12 9.70312C13.2686 9.70312 14.2969 10.7314 14.2969 12Z"
                        fill="#0C0C0C"
                      />
                      <path
                        d="M17.3713 7.93622C17.2609 7.63702 17.0848 7.36621 16.8559 7.14392C16.6336 6.91504 16.363 6.73889 16.0636 6.62848C15.8208 6.53418 15.4561 6.42194 14.7842 6.39136C14.0575 6.35822 13.8396 6.35107 11.9998 6.35107C10.1597 6.35107 9.94183 6.35803 9.21527 6.39117C8.54346 6.42194 8.17853 6.53418 7.93591 6.62848C7.63654 6.73889 7.36572 6.91504 7.14362 7.14392C6.91473 7.36621 6.73859 7.63684 6.62799 7.93622C6.53369 8.17902 6.42145 8.54395 6.39087 9.21576C6.35773 9.94232 6.35059 10.1602 6.35059 12.0002C6.35059 13.8401 6.35773 14.058 6.39087 14.7847C6.42145 15.4565 6.53369 15.8213 6.62799 16.0641C6.73859 16.3635 6.91455 16.6341 7.14343 16.8564C7.36572 17.0853 7.63635 17.2614 7.93573 17.3718C8.17853 17.4663 8.54346 17.5786 9.21527 17.6091C9.94183 17.6423 10.1595 17.6492 11.9996 17.6492C13.8398 17.6492 14.0577 17.6423 14.7841 17.6091C15.4559 17.5786 15.8208 17.4663 16.0636 17.3718C16.6646 17.14 17.1395 16.665 17.3713 16.0641C17.4656 15.8213 17.5779 15.4565 17.6086 14.7847C17.6418 14.058 17.6487 13.8401 17.6487 12.0002C17.6487 10.1602 17.6418 9.94232 17.6086 9.21576C17.5781 8.54395 17.4658 8.17902 17.3713 7.93622ZM11.9998 15.5384C10.0455 15.5384 8.46124 13.9543 8.46124 12.0001C8.46124 10.0458 10.0455 8.46173 11.9998 8.46173C13.9539 8.46173 15.5381 10.0458 15.5381 12.0001C15.5381 13.9543 13.9539 15.5384 11.9998 15.5384ZM15.678 9.14874C15.2213 9.14874 14.8511 8.7785 14.8511 8.32184C14.8511 7.86517 15.2213 7.49493 15.678 7.49493C16.1346 7.49493 16.5049 7.86517 16.5049 8.32184C16.5047 8.7785 16.1346 9.14874 15.678 9.14874Z"
                        fill="#0C0C0C"
                      />
                      <path
                        d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM18.8491 14.8409C18.8157 15.5744 18.6991 16.0752 18.5288 16.5135C18.1708 17.4391 17.4391 18.1708 16.5135 18.5288C16.0754 18.6991 15.5744 18.8156 14.8411 18.8491C14.1063 18.8826 13.8715 18.8906 12.0002 18.8906C10.1287 18.8906 9.8941 18.8826 9.15912 18.8491C8.42578 18.8156 7.9248 18.6991 7.48663 18.5288C7.02667 18.3558 6.61029 18.0846 6.26605 17.7339C5.91559 17.3899 5.64441 16.9733 5.47137 16.5135C5.30109 16.0754 5.18445 15.5744 5.15112 14.8411C5.11725 14.1061 5.10938 13.8713 5.10938 12C5.10938 10.1287 5.11725 9.89392 5.15094 9.15912C5.18427 8.4256 5.30072 7.9248 5.47101 7.48645C5.64404 7.02667 5.91541 6.61011 6.26605 6.26605C6.61011 5.91541 7.02667 5.64423 7.48645 5.47119C7.9248 5.3009 8.4256 5.18445 9.15912 5.15094C9.89392 5.11743 10.1287 5.10938 12 5.10938C13.8713 5.10938 14.1061 5.11743 14.8409 5.15112C15.5744 5.18445 16.0752 5.3009 16.5135 5.47101C16.9733 5.64404 17.3899 5.91541 17.7341 6.26605C18.0846 6.61029 18.356 7.02667 18.5288 7.48645C18.6993 7.9248 18.8157 8.4256 18.8492 9.15912C18.8828 9.89392 18.8906 10.1287 18.8906 12C18.8906 13.8713 18.8828 14.1061 18.8491 14.8409Z"
                        fill="#0C0C0C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1027_36884">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="w-[24px] h-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1027_36885)">
                      <path
                        d="M12 24C18.6353 24 24 18.6353 24 12C24 5.36471 18.6353 0 12 0C5.36471 0 0 5.36471 0 12C0 18.6353 5.36471 24 12 24Z"
                        fill="#0C0C0C"
                      />
                      <path
                        d="M14.3294 11.9999L10.3765 14.3293V9.74109L14.3294 11.9999ZM18 14.1176V9.88226C18 9.88226 18 7.83521 15.9529 7.83521H8.04706C8.04706 7.83521 6 7.8352 6 9.88226V14.1176C6 14.1176 6 16.1646 8.04706 16.1646H15.8824C15.9529 16.2352 18 16.2352 18 14.1176Z"
                        fill="#F6F8FB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1027_36885">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
