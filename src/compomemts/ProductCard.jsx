import React, { use, useState } from "react";

function ProductCard(props) {
  const [showDesc,setShowDesc] = useState(false)
  const { addToCart, productItem: { id, category, description, title, image, price, rating } } = props
  return (
    <div>
      <div className="card bg-base-100 w-70 shadow-sm pt-5">
        <figure className="h-40 w-2/3 mx-auto">
          <img className="h-full w-full object-contain"
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{category}</p>
          <p className={`cursor-pointer ${showDesc ? '':"line-clamp-3"}`}
          onClick={()=>setShowDesc(prv=>!prv)}>{description}</p>
          <p className="text-sky-400 text-2xl">฿{price.toFixed(2)}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-pink-300"
            onClick={()=>addToCart(id,title,price)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard