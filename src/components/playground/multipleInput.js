import React, { useState } from "react";
import styled from "styled-components";
const MulitpleInputs = () => {
  const [input, setInput] = useState("");
  const [myData, setMyData] = useState(["apple", "cat"]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (myData.length < 5 && input.length > 1) {
      setMyData([...new Set([...myData, input])]);
    }
    setInput("");
  };

  const onDelete = (myId) => {
    const updates = myData.filter((each, idx) => idx !== myId);
    setMyData(updates);
  };

  return (
    <>
      <InputBox>
        <ChoiceChipContainer>
          <Wrapper>
            {myData.map((item, i) => {
              return (
                <ChoiceChip key={i}>
                  <Item>{item}</Item>
                  <CancelBtn
                    onClick={(e) => {
                      onDelete(i);
                    }}
                  >
                    <Icon className="ri-close-circle-fill"></Icon>
                  </CancelBtn>
                </ChoiceChip>
              );
            })}
            <form onSubmit={onSubmit}>
              {myData.length < 5 && (
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Add Item"
                />
              )}
            </form>
          </Wrapper>
        </ChoiceChipContainer>
      </InputBox>
    </>
  );
};

export default MulitpleInputs;

export const Input = styled.input`
  outline: none;
  width: 100%;
  margin: 4px;
  border: none;
  border-radius: 8px;
  padding: 5px;
  ::placeholder {
    font-size: 15px;
    color: #28d;
  }
`;

export const InputBox = styled.div`
  border: 1px solid #d4f1f4;
  border-radius: 8px;
  padding: 5px;
  display: flex;
  /* align-items: center; */
  overflow: hidden;
  box-shadow: 0px 0px 7px #ccc;

  width: 100%;
`;
const ChoiceChipContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* overflow: hidden; */
`;

const ChoiceChip = styled.div`
  border: none;
  background-color: #d4f1f4;
  width: max-content;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  margin: 3px;
  align-items: center;
`;
const CancelBtn = styled.button`
  border: none;
  background: none;
  margin-left: 4px;
`;
const Icon = styled.i`
  color: #28d;
`;
const Item = styled.div`
  max-width: 60px;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
