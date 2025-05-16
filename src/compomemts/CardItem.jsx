import React from "react";


function CardItem(props) {
const {addToCart, decQuantity , item: {id,title,price,quantity}} = props
  return (
    <div className="flex justify-between px-1.5">
        <p className="flex min-w-2/5">{title.split(' ')[0] + ' ' +title.split(" ")[1] }</p>
        <div className="flex gap-1 grow">
        <p className="border w-5 h-5 flex justify-center items-center cursor-pointer"
        onClick={()=>decQuantity(id)}>-</p>
        <p className="border w-5 h-5 flex justify-center items-center cursor-pointer"
        onClick={()=>addToCart(id)}>+</p>
      </div>
      <p>{quantity}*฿{price}</p>
    </div>
  )
}
export default CardItem