import { HelloWorld } from "../../App";
import React, { useState, useEffect } from "react";
import { Card, Accordion, useAccordionButton } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { RiArrowDownSLine } from "react-icons/ri";
import styled ,{keyframes,css}from "styled-components";
import { Dflex } from "../../styles";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState(false);
  HelloWorld("console.log");
const [show,setShow] = useState(false);
const shouldRenderChild = useDelayUnmount(show, 500);

const handleShowTodo=()=>{
  setShow(p=>!p)
}

  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    if (input.length > 0) {
      setTodos((p) => [
        ...p,
        {
          id: uuidv4(),
          title: input,
          description: "",
          complete: false,
          priority: {
            status: "Urgent",
          },
        },
      ]);
      setInput("");
    }
  };

  const onDelete = (id) => {
    try {
      const b = todos.filter((e) => e.id !== id);
      setTodos(b);
    } catch (err) {
      console.log(err);
    }
  };
  const handleComplete = (item, index, e) => {
    setTodos((p) => {
      todos[index].complete = e.target.checked;
      return [...p];
    });
  };
  const changePriority = (item, index, status) => {
    setTodos((p) => {
      todos[index].priority.isUrgent = status;
      return [...p];
    });
  };
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );
    return (
      <button
        type="button"
        className="ms-auto border-0 bg-transparent"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  return (
    <PageBody>
      <If condition={state === true}>jdnfkdjn</If>
      <button className="mb-3" onClick={handleShowTodo}>show</button>
      <AnimationContainer>
        {shouldRenderChild && (
          <div className={show ? "fade-in" : "fade-out"}>
           active
          </div>
        )}
      </AnimationContainer>
      <div className="m-auto w-100">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            placeholder="todo"
            name="todo"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <br />
        <div className="m-auto">
          <Accordion defaultActiveKey="0">
            {todos.map((item, index) => {
              return (
                <Card className="mb-2" key={item?.id}>
                  <Card.Header>
                    <Dflex>
                      <input
                        type={"checkbox"}
                        onChange={(e) => {
                          handleComplete(item, index, e);
                        }}
                      />
                      <div
                        style={{
                          textDecoration: `${
                            item.complete === true ? "line-through" : "none"
                          }`,
                        }}
                        className="ms-3"
                        key={index}
                      >
                        {item.title}
                      </div>
                      <CustomToggle eventKey={index}>
                        <RiArrowDownSLine />
                      </CustomToggle>
                    </Dflex>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                      <div>{item.priority.isUrgent}</div>
                      <select
                        onChange={(e) =>
                          changePriority(item, index, e.target.value)
                        }
                      >
                        <option value="Urgent">Urgent</option>
                        <option value="Not Urgent">Not Urgent</option>
                      </select>
                      <button onClick={() => onDelete(item.id)}>Delete</button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
        </div>
      </div>
    </PageBody>
  );
};

export default TodoApp;

const PageBody = styled.div`
  padding: 16px;
  height: 100vh;
  overflow: hidden;
  background-color: #fcfcfc;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  box-shadow: 0px 0px 7px #ccc;
  background: trasparent;
  padding: 8px;
  border-radius: 8px;
  outline: none;
`;

const inAnimation = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 0;
  }

  60% {
    transform: scale(1.1);
    opacity: 1;
  }

  100% {
    transform: scale(1);
  }

`;

const outAnimation = keyframes` 
  20% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const mountAnimation = css`
  animation: ${inAnimation} 500ms forwards 1 ease-in-out;
`;
const unMountAnimation = css`
  animation: ${outAnimation} 500ms forwards 1 ease-in-out;
`;

const AnimationContainer = styled.div`
  .fade-in {
    ${mountAnimation}
  }

  .fade-out {
    ${unMountAnimation}
  }
`;

const If = ({ condition = true, children }) => {
  return (
    <>
      {(() => {
        if (condition == true) {
          return <>{children}</>;
        }
        return null;
      })()}
    </>
  );
};
function useDelayUnmount(isMounted, delayTime) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}
