"use client";

import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FormInput({ label, error, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-200 flex flex-col gap-1">{label}

      <input
        {...props}
        className={`px-3 py-2 rounded-md bg-gray-800 border outline-none 
          text-white placeholder-gray-400
          border-gray-700 focus:border-blue-500
          ${error ? "border-red-500" : ""}`}
      />
      </label>

      {error && (
        <span className="text-xs text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}