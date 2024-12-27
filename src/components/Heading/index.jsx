import React from "react";

const sizes = {
  h___4_web___1800: "tracking-[-0.56px] text-[28px] font-extrabold md:text-[26px] sm:text-[23px]",
  headingmd: "text-[16px] font-semibold sm:text-[13px]",
  headinglg: "text-[18px] font-semibold sm:text-[15px]",
  headingxl: "text-[20px] font-semibold sm:text-[17px]",
  headingxxl: "text-[24px] font-bold md:text-[22px] sm:text-[20px]",
  headingxxxxxxl: "text-[54px] font-extrabold md:text-[46px] sm:text-[45px]",
};

const Heading = ({ children, className = "", size = "headingmd", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-darkslategray font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
