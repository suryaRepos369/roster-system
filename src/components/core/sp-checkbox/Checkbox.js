import React from "react";

export const Checkbox = React.forwardRef((props, ref) => {
  let {
    label,
    labelColor,
    textColour,
    className,
    checked,
    onChange,
    isError = false,
    errorMessage,
    readOnly = false,
    ...rest
  } = props;

  return (
    <div className={`sp-checkbox d-flex flex-column  ${className} `}>
      <div className="d-flex justify-content-between">
        <label className={`text-${labelColor} para-md `}>{label}</label>
      </div>
      <input
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        type={"checkbox"}
        readOnly={readOnly}
        {...rest}
        ref={ref}
        className={`text-${textColour} p-1 para-md rounded border border-1 cursor-pointer core`}
      />
      {isError && (
        <span className="text-danger para-sm--bold mt-1">{errorMessage}</span>
      )}
    </div>
  );
});
