import React, { useState, createContext, useContext } from "react";

const TestContext = createContext(null);
const toggle = true;
function Checkboxes() {
  return (
    <TestContext.Provider value={"akash"}>
      <If condition={toggle === true}>
        <A />
      </If>
    </TestContext.Provider>
  );
}
const A = () => {
  return (
    <div>
      <B />
    </div>
  );
};
const B = () => {
  return (
    <div>
      <C />
    </div>
  );
};
const C = () => {
  const test = useContext(TestContext);
  return <div>{test}</div>;
};

const If = (condition, children) => {
  console.log(condition, children);
  return (
    <>
      {(() => {
        if (condition === true) {
          return <>{children}</>;
        }

        return null;
      })()}
    </>
  );
};

export default Checkboxes;
