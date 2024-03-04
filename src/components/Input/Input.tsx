import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  type?: string;
  register: any;
}

const Input: FC<InputProps> = ({ placeholder, name, type, register }) => {
  return (
    <p>
      <input
        placeholder={placeholder}
        className="outline-none border border-black/20 pt-3 pb-3 pl-6 pr-6 text-xl rounded w-inputWidth mt-4 focus:border focus:border-blog-blue"
        {...register(name)}
      />
    </p>
  );
};

export default Input;
