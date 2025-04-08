import React from 'react';

const Input = ({ type, placeholder, value, onChange, defaultValue, className }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        className={`flex py-3 px-4 items-center gap-2 rounded-lg border border-[#EAECEE] bg-white flex-1 text-[14px] font-normal leading-[170%] ${className}`}
      />
      
    );
};

export default Input;