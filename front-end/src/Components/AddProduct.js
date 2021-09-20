// import React, {useState} from 'react'
// import {addItem} from '../redux/action/itemActions'
// import {connect} from "react-redux"
// import {Col ,InputGroup , Form , Button , FormControl } from 'react-bootstrap';
// import Modal   from 'react-bootstrap/Modal'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from "react-router-dom"
// import {useDispatch} from "react-redux"
// const AddProduct = ({user, AddProducts}) => {
   
//   const dispatch = useDispatch()
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState(0);
//     const [description, setDescription] = useState("");
//     const [category, setCategory] = useState("");
//     const [fileName, setFileName] = useState('')
//     const onChangeFile =(e)=> {
//       setFileName(e.target.value)
//     };
//     const onClickChange = ()=>{
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("price", price);
//       formData.append("description", description)
//       formData.append("category", category)


//       for (let i =0; i< fileName.length; i++){
//         formData.append("files", fileName[i])
//       }
//       setTitle('')
//       setPrice(0)
//       setDescription('')
//       setCategory('')
//       dispatch(addItem(formData))
//     }
//     return (
//       <div>
       
//          {/* <input type='text'  placeholder='enter your product name '   onChange={(e)=>setTitle(e.target.value)} />
//          <input type='text'  placeholder='enter the price '  onChange={(e)=>setPrice(e.target.value)} />
//          <input type='text'  placeholder='enter a description'   onChange={(e)=>setDescription(e.target.value)}/>
//          <input type='text'  placeholder='enter your product category'   onChange={(e)=>setCategory(e.target.value)}/> */}

//         {/* <Link to="product"> <button onClick={AddProducts}> add product</button> </Link> */}
//         <Button variant="primary" onClick={handleShow}>
//         Add product
//       </Button>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Here to add you product </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form.Group controlId="formFile" className="mb-3">
//     <Form.Label>Choose image</Form.Label>
//     <Form.Control 
//     multiple
//     type="file" 
//     fileName="files"
//     onChange = {onChangeFile}/>
//   </Form.Group>
//         <Form.Group >
//               <Form.Label>Name: </Form.Label>
//               <Form.Control type="text" placeholder="name input" value={title}
//             name="name"
//             required
//             onChange={(e) => setTitle(e.target.value)}/>    
//               <Form.Label>PRICE</Form.Label>
//               <Form.Control type="Number" placeholder="price"  value={price}
//               onChange={(e)=> setPrice(e.target.value) }/>
             
               
//           </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={onClickChange}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal> 
//       </div>
//     );
//   };
  
//   export default AddProduct;



    
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Reducer from '../redux/reducer/reducer'
import { NavLink } from 'react-router-dom'
import { addItem } from '../redux/action/itemActions'
import { initialData } from './InitialData'

import { Card, ListGroup, ListGroupItem, Form, Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Products.css"
const AddProduct = () => {
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
    setFileName(e.target.value)
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
                fileName="files"
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

export default AddProduct
