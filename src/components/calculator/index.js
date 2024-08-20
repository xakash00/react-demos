import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calci } from "../../redux/actions/calculate";
import styled from "styled-components";
const Calc = () => {
  const [state, setstate] = useState("");
  console.log(state);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculate);

  const onclickhandler = (e) => {
    const New = state + e.target.value;
    console.log(New);
    setstate(New.toString());
  };

  function clearbutton() {
    setstate("");
  }
  function onecut() {
    setstate(state.slice(0, -1));
  }

  return (
    <div>
      {" "}
      <div className="App">
        <h2>Calculate with redux</h2>
        <CalcContainer>
          <Input value={state} />
          {<Result>{result}</Result>}
          <div className="btn">
            <button onClick={clearbutton}>C</button>
            <button onClick={onecut}>
              <i class="fas fa-backspace"></i>
            </button>
            <div className="row">
              <div className="d-flex align-items-center">
                {" "}
                <Button onClick={onclickhandler} name="7" value="7">
                  7
                </Button>
                <Button onClick={onclickhandler} name="8" value="8">
                  8
                </Button>
                <Button onClick={onclickhandler} value="9">
                  9
                </Button>
              </div>
              <div className="d-flex align-items-center">
                {" "}
                <Button onClick={onclickhandler} value="4">
                  4
                </Button>
                <Button onClick={onclickhandler} value="5">
                  5
                </Button>
                <Button onClick={onclickhandler} value="6">
                  6
                </Button>
              </div>
              <div className="d-flex align-items-center">
                {" "}
                <Button onClick={onclickhandler} value="1">
                  1
                </Button>
                <Button onClick={onclickhandler} value="2">
                  2
                </Button>
                <Button onClick={onclickhandler} value="3">
                  3
                </Button>
              </div>
            </div>
            <div className="row">
              {" "}
              <Button onClick={onclickhandler} value="/">
                /
              </Button>
              <Operands onClick={onclickhandler} value="*">
                *
              </Operands>{" "}
              <Button onClick={onclickhandler} value="-">
                -
              </Button>
              <button onClick={onclickhandler} value="+">
                +
              </button>{" "}
              <button onClick={() => dispatch(calci(state))}>=</button>
            </div>
          </div>
          <h4>Simplyfied value:</h4>
        </CalcContainer>
      </div>
    </div>
  );
};
export default Calc;

const CalcContainer = styled.div`
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 7px #ccc;
  border: 1px solid #ccc;
  width: 300px;
  background-color: #1c1c1c;
  margin: auto;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  text-align: right;
  background: none;
  color: #fcfcfc;
  font-weight: 600;
`;

const Button = styled.button`
  background-color: gray;
  padding: 16px;
  border-radius: 100px;
  color: #fcfcfc;
`;
const Result = styled.div`
  color: #fcfcfc;
  text-align: right;
  font-weight: 600;
`;
const Operands = styled.button`
  background-color: orange;
  color: #fcfcfc;
  padding: 16px;
  border-radius: 100px;
`;
