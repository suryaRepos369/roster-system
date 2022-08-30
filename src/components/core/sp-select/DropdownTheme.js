// react-select package needs the below config to override the default theme

const selectContainer = {
  baseTheme: (state) => ({
    backgroundColor: "#0000000d",
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    height: state?.isMulti ? (state?.hasValue ? "auto" : 32) : 32,
    cursor: "default",
    fontFamily: "DM Sans",
  }),
  customColor: { color: "#e5e5e5" },
  defaultBorder: { border: "1px solid #ced4da", borderRadius: 5 },
  customBorder: {
    borderBottom: "1px solid #ced4da",
  },
};

export const DropdownTheme = {
  control: (_, state) => ({
    ...selectContainer.baseTheme(state),
    ...(state?.selectProps?.borderBottom
      ? selectContainer.customBorder
      : selectContainer.defaultBorder),
  }),

  singleValue: (provided, state) => ({
    ...provided,
    ...(state?.selectProps?.textColor == "light" &&
      selectContainer.customColor),
  }),

  menu: (base) => ({
    ...base,
    width: "max-content", // used to override the 100% width of the menu
    minWidth: "100%",
    maxWidth: "50vw",
    overflow: "none",
    border: "1px solid #e5e5e5",
    borderRadius: 2,
  }),
};

// ! DEPRECATED theme options below - use Dropdown.scss instead to override dropdown options theme

// const selectOptions = {
//   baseTheme: {
//     fontSize: 14,
//     fontFamily: "DM Sans",
//     padding: "5px",
//     backgroundColor: "#e5e5e6",
//     color: "black",
//   },
// };

// option: (provided, state) => ({
//   ...provided,
//   ...selectOptions.baseTheme,
//   ...(state?.isSelected && {
//     backgroundColor: "#ec2227", // primary color
//     color: "#fff",
//   }),
//   ...(state?.active && {
//     backgroundColor: "#ec2227", // primary color
//     color: "#fff",
//   }),
//   "&:hover": {
//     backgroundColor: state.isFocused && "#ff6367", // light primary color
//     color: "#fff",
//   },
// });
