import { components } from "react-select";
import DropdownArrow from "../../../assets/images/dropdown_arrow.png";

// creating custom dropdown indicator
export const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src={DropdownArrow}
        style={{
          width: 14,
          marginRight: "3%",
        }}
      />
    </components.DropdownIndicator>
  );
};
