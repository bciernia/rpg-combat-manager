"use client";

import { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 
      transition font-semibold disabled:bg-gray-600"
    />
  );
}

export default Button;