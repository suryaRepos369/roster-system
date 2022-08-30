import React from "react";

export const Badge = (props) => {
  const {
    icon = "",
    size = "sm",
    variant = "primary",
    title = "",
    className = "",
    iconStyle = {},
    onClick,
    disabled,
    style,
    ...rest
  } = props || {};

  const badgeSize = {
    xs: "sp-badge-xs",
    sm: "sp-badge-sm",
    md: "sp-badge-md",
    lg: "sp-badge-lg",
    xl: "sp-badge-xl",
  }[size];

  const badgeVariant = {
    primary: "bg-primary",
    success: "bg-success",
    grey3: "bg-grey3",
    dark: "bg-dark",
  }[variant];

  return (
    <div
      {...rest}
      data-bs-toggle="tooltip"
      title={title}
      data-bs-placement="top"
      className={`sp-badge ${className} ${badgeSize} ${badgeVariant} ${disabled && 'cursor-not-allowed'}`}
      onClick={() => !disabled && onClick()}
      style={{...style, opacity: disabled ? 0.5 : 1 }}
    >
      <img src={icon} style={iconStyle} />
    </div>
  );
};
