import React, {useState} from 'react'
import NavBar from '../NavBar'
import {Jumbotron} from 'reactstrap'
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import './banner.css'
import '../.././App.css'
import Layout from '../Layout'
const Home = () => {
  const [title, setTitle] = useState('')

    return (
        <div>
          <NavBar setTitle = {setTitle} />
         
          <div class="banner">
  <div class="container">
    <h1>Welcome to our Website</h1>
    <h2>You can buy and sell agriculture products here</h2>
    <Button variant="success">Apply</Button>{' '}
   </div>
</div>
          
      
            
        
          
         
        </div>
    )
}

export default Home
