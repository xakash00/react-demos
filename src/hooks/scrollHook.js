import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [offset, setOffset] = useState();
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scroll = this.scrollY;
      setOffset(scroll);
    });
    return window.removeEventListener("scroll", () => {});
  }, []);
  return { offset };
};
export default useScroll;
