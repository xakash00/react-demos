import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

const AccordionUsage = () => {
  const [activeKey, setActiveKey] = useState(0);

  return (
    <div>
      <Accordion defaultActiveKey={`${activeKey}`}>
        {[...new Array(10)].map((item, index) => {
          return (
            <Accordion.Item eventKey={`${index}`}>
              <Accordion.Header>Accordion Item #{index + 1}</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionUsage;
