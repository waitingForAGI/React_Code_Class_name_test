import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};
const variants = {
  outline: {
    gray_700: "border-gray-700 border border-solid text-darkslategray",
    "Dark - 2": "border-dark___2 border border-solid text-darkslategray",
    blue_gray_100: "border-blue_gray-100 border border-solid text-darkslategray",
    blue_gray_100_01: "border-blue_gray-100_01 border border-solid text-darkslategray",
  },
  fill: {
    DarkSlateGray: "bg-darkslategray text-white",
  },
};
const sizes = {
  xl: "h-[56px] px-4 text-[16px]",
  md: "h-[42px] px-6 text-[16px]",
  lg: "h-[48px] px-6 text-[16px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[10px] ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xl", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["gray_700", "Dark - 2", "blue_gray_100", "blue_gray_100_01", "DarkSlateGray"]),
};

export { Button };
