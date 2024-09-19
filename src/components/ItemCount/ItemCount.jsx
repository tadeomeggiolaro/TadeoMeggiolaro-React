import { useState } from "react"
import useCounter from "../Customhook/useCount"


const ItemCount = ({stock,onAdd}) => {
    const {count,sumar,restar} = useCounter(1,stock)


return (
    <div>
    <button onClick={restar}>Restar prenda</button>
    <p>{count}</p>

    <button onClick={sumar}>Sumar prenda</button>
    {stock > 0 ? <button onClick={()=>{onAdd(count)}}>Agregar al carrito</button> : <></>}
    
    </div>
    )
}

export default ItemCount