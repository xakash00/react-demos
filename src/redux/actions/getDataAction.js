export const getDataAction = (loadMore, count) => {
  return {
    type: "GET_DATA",
    loadMore,
    count
  };
};
