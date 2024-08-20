import React, { useRef } from "react";
export default function InputRef() {
  const ref = useRef();

  return (
    <>
      <div className="container-fluid"></div>
      <input type="text" ref={ref} />
      <button
        onClick={() => {
          if (ref) {
            console.log(ref.current.value);
          }
        }}
        type="submit"
      >
        Click
      </button>
    </>
  );
}
