// import React, { useState, useEffect } from 'react';
// import Layout from '../Components/Layout';
// import { Container, Form, Row, Col, Button } from 'react-bootstrap';
// import Input from '../Components/Input';
// import { login } from '../redux/action/authAction';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom'
// import {Route, Link,Switch, useParams} from 'react-router-dom'
// /**
// * @author
// * @function Signin
// **/

// const Signin = () => {
    
    
//     return (
//        <div>
//          {/* <Layout>
//             <Container>
//                 <Row style={{ marginTop: '50px' }}>
//                     <Col md={{span: 6, offset: 3}}>
//                         <Form   onSubmit={userLogin}>
//                             <Input 
//                                 label="Email"
//                                 placeholder="Email"
//                                 value={email}
//                                 type="email"
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />

//                             <Input 
//                                 label="Password"
//                                 placeholder="Password"
//                                 value={password}
//                                 type="password"
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
                           

//                         <Form></Form>
//                          <Button variant="primary" type="submit">
//                                 Submit
//                             </Button>
                        
                          
//                         </Form>
//                     </Col>
//                 </Row>
                
//             </Container>
//         </Layout> */}
//        </div>
            
//     )

// }

// export default Signin


import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../redux/action/authAction";

const Signin = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleConfim = () => {
    dispatch(login(formData));
    history.push("/dashboard");
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        login
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={handleFormChange}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Email..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">password</Label>
              <Input
                onChange={handleFormChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleConfim}>
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Signin;