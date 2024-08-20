import React from "react";

const If = ({ condition = true, children }) => {
  return;
  <>
    {(() => {
      if (condition == true) {
        return <>{children}</>;
      }

      return null;
    })()}
  </>;
};

export default If;
