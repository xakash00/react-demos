import React, { useEffect } from "react";

const PromiseExample = () => {
  const kick0ff = () =>
    new Promise((resolve, reject) => {
      resolve(
        setTimeout(() => {
          console.log("fuck");
        }, 0)
      );
    });

  useEffect(() => {
    kick0ff()
      .then(() => console.log("hi"))
      .then(() => console.log("hero"));
  }, []);

  return <>Promise</>;
};

export default PromiseExample;
