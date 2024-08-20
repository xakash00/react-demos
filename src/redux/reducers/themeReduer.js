const initialState = {
  dark_mode: false
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH":
      return {
        ...state,
        dark_mode: !state.dark_mode
      };
    default:
      return state;
  }
};

export default ThemeReducer;
