import React from "react";
import { Oval } from "react-loader-spinner";

export const Button = (props) => {
  const {
    title = "",
    variant = "primary",
    size = "md",
    className,
    isLoading,
  } = props || {};

  const btnVariant = {
    primary: "btn-primary text-white",
    light: "btn-light text-dark",
    grey2: "btn-grey2 text-white",
    dark: "btn-dark text-white",
    success: "btn-success text-white",
  }[variant];

  const btnSize = {
    sm: "px-3 para-sm--bold",
    md: "px-4 para-md--bold ",
    lg: "px-5 para-xl--bold",
  }[size];

  return (
    <button
      {...props}
      type="button"
      className={`btn ${btnSize} ${btnVariant} sp-button ${className}`}
    >
      {isLoading ? (
        <Oval
          color="#FFFFFF"
          secondaryColor="grey"
          ariaLabel="loading"
          height={20}
          width={20}
        />
      ) : (
        title
      )}
    </button>
  );
};
