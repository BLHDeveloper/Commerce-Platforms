import React from 'react';
import Button from './button3'; // Assurez-vous que le chemin est correct

const Personalized = () => {
    return (
      <>
        <div className="inline-flex items-start gap-5  px-[88px] ">
          <div className="rounded-[8px] bg-[url('/images/personalized.png')] bg-gray-200 bg-center bg-cover w-[622px] h-[350px]"></div>
          <div className="flex p-[75px_107px_75px_64px] flex-col items-start gap-2 rounded-[8px] bg-[#1071FF]">
            <div className="flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-white font-[Basier_Circle] text-[28px] font-bold leading-[36.4px] w-[451px]">
                  Buy this bundle and save $100!
                </h3>
                <p className="text-white font-[Basier_Square] text-[20px] font-normal leading-[34px] w-[344px]">
                  Longer sentence, for just two lines and it could be very very
                  long
                </p>
              </div>
              {/* button */}
              <Button label="Buy this bundle" />
            </div>
          </div>
        </div>
      </>
    );
};

export default Personalized;