import React, { useState } from "react";
import Layout from "../Components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../Components/Input";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function Profile(props) {
  const x = props.location
    const y = props.history;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  const user = useSelector(state => state.authReducer.user)
  //   if(!user)
  //   {
  //     return <h1> waiting ... </h1>
  // }

    
    // const auth = useSelector((state) => state.auth);
    // const dispatch = useDispatch();

    return (
        <div>

<div className="display-btn">
        <button className="go-back-btn" onClick={()=>y.push("/dashboard")}>«</button>
        </div>
        
        <Layout>
      <Container>
        
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>

              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              /> 

              <p><textarea > about me</textarea></p>
              <Button variant="primary" type="submit">
                Save changes
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
        </div>
    )
}

export default Profile
