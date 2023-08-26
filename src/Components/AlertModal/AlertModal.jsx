import React from "react";
import { Modal } from "react-bootstrap";

const AlertModal = ({ show, setShow, type, msg }) => {
  return (
    <React.Fragment>
      {type === "alert" && (
        <Modal centered show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <div className="header__text">Error</div>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">Enter your Message</div>
          </Modal.Body>
        </Modal>
      )}

      {type === "success" && (
        <Modal centered show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <div className="header__text text-success">Success</div>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">Enter your Message</div>
          </Modal.Body>
        </Modal>
      )}

      {type === "confirm" && (
        <Modal centered show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="text-center">Enter your Message</div>
          </Modal.Body>
          <Modal.Footer className="px-0">
            <div className="d-flex align-items-center gap-2 w-100">
              <button
                type="button"
                className="btn btn-border w-100"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-dark w-100">
                Save
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default AlertModal;
