import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}
      <input
        {...props}
        className={`border w-full p-2 rounded-md ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
