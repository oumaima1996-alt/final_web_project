import React,{useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import Reducer from '../redux/reducer/reducer'
import {NavLink, Link} from 'react-router-dom'
import {addItem} from '../redux/action/itemActions'
import {initialData} from './InitialData'
import {Card, ListGroup, ListGroupItem,Carousel } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteProduct } from '../redux/action/itemActions'
import "./Products.css"
const ProductCardD = ({product, getProduct, user}) => {
    console.log('productcard', product)
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [fileName, setFileName] = useState([]);

    const [myProduct, setMyProduct] = useState([])

    const dispatch = useDispatch()
    
    const DeleteOneProduct = (idProduct,idUser) => {
      dispatch(deleteProduct(idProduct, idUser));
      setMyProduct(myProduct.filter((el)=>el.id !== idProduct))
    }
    console.log("filecard", product.files)
    return (
      

		
        <div>
{/*          
<Card style={{ width: '18rem' }}>
<Carousel interval = {40000} prevLabel=""  nextLabel="">
  {product.files.map((file,i)=>{


    return (
      <Carousel.Item key={i}>
    <img
      className="d-block w-100"
      src={`/uploads/${file.files}`}
      height="260px"
      width="100%"
      alt={file.files}
    />
   
  </Carousel.Item>
    )
  }
  )}

  
    
</Carousel>
  <Card.Body>
    <Card.Title>Title : {product.title}</Card.Title>
    <Card.Text>
      {product.description }
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Price DT : {product.price} </ListGroupItem>
    <ListGroupItem>Category : {product.category}</ListGroupItem>
    <ListGroupItem>Description: {product.description}</ListGroupItem>

  </ListGroup>
  <Card.Body>
  <button>
  <Link to={`/updateproduct/${product._id}`}> <span>edit</span> </Link> </button> 
            <button  onClick={()=>{DeleteOneProduct(product._id, user._id);
           
            }}> delete </button>
                    <NavLink to={'/cart'}><button>Add to Cart</button></NavLink>
  </Card.Body>
</Card> */}


{/* <div class="container d-flex justify-content-center">
    <figure class="card card-product-grid card-lg"> <Carousel interval={40000} prevLabel="" nextLabel="">
          {product.files.map((file, i) => {
            return (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={`/uploads/${file.files}`}
                  height="260px"
                  width="100%"
                  alt={file.files}
                />

              </Carousel.Item>
            )
          }
          )}
        </Carousel>
        <figcaption class="info-wrap">
            <div class="row">
                <div class="col-md-9 col-xs-9"> <a href="#" class="title" data-abc="true">Title : {product.title}</a> <span class="rated"></span> </div>
                <div class="col-md-3 col-xs-3">
                    
                </div>
            </div>
        </figcaption>
        <div class="bottom-wrap-payment">
            <figcaption class="info-wrap">
                <div class="row">
                    <div class="col-md-9 col-xs-9"> <a href="#" class="title" data-abc="true">Price DT : {product.price}</a>  </div>
                    <div class="col-md-9 col-xs-9"> <a href="#" class="title" data-abc="true">Category : {product.category}</a>  </div>
                    <div class="col-md-9 col-xs-9"> <a href="#" class="title" data-abc="true">Decription : {product.description}</a>  </div>


                    <div class="col-md-3 col-xs-3">
                       
                    </div>
                </div>
            </figcaption>
        </div>
        <div class="bottom-wrap"> <button> 
        <Link to={`/updateproduct/${product._id}`}> <span>edit</span> </Link> </button> 
            <button  onClick={()=>{DeleteOneProduct(product._id, user._id);
           
            }}> delete </button>
                    <NavLink to={'/cart'}><button>Add to Cart</button></NavLink>

        </div>
    </figure>
</div> */}



<Card bg="dark" style={{ width: '18rem' }} className='cardStyle'>
        <Carousel interval={40000} prevLabel="" nextLabel="">
          {product.files.map((file, i) => {


            return (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={`/uploads/${file.files}`}
                  height="260px"
                  width="100%"
                  alt={file.files}
                />

              </Carousel.Item>
            )
          }
          )}



        </Carousel>
        <Card.Body>
          <Card.Title style={{ color: "burlywood" }}> Title: {product.title}</Card.Title>
          <Card.Title style={{ color: "burlywood" }}> price en DT: {product.price}</Card.Title>
          <Card.Title style={{ color: "burlywood" }}> Category:{product.category}</Card.Title>
          <Card.Title style={{ color: "burlywood" }}> description: {product.description}</Card.Title>
          <button><Link to={`/updateproduct/${product._id}`}> <span>edit</span> </Link> </button> 
            <button  onClick={()=>{DeleteOneProduct(product._id, user._id);
           
            }}> delete </button>
          <NavLink to={'/cart'}><button>Add to Cart</button></NavLink>

        </Card.Body>
      </Card>


        </div>
        
	    

        

            

        
    )
}

export default ProductCardD

