import React, {useState} from 'react'
import ProductCardD from './ProductCardD'
import { useSelector } from 'react-redux'
const ProductListD = ({products,title,  user}) => {
    console.log('productslist', products)
    // const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const myProducts = useSelector((state)=>state.authReducer.user.products)
     console.log("dashbord poduct", myProducts)
    return (
        <div className="allCards">
            {/* { products && products.map(product =><ProductCardD product ={product} />)} */}
            {/* { products && products.filter(product=> product.title.toLowerCase().includes(title.toLowerCase().trim()))
            .map(product=> ( <ProductCard product={product}/>))} */}
            
            
              {
              myProducts.length ===0 ?
              (<h1>there is no product</h1>):(products && products.filter((el)=>el.title.toLowerCase()
              .includes(title.toLowerCase().trim())).map((product, i)=>{
                  for(let j=0; j<myProducts.length;j++) {
                  if(Object.values(product)[2]===myProducts[j]) {
                      return <ProductCardD key = {i} user = {user} product = {product}/>
                  }
              }
              return null
            })
            ) }


{/* {
              myProducts.length ===0 ?
              (<h1>there is no product</h1>):(products && products.map((product, i)=>{
                  for(let j=0; j<myProducts.length;j++) {
                  if(Object.values(product)[2]===myProducts[j]) {
                      return <ProductCardD key = {i} user = {user} product = {product}/>
                  }
              }
              return null
            })
            ) } */}

        </div>

    )
}


export default ProductListD

