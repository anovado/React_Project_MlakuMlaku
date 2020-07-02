export const checkedFilter = (e) => {
  if (e.target.checked) {
    return {
      type: "CHEKCBOX_CHECKED",
      payload: e,
    };
  } else {
    return {
      type: "CHEKCBOX_UNCHECKED",
      payload: e,
    };
  }
};
export const checkedGender = (e) => {
  if (e.target.checked) {
    return {
      type: "CHANGE_GENDER",
      payload: e,
    };
  } else {
    return {
      type: "CHEKCBOX_UNCHECKED",
      payload: e,
    };
  }
};
export const changeInputFilter = (e) => {
  return {
    type: "CHANGE_INPUT_FILTER",
    payload: e,
  };
};
