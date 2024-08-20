import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalTwo = (props) => {
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
            <div className="text-warning">Two</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-warning">Centered Modal two</h4>
          <p className="text-warning">Modals Controlled by reducer</p>
          <Button
            className="btn-warning"
            onClick={() => props.dispatch({ type: "modal_one" })}
          >
            Open Modal One{" "}
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-warning" onClick={props.onHide}>
            Next
          </Button>
          <Button className="btn-warning" onClick={props.reset}>
            Quit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalTwo;
