import React,{useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import Reducer from '../redux/reducer/reducer'
import {NavLink} from 'react-router-dom'
import {addItem} from '../redux/action/itemActions'
import {initialData} from './InitialData'
import "./Products.css"
const Products = ({el}) => {

    
    return (
        <div  className = 'product'>
           <section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				
				<img src={el.url1} alt="green apple slice"/>
			</div>
			<div class="photo-album">
				<ul>
					<li><img src={el.url1} alt="green apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>o</h1>
			<span>COD: 45999</span>
		</div>
		<div class="price">
			R$ <span>{el.price}</span>
		</div>
		<div class="variant">
			<h3>SELECT A COLOR</h3>
			<ul>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"/></li>
			</ul>
		</div>
		<div class="description">
			<h3>Description</h3>
			<ul>
				<li></li>
				<li>Apples may be good for weight loss</li>
				<li>Apples may be good for bone health</li>
				<li>They're linked to a lowest risk of diabetes</li>
			</ul>
		</div>
		<NavLink exact to = {"/cart"}>
        <button class="buy--btn" >ADD TO CART</button>
   

        </NavLink>
	</div>
</section>

<footer>
	<p>Design from <a href="https://dribbble.com/shots/5216438-Daily-UI-012">dribbble shot</a> of <a href="https://dribbble.com/rodrigorramos">Rodrigo Ramos</a></p>
</footer>
            

        </div>
    )
}

export default Products
