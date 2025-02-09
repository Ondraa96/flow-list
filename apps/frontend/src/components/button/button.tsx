import React from "react";
import classNames from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  isFullWidth?: boolean;
  content: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isFullWidth = false,
  className,
  content,
  ...props
}) => {
  const baseClasses =
    "p-2 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  const widthClass = isFullWidth ? "w-full" : "";

  return (
    <button
      className={classNames(
        baseClasses,
        variants[variant],
        widthClass,
        className
      )}
      {...props}
    >
      {content}
    </button>
  );
};
