import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Reducer from '../redux/reducer/reducer'
import { NavLink } from 'react-router-dom'
import { addItem } from '../redux/action/itemActions'
import { initialData } from './InitialData'

import { Card, ListGroup, ListGroupItem, Form, Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Products.css"
const Products = ({product}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [fileName, setFileName] = useState('')
  const user = useSelector((state) => state.authReducer.user)
  const onChangeFile = (e) => {
    setFileName(e.target.files)
    // console.log(product.files)

  };
  // const handleProductPictures = (e) => {
  //   setFileName([...fileName, e.target.files[0]]);
  // };
  console.log("file", fileName)
  const submitProductForm = () => {
    const form = new FormData();
    //  const formData = new FormData();
    form.append("title", title);
    form.append("price", price);
    form.append("description", description)
    form.append("category", category)
    // for (let pic of fileName) {
    //   form.append("productPicture", pic);
    // }
    for (let i = 0;i<fileName.length;i++){
      form.append("files", fileName[i])
    }

    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('')
    console.log('form',form)

    dispatch(addItem(user._id, form));

  };
  // console.log("user", user)
  return (
    <>
      <div>

        <Button variant="primary" onClick={handleShow}>
          Add product
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Here to add you product </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formFile" className="mb-3">

              <Form.Label>Choose image</Form.Label>
              <Form.Control
                multiple
                type="file"
                filename="files"
                onChange={onChangeFile} />
            </Form.Group>
            <Form.Group >
              <Form.Label>Name: </Form.Label>
              <Form.Control type="text" placeholder="name input" value={title}
                name="name"

                onChange={(e) => setTitle(e.target.value)} />
              <Form.Label>PRICE</Form.Label>
              <Form.Control type="Number" placeholder="price" value={price}
                onChange={(e) => setPrice(e.target.value)} />
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="description" value={description}
                onChange={(e) => setDescription(e.target.value)} />
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="category" value={category}
                onChange={(e) => setCategory(e.target.value)} />

            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submitProductForm}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>







      </div>
    </>







  )
}

export default Products
