import React,{useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import Reducer from '../redux/reducer/reducer'
import {NavLink} from 'react-router-dom'
import {addItem} from '../redux/action/itemActions'
import {initialData} from './InitialData'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Products.css"
const Products = ({el}) => {

    
    return (
		<>
        <div>
            <Card bg="dark" style={{ width: '18rem' }} className='cardStyle'>
                <Card.Img variant="top" src={el.url1} alt={el.url1} className='img'/>
                <Card.Body>
                    <Card.Title style={{color:"burlywood"}}> Title : {el.title}</Card.Title> 
					<Card.Title style={{color:"burlywood"}}> Price : {el.price}</Card.Title> 
					<Card.Title style={{color:"burlywood"}}> Description : {el.description}</Card.Title> 

                    <NavLink to={'/cart'}><button>Add to Cart</button></NavLink>
                </Card.Body>
            </Card>
        </div>
        </>
	    



            

        
    )
}

export default Products
