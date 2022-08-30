import { components } from "react-select";

export const DropdownOptions = ({ children, ...props }) => {
  const { onMouseMove, onMouseOver, ...rest } = props.innerProps;
  const newProps = { ...props, innerProps: rest };
  return (
    <components.Option {...newProps} className="sp-option-items">
      {children}
    </components.Option>
  );
};
