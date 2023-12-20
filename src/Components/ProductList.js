import React from 'react'

import Product from './Product';


export default function ProductList(props) {
    console.log(props.productList)
  return ( 
        props.productList.length > 0 ?
        props.productList.map((product,i)=>{
            return <Product 
            product={product} 
            key={i} 
            incrementQuantity={props.incrementQuantity} 
            index={i} 
            decrementQuantity={props.decrementQuantity}
            removeItem={props.removeItem}/>
        }) :
        <h2> No Products exist in the cart</h2>
  )
}
