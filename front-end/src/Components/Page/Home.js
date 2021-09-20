import React, {useState} from 'react'
import NavBar from '../NavBar'
import ProductList from '../ProductList'

import {Jumbotron} from 'reactstrap'
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import './banner.css'
import '../.././App.css'
import Layout from '../Layout'
const Home = ({products , title}) => {
//  const [title, setTitle]= useState('')

    return (
        <div>
         
          {/* <div class="banner">
  <div class="container">
    <h1>Welcome to our Website</h1>
    <h2>You can buy and sell agriculture products here</h2>
    <Button variant="success">Apply</Button>{' '} */}

    <ProductList  products = {products}  title = {title}/>
   
</div>
          
      
            
        
          
         
       
    )
}

export default Home
