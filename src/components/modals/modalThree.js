import React from "react";
import { Modal, Button } from "react-bootstrap";
const ModalThree = (props) => {
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
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="text-danger">Three</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-danger">Centered Modal three</h4>
          <p className="text-danger">Modals Controlled by reducer</p>
          <Button
            className="btn-danger"
            onClick={() => props.dispatch({ type: "modal_two" })}
          >
            Open Modal two{" "}
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger" onClick={props.onHide}>
            Close
          </Button>
          <Button className="btn-danger" onClick={props.reset}>
            Quit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalThree;
