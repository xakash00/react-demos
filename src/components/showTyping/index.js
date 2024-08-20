import React, { useState } from "react";
import debounce from "lodash/debounce";
import { Input, InputBox } from "../playground/multipleInput";
import styled from "styled-components";
import { Button } from "../../styles";
const ShowTyping = () => {
  const [typing, setTyping] = useState({
    isTyping: false,
    test: ""
  });
  const [blur, setBlur] = useState(true);
  const handleTyping = debounce(() => {
    setTyping({ isTyping: false });
    console.log("typing");
  }, 500);

  const handleChange = ({ target: { name, value } }) => {
    setTyping({ isTyping: true, [name]: value });
    handleTyping();
  };

  return (
    <div className="container">
      <InputBox>
        <Input
          placeholder="Type something..."
          type="text"
          name="test"
          value={typing.test}
          onChange={handleChange}
        />
      </InputBox>
      <P className="user-typing">{typing.isTyping && "typing..."}</P>
      <Button onClick={() => setBlur((p) => !p)} className="mt-3 mb-3">
        {blur !== true ? (
          <i class="ri-lock-fill"></i>
        ) : (
          <i class="ri-lock-unlock-fill"></i>
        )}
      </Button>

      {blur !== false && <OverlayText>HIDDEN</OverlayText>}
      <Blur blur={blur === true ? "4px" : 0}>
        <ul>
          {[...new Array(20)].map((i, n) => {
            return (
              <Li className="mb-3" key={n}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </Li>
            );
          })}
        </ul>
      </Blur>
    </div>
  );
};

export default ShowTyping;

const OverlayText = styled.div`
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.2); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: relative;
  top: 9em;
  margin: auto; /* transform: translate(-50%, -50%); */
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
  color: #000;
`;
const Blur = styled.div`
  content: "";
  position: absolute;
  width: calc(85% + 0px); /* 100% + blur * 2 */
  height: calc(100% + 0px); /* 100% + blur * 2 */
  background-color: #fff;
  background-position: 50%;
  font-size: 15px;
  filter: blur(${(props) => props.blur});
  z-index: -1;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ebebee;
  }
  &::-webkit-scrollbar-track-piece {
    width: 13px;
  }
`;
const P = styled.div`
  font-size: 15px;
  color: #28d;
  margin-top: 10px;
`;

const Li = styled.li`
  user-select: none;
`;
