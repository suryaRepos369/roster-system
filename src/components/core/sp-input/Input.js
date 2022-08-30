import React from "react";
import { useNavigate } from "react-router-dom";

export const Input = React.forwardRef((props, ref) => {
  let navigate = useNavigate();
  let {
    label,
    labelColor,
    borderBottom,
    textColour,
    forgotPassword,
    placeholder,
    className,
    onChange,
    type,
    maxDate,
    minDate,
    value = "",
    isError = false,
    errorMessage,
    maxLength = "",
    readOnly = false,
    ...rest
  } = props;
  
  return (
    <div className={`remove-input-focus d-flex flex-column  ${className} `}>
      <div className="d-flex justify-content-between">
        <label className={`text-${labelColor} para-md `}>{label}</label>
        {forgotPassword && (
          <span
            onClick={() => navigate("/forgot-password")}
            className="cursor-pointer text-danger para-sm--bold text-decoration-underline"
          >
            Forgot Password?
          </span>
        )}
      </div>
      <input
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        readOnly={readOnly}
        checked={value}
        max={maxDate}
        min={minDate}
        {...rest}
        ref={ref}
        placeholder={placeholder}
        className={`text-${textColour} p-1 para-md  input-height ${
          borderBottom
            ? "bg-transparent border-0 border-white border-bottom"
            : "rounded border border-1 default-input"
        }`}
      />
      {isError && (
        <span className="text-danger para-sm--bold mt-1">{errorMessage}</span>
      )}
    </div>
  );
});
