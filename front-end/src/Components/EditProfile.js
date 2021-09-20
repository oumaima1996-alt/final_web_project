import React, { useState, useEffect } from 'react'
// import { , Form, Row, Col, Button } from "react-bootstrap";
import Input from "../Components/Input"
import { updateUser } from '../redux/action/authAction';
import { Link,  useHistory } from "react-router-dom"
import { Container, Col, Card, ListGroup, ListGroupItem, Form, Modal, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
const ProfileCard = ({ user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [_id, setId] = useState(0)
  const dispatch = useDispatch();
  const history = useHistory();
  const getPerson = () => {
    setName(user.name)
    setEmail(user.email)
    // setPassword(user.password)
    setId(user._id)
  };
  const EditOneUser = () => {
    dispatch(updateUser(_id, { name, email }))
    setName("");
    setEmail("");
    // setPassword("");

    history.push("/person");

    // setId(user._id)
  }
  const handleDelete = () => {
    // dispatch(logout())
    window.location.reload(false)
}
  return (
    <div>
      <Button  className = "btn-pro"  variant="primary" onClick={() => {

        handleShow();
        getPerson(user)
      }}>
        update your coordinates
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>update </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group >
            <Form.Label>Name: </Form.Label>
            <Form.Control type="text" placeholder="name input" value={name}
              name="name"

              onChange={(e) => setName(e.target.value)} />
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="email" value={email}
              onChange={(e) => setEmail(e.target.value)} />
            {/* <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="password" value={password}
              onChange={(e) => setPassword(e.target.value)} /> */}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={() => {
            EditOneUser();
            handleClose();
            handleDelete()
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default ProfileCard
