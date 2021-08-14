// import React, { useState } from "react";
// import Layout from '../Components/Layout';
// import { Container, Form, Row, Col, Button } from "react-bootstrap";
// import Input from '../Components/Input';
// import { Redirect } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { register } from '../redux/action/authAction';
// import { useEffect } from "react";
// import {Route, Link,Switch, useParams} from 'react-router-dom'
// import {BrowserRouter as Router} from 'react-router-dom'

// /**
//  * @author
//  * @function Signup
//  **/

// const Signup = (props) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const auth = useSelector((state) => state.auth);
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();






//   return (
//     <div>
//          {/* <Layout>
//       <Container>
//         <Row style={{ marginTop: "50px" }}>
//           <Col md={{ span: 6, offset: 3 }}>
//             <Form >
//               <Row>
//                 <Col md={6}>
//                   <Input
//                     label="First Name"
//                     placeholder="First Name"
//                     value={firstName}
//                     type="text"
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </Col>
//                 <Col md={6}>
//                   <Input
//                     label="Last Name"
//                     placeholder="Last Name"
//                     value={lastName}
//                     type="text"
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                 </Col>
//               </Row>

//               <Input
//                 label="Email"
//                 placeholder="Email"
//                 value={email}
//                 type="email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <Input
//                 label="Password"
//                 placeholder="Password"
//                 value={password}
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </Layout> */}
//     </div>



//   );
// };

// export default Signup;

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
import { register } from "../redux/action/authAction";

const Signup = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfim = () => {
    dispatch(register(formData));
    history.push("/dashboard");
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Register
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name ...."
              />
            </FormGroup>
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
          <Button
            color="primary"
            onClick={() => {
              handleConfim();
              toggle();
            }}
          >
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

export default Signup;