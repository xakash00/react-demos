import React, { useReducer } from "react";
import styled from "styled-components";
import { initialState, ModalReducer } from "./reducers/modalReducer";
import Modal1 from "./modalOne";
import Modal2 from "./modalTwo";
import Modal3 from "./modalThree";
const ModalUsage = () => {
  const [state, dispatch] = useReducer(ModalReducer, initialState);
  const handleModalShow = (modalName) => {
    dispatch({ type: modalName });
  };

  return (
    <>
      <div className="container-fluid">
        <h5 className="text-center mb-5">Modals Controlled by Reducer</h5>
        <ButtonContainer>
          <ModalButton
            bgColor="green"
            color="#fff"
            className="me-2"
            onClick={() => handleModalShow("modal_one")}
          >
            First Modal
          </ModalButton>
          <ModalButton
            bgColor="yellow"
            color="#000"
            className="me-2"
            onClick={() => handleModalShow("modal_two")}
          >
            Second Modal
          </ModalButton>
          <ModalButton
            bgColor="crimson"
            color="#fff"
            className=""
            onClick={() => handleModalShow("modal_three")}
          >
            Third Modal
          </ModalButton>
        </ButtonContainer>
      </div>
      <>
        <Modal1
          dispatch={dispatch}
          show={state.one}
          onHide={() => {
            handleModalShow("modal_two");
          }}
          reset={() => handleModalShow("reset")}
        />
        <Modal2
          dispatch={dispatch}
          show={state.two}
          onHide={() => {
            handleModalShow("modal_three");
          }}
          reset={() => handleModalShow("reset")}
        />
        <Modal3
          dispatch={dispatch}
          show={state.three}
          onHide={() => {
            dispatch({ type: "reset" });
          }}
          reset={() => dispatch({ type: "reset" })}
        />
      </>
    </>
  );
};

export default ModalUsage;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  width: 50%;
`;

const ModalButton = styled.button`
  color: ${(props) => (props.color ? props.color : "#000")};
  background-color: ${(props) => (props.color ? props.bgColor : "#ccc")};
  border: none;
  border-radius: 8px;
  font-size: 15px;
  padding: 4px 16px 4px 16px;
`;
