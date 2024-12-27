import React from "react";

const sizes = {
  textlg: "text-[18px] font-normal sm:text-[15px]",
  textxl: "text-[20px] font-normal sm:text-[17px]",
};

const Text = ({ children, className = "", as, size = "textxl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-orange-a700 font-markoone ${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
