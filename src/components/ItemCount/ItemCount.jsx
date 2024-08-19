import { useState } from "react"
import useCounter from "../Customhook/useCount"


const ItemCount = ({stock}) => {
    const {count,sumar,restar,addToCart} = useCounter(1,stock)


return (
    <div>
    <button onClick={restar}>Restar prenda</button>
    <p>{count}</p>
    <button onClick={sumar}>Sumar prenda</button>
    <button onClick={addToCart}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount