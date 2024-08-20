import React, { useEffect, useRef, useState } from "react";

const FormSample = () => {
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setError(`${ref.current.name} is empty`);
    } else {
      setError(null);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="something"
          type="text"
          placeholder="something"
          ref={ref}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div className="text-danger">{error}</div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default FormSample;
