import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};

const sizes = {
  sm: "h-[32px] pl-3 pr-5 text-[18px]",
  xs: "h-[28px] pr-5 text-[18px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,

      size = "xs",

      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text text-[18px]  ${shape && shapes[shape]}  ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["sm", "xs"]),
};

export { Input };
