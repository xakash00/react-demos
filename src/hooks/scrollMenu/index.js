import React, { useRef } from "react";
import styled from "styled-components";

const ScrollMenu = () => {
  const ref = useRef();
  const executeScroll = () => ref.current.scrollIntoView();
  return (
    <Row>
      <div>
        <UL>
          <LI>ONE</LI>
          <LI>TWO</LI>
          <LI onClick={() => executeScroll()}>THREE</LI>
          <LI>FOUR</LI>
        </UL>
      </div>
      <div>
        <Div>
          <p>ONE</p>
        </Div>
        <Div>
          <p>TWO</p>
        </Div>
        <Div ref={ref}>
          <p>THREE</p>
        </Div>
        <Div>
          <p>FOUR</p>
        </Div>
      </div>
    </Row>
  );
};
export default ScrollMenu;

const Div = styled.div`
  border: 1px solid black;
  padding: 4rem;
  text-align: center;
  width: 10rem;
  margin-bottom: 2rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UL = styled.ul`
  text-decoration: none;
  list-style-type: none;
  position: fixed;
  top: 7rem;
`;

const LI = styled.li`
  font-size: 15px;
  margin-bottom: 10px;
  color: ${(props) => props.color ?? "#000"};
`;
