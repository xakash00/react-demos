import { useEffect, useReducer, useRef } from "react";
import { Card, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import useIntersectionObserver from "./useIntersectionObserver";
const initial_state = {
  giphs: [],
  offset: 0,
  loading: false,
};

function Reducer(state, action) {
  switch (action.type) {
    case "update_offset": {
      return {
        ...state,
        offset: action.payload,
        loading: true,
      };
    }
    case "set": {
      return {
        ...state,
        giphs: [...state.giphs, ...action.payload],
        loading: false,
      };
    }
    case "add_more": {
      return {
        ...state,
        giphs: [...state.giphs, ...action.payload],
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}
const API = "X3JEbtEsbcTQ8qObHMW1JxTkOkiQ4LIZ";

const LoadData = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const entry = useIntersectionObserver(ref, {});
  const [state, setState] = useReducer(Reducer, initial_state);
  const isVisible = !!entry?.isIntersecting;

  const loadMore = () => {
    setState({ type: "update_offset", payload: state.offset + 5 });
    // fetch(
    //   `https://api.giphy.com/v1/gifs/trending?api_key=${API}&limit=${10}&offset=${
    //     state.offset
    //   }`
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     setState({ type: "add_more", payload: res.data });
    //   });
  };
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API}&limit=${5}&offset=${
        state.offset
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setState({ type: "set", payload: res.data });
      });
  }, [state.offset]);
  useEffect(() => {
    if (isVisible === true) {
      return loadMore();
    }
  }, [isVisible]);
  return (
    <div className="container-fluid">
      <button onClick={() => dispatch({ type: "SWITCH" })}>Switch</button>
      <div style={{ height: "100rem" }} className="row">
        {state.giphs.map((g, i) => {
          return (
            <div
              onContextMenu={(e) => {
                e.preventDefault(); // prevent the default behaviour when right clicked
                console.log("Right Click");
              }}
              className="col-md-3"
            >
              <Gif key={i}>
                <Card.Body>
                  <img
                    className="card-img"
                    src={g.images.downsized.url}
                    alt={g.title}
                  />
                </Card.Body>
              </Gif>
            </div>
          );
        })}
      </div>
      <Margin />
      <Margin />
      <Margin />
      <Button ref={ref} className="mt-4 mb-5" disabled={state.loading}>
        {state.loading === true && (
          <span>
            <span className="me-3">Loading</span>
            <Spinner animation="border" size="sm" color="#ccc" />
          </span>
        )}
      </Button>
    </div>
  );
};
export default LoadData;

const Button = styled.button`
  border: none;
  background: none;
  width: 100%;
`;
export const Gif = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const Margin = styled.div`
  height: 3rem;
`;
