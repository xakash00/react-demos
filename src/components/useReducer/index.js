import React, { useEffect, useReducer } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  error: "",
  post: {},
  limit: 10,
  page: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        limit: action.limit,
        page: action.page,
        error: ""
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!"
      };
    default:
      return state;
  }
};
const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit_5`)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div style={{ padding: "16px" }}>
      {state.loading ? (
        "Loading"
      ) : (
        <div>
          {state.post.map((item) => {
            return (
              <div style={{ whiteSpace: "nowrap" }}>
                {" "}
                {item.id} - {item.title}
              </div>
            );
          })}
        </div>
      )}

      {state.error ? state.error : null}
    </div>
  );
};

export default ReducerExample;
