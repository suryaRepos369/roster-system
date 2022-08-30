import React from "react";
import Select, { createFilter } from "react-select";
import { DropdownIndicator } from "./DropdownIndicator";
import { DropdownOptions } from "./DropdownOptions";
import { DropdownTheme } from "./DropdownTheme";

/**
 * @param {type: object} props
 * @returns {custom dropdown component}
 * @note - value for Select dropdown should be supplied as an object ex: {label: 'some label', value:'some value'},
 * @helper - ConstructObject() helper function is used to find the index of the selected option in the array of options
 * @references - https://react-select.com/home
 * @references - https://www.botsplash.com/post/optimize-your-react-select-component-to-smoothly-render-10k-data
 */

export const Dropdown = (props) => {
  const {
    selectOptions,
    onChange,
    containerClassName,
    labelColor = "dark",
    label,
    value,
    isMulti = false,
    isError = false,
    menuPlacement = "auto",
    errorMessage,
    handleDebounce = false,
    setIsDropdownLoading,
    setSearchedText,
    ...rest
  } = props || {};

  const selectProps = {
    ...rest,
    styles: DropdownTheme,
    options: selectOptions,
    value: value,
    isMulti: isMulti,
    closeMenuOnSelect: !isMulti,
    menuPlacement: menuPlacement,
    classNamePrefix: "sp-select",
    filterOption: createFilter({ ignoreAccents: false }), //used to optimize the performance of dropdown
    components: {
      DropdownIndicator,
      IndicatorSeparator: () => null,
      Option: DropdownOptions,
    },
    onChange: (item, option) => isMulti ? onChange(item, option) : onChange(item?.value),
    ...(handleDebounce && {
      onInputChange: (inputValue) => {
        handleDebounce(inputValue);
        setIsDropdownLoading(true);
      },
    }),
  };

  return (
    <div className={containerClassName}>
      <div className="d-flex justify-content-between">
        <label className={`para-md text-${labelColor}`}>{label}</label>
      </div>
      <Select {...selectProps} />
      {isError && (
        <span className="text-danger para-sm--bold mt-1">{errorMessage}</span>
      )}
    </div>
  );
};
