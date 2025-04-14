import React from 'react';
import Button from './button'; // Assurez-vous que le chemin est correct
const Advertising = () => {
    return (
      <div className="inline-flex flex-col justify-center items-start gap-[10px] px-[88px] py-4 bg-[#2580FF] mt-[80px] mb-[80px]">
        <div className="flex items-center gap-[226px]">
          {/* image+texts */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-10">
              <div className="w-[113px] h-[140px] bg-[url('/images/image.png')] bg-center bg-cover bg-no-repeat"></div>
              <div className="text-white font-[Basier_Circle] text-[80px] font-bold leading-[60px]">
                -20%
              </div>
            </div>
            <h1 className="text-white font-[Basier_Circle] text-[46px] font-bold leading-[60px] w-[515px]">
              on power tools
            </h1>
          </div>
          <Button label=" Check offer" variant="secondary"/>
        </div>
      </div>
    );
};

export default Advertising;