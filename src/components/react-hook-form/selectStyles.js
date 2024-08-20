export const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#fff",
    //  menu
    fontFamily: "Montserrat",
    borderRadius: "5px",
    marginTop: "0.5rem",
    marginBottom: "0.3rem",
    fontSize: "15px",
    borderColor: state.isFocused ? "#47ccde" : "#fff",
    // border around container
    boxShadow: "0px 0px 5px #ccc !important",
    "&:hover": {
      //  border
      borderColor: state.isFocused ? "#47ccde" : "#47ccde"
    }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#47ccde" : null,
    borderBottom: "1px solid #F5F5F5",
    fontFamily: "Montserrat",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: state.isFocused ? "#47ccde" : " #47ccde"
    }
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#BFBFBF",
      fontFamily: "Montserrat",
      fontSize: "0.8rem"
    };
  },
  dropdownIndicator: (provided) => ({
    ...provided,
    svg: {
      fill: "#47ccde"
    }
  })
};
