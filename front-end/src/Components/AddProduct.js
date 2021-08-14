import React, {useState} from 'react'
import {addItem} from '../redux/action/itemActions'
import {connect} from "react-redux"
import {Col ,InputGroup , Form , Button , FormControl } from 'react-bootstrap';
import Modal   from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = ({ addItem }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
      e.preventDefault();
      const newproduct = {
        id: Math.random(),
        title: title,
        price:price,
        description:description,
        category:category,
        isComplete: false,
      };
      if (title.trim() === "") {
        alert("⚠ Oops! there is no product! Please, enter new product");
      } else {
        addItem(newproduct);
        setTitle("");
        setPrice(0);
        setDescription("");
        setCategory("")
      }
    };
    return (
      <div>
          <Button variant="primary" onClick={handleShow}>
        Add your Product
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Please submit your Product </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group >
              <Form.Label>Name: </Form.Label>
              <Form.Control type="text" placeholder="name input" value={title}
            name="name"
            required
            onChange={(e) => setTitle(e.target.value)}/>    
              <Form.Label>URL: </Form.Label>
              <Form.Control type="text" placeholder="URL image input"  value={image}
              onChange={(e)=> setImage(e.target.value) }/>
              <Form.Label>Price </Form.Label>
              <Form.Control type="Number" placeholder="price input" value={price}
            price="price"
            required
            onChange={(e) => setPrice(e.target.value)}/> 
              <Form.Label>Description </Form.Label>
              <Form.Control type="text" placeholder="description input" value={description}
            price="description"
            required
            onChange={(e) => setDescription(e.target.value)}/> 
              
              <Form.Label>Category </Form.Label>
              <Form.Control type="text" placeholder="category input" value={category}
            price="category"
            required
            onChange={(e) => setCategory(e.target.value)}/> 
               
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 

        
      </div>
    );
  };
  
  export default connect(null, { addItem })(AddProduct);



    
    