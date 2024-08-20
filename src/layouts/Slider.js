import React, { useEffect, useRef } from "react";
import { Dflex, HScroll } from "../styles";

const Slider = ({ children }) => {
  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - ref.current.offsetLeft;
    scrollLeft = ref.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    ref.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    ref.current.addEventListener("mousedown", handleMouseDown);
    ref.current.addEventListener("mouseleave", handleMouseLeave);
    ref.current.addEventListener("mouseup", handleMouseUp);
    ref.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (isDown) {
        ref.current.removeEventListener("mousedown", handleMouseDown);
        ref.current.removeEventListener("mouseLeave", handleMouseLeave);
        ref.current.removeEventListener("mouseup", handleMouseUp);
        ref.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isDown]);

  return (
    <>
      <Dflex>
        <button className="btn" onClick={() => scroll(-500)}>
          <i className="ri-arrow-left-circle-fill"></i>
        </button>
        <HScroll ref={ref}>{children}</HScroll>
        <button className="btn" onClick={() => scroll(500)}>
          <i className="ri-arrow-right-circle-fill"></i>
        </button>
      </Dflex>
    </>
  );
};

export default Slider;
