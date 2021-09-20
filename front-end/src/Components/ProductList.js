import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
const ProductList = ({ products, title,  user }) => {
    console.log('productslist', products)
    // const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    return (
        <div className="allCards">

            {/* { products && products
            .map(product=> ( <ProductCard product={product}/>))} */}




            {products && products.filter(el => el.title.toLowerCase().includes(title.toLowerCase().trim())
            ).map(product => (<ProductCard product={product} />))}

            {/* {
              products && products.filter((el)=>el.title.toLowerCase()
              .includes(title.toLowerCase().trim())).map((product)=>
                     ( <ProductCard  product = {product}/>))} */}





        </div>

    )
}


export default ProductList

