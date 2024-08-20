const initialData = 0;

const calculate = (state = initialData, action) => {
  switch (action.type) {
    case "SIMPLIFY":
      const { data } = action.payload;

      state = eval(data);
      return state;

    default:
      return state;
  }
};

export default calculate;
