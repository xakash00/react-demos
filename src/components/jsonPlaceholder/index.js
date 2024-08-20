import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/actions/getDataAction";

const JsonPlaceholder = () => {
  const data = useSelector((store) => store.dataReducer);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAction());
  }, [dispatch]);
  return (
    <div>
      {data.data?.map((item, index) => {
        return <p key={item.id}>{item.title}</p>;
      })}
      <button
        onClick={() => {
          dispatch(
            getDataAction({
              loadMore: true,
              count: 20
            })
          );
        }}
        className="btn btn-primary m-auto"
        disable={data.loading}
      >
        {data.loading === true ? "loading..." : "Load more"}
      </button>
    </div>
  );
};

export default JsonPlaceholder;
