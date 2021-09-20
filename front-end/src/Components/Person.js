import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../Components/Input";
import { deleteUsers, logout } from '../redux/action/authAction'
import { updateProfile } from '../redux/action/authAction'
import EditProfile from './EditProfile'
import { Link, useHistory } from "react-router-dom";
import {Card, ListGroup, ListGroupItem,Carousel } from 'react-bootstrap'

import t from "typy"
import '../App.css'
import { useSelector, useDispatch } from "react-redux";

const Person = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.authReducer.user)
    console.log('user', user)

    const DeleteOneUser = () => {
       
        dispatch(deleteUsers(user._id))
        // dispatch(logout()) 
        history.push("/");

    };
    const handleDelete = () => {
        // dispatch(logout())
        window.location.reload(false)
    }
    const name = t(user, "name").safeObject;
    const email = t(user, "email").safeObject;

        return (
            <div>
                {/* <p>Name :{name} </p>
                <p>Email : {email}</p>
                {/* <p>Password : {user.password}</p> */}
                {/* <EditProfile user={user} />
                <button  className = "btn-pro" onClick={() => {
                    DeleteOneUser(user);
                    handleDelete()

                    
                }}>Delete User</button>  */}



<Card>

  <ListGroup className="list-group-flush">
    <ListGroupItem>Name :{name} </ListGroupItem>
    <ListGroupItem>Email : {email}</ListGroupItem>

  </ListGroup>
  <EditProfile user={user} />
  <Card.Body>
  <button  className = "btn-pro" onClick={() => {
                    DeleteOneUser(user);
                    handleDelete()

                    
                }}>Delete User</button>
  </Card.Body>
</Card>

            </div>
        )
    }
export default Person








