const initialState = {
  loading: false,
  errorMsg: "",
  success: false,
  data: [],
  loadMore: false,
  count: 5
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return {
        loading: true,
        errorMsg: "",
        success: false,
        data: [],
        loadMore: false,
        count: 5
      };
    case "loaded":
      return {
        loading: false,
        errorMsg: "",
        success: true,
        data: action.data,
        loadMore: false,
        count: 5
      };
    case "load_more":
      return {
        loading: false,
        errorMsg: "",
        success: true,
        data: [...state.data, ...action.data],
        loadMore: true,
        count: state.count + action.count
      };
    case "failed":
      return {
        loading: false,
        errorMsg: "Something went wrong !!",
        success: false,
        data: [],
        loadMore: false,
        count: null
      };
    default:
      return state;
  }
};

export default dataReducer;
