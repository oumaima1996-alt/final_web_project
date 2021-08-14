import React from 'react'
import Products from './Products'

const ProductList = ({product, title}) => {
    console.log("product", product)
 

    return (
        <div className="allCards">
            {/* {product.map(el =><Products el ={el} />)} */}
            {product.filter(el=> el.title.toLowerCase().includes(title.toLowerCase().trim())
         ).map(el=> ( <Products el={el}/>))}

        </div>

    )
}


export default ProductList

