import React from "react";
import { Modal, Button } from "react-bootstrap";

/**
 * @author
 * @function Modal
 **/

const NewModal = (props) => {
  return (
    // <Modal size={props.size} show={props.show} onHide={props.handleClose}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>{props.modalTitle}</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>{props.children}</Modal.Body>
    //   <Modal.Footer>
    //     {props.buttons ? (
    //       props.buttons.map((btn, index) => (
    //         <Button key={index} variant={btn.color} onClick={btn.onClick}>
    //           {btn.label}
    //         </Button>
    //       ))
    //     ) : (
    //       <Button
    //         variant="primary"
    //         {...props}
    //         style={{ backgroundColor: "#333" }}
    //         className="btn-sm"
    //         onClick={props.onSubmit}
    //       >
    //         Save
    //       </Button>
    //     )}
    //   </Modal.Footer>
    // </Modal>
    <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary">Close</Button>
      <Button variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>


  );
};

export default NewModal;