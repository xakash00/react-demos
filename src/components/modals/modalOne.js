import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../redux/actions/openSidebarAction";
const ModalOne = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        backdrop="static"
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-success"
          >
            One
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-success">Centered Modal One</h4>
          <p className="text-success">Modals Controlled by reducer</p>
          <Button
            className="btn-success me-2"
            onClick={() => props.dispatch({ type: "modal_three" })}
          >
            Open Modal three{" "}
          </Button>
          <Button
            className="btn-success"
            onClick={() => dispatch(openSidebar())}
          >
            Open Sidebar{" "}
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-success" onClick={props.onHide}>
            Next
          </Button>
          <Button className="btn-success" onClick={props.reset}>
            Quit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalOne;
