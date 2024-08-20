export const calci = (data) => {
  return {
    type: "SIMPLIFY",
    payload: {
      data: data,
      id: new Date().getTime.toString(),
    },
  };
};
