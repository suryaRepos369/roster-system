import React from "react";
import SearchIcon from "../../../assets/icon/search_icon.svg"

export const InputSearch = (props) => {
  let { textColour, placeholder,value, className, onChange } = props;

  return (
    <div className={`remove-search-focus sp-input-search ${className}`}>
      <input
        type="search"
        style={{backgroundImage:SearchIcon}}
        onChange={(e)=> onChange(e.target.value)}
        placeholder={placeholder}
        className={`text-${textColour} p-2 para-md rounded border border-1 default-search w-100 bg-white`}
      />
    </div>
  );
};
