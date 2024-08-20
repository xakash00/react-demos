export const initialState = {
  one: false,
  two: false,
  three: false
};

export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "modal_one":
      return {
        one: true,
        two: false,
        three: false
      };
    case "modal_two":
      return {
        one: false,
        two: true,
        three: false
      };
    case "modal_three":
      return {
        one: false,
        two: false,
        three: true
      };
    case "reset":
      return {
        state
      };

    default:
      return state;
  }
};
