export const ConstructObject = (array, value, param = "value") => {
  let sourceArray = array;
  let selectedValue = value;

  // for multi select dropdown
  if (Array?.isArray(selectedValue)) {
    let newArrayObject = selectedValue?.map(
      (eachValue) =>
        sourceArray?.[sourceArray?.findIndex((obj) => obj[param] == eachValue)]
    );
    return newArrayObject;
  }

  // for single select dropdown
  return sourceArray?.[
    sourceArray?.findIndex((item) => item[param] == selectedValue)
  ];
};
