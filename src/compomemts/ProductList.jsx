import React from "react";
import ProductCard from "./ProductCard";

function ProductList(props) {
  const { products, addToCart } = props

  return (
    <div className="w-2/3 bg-amber-100 gap-2 px-4 ">
      <h2 className="text-2xl rounded px">Product List</h2>
      <div className="flex flex-wrap gap-3">
        {products.map(el => (

          <ProductCard key={el.id} productItem={el} addToCart={addToCart}/>))}

      </div>
    </div>
  )
}
export default ProductList