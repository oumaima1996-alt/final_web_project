import React, {useState,  useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { updateProduct } from '../redux/action/itemActions'
import {Link} from "react-router-dom"
import { Card, ListGroup, ListGroupItem, Form, Modal, Button } from 'react-bootstrap'
import axios from 'axios'

const EditProduct = (props) => {
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
  const onClickChange = (e) => {
    e.preventDefault()
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

    dispatch(updateProduct(props.match.params.id,form))
    ;

  };
  useEffect(()=> {
    axios.get(`/product/${props.match.params.id}`)
    .then((res)=> [
      setTitle(res.data.title),
      setPrice(res.data.price),
      setDescription(res.data.description),
      setCategory(res.data.category), 
      setFileName(res.data.files)




    ])
    .catch((error)=>console.log(error))
  }, [`${props.match.params.id}`])

    return (
        <div>
             <Button variant="primary" onClick={handleShow}>
          update product
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>update product </Modal.Title>
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
            <Button variant="primary" onClick={onClickChange}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
            
        
            
        </div>
    )
}

export default EditProduct
