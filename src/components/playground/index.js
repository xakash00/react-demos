import React, { useState } from "react";
import { Container, Collapse } from "react-bootstrap";
import MulitpleInputs from "./multipleInput";
const Playground = () => {
  const [open, setOpen] = useState(false);
  const objOfObjs = {
    one: { id: 3 },
    two: { id: 4 }
  };
  const arrayOfObj = Object.keys(objOfObjs).map((i, n) => {
    return objOfObjs[i];
  });
  const arrayOfObj2 = Object.entries(objOfObjs).map((i) => {
    return { [i[0]]: i[1] };
  });

  return (
    <>
      <Container>
        <MulitpleInputs />
        <button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="btn"
        >
          Click
        </button>
        <Collapse in={open}>
          <div>
            {[...new Array(5)].map((item, index) => {
              return <p key={index}> I am {index + 1}</p>;
            })}
          </div>
        </Collapse>
      </Container>
      <pre>
        <code>{JSON.stringify(arrayOfObj, null, 2)}</code>
        <code>{JSON.stringify(arrayOfObj2, null, 2)}</code>
      </pre>
    </>
  );
};

export default Playground;
