import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext/CartProvider"
import ItemCount from "../ItemCount/ItemCount"
import '../ItemDetail/ItemDetail.css'
import { useContext, useState } from "react"

const ItemDetail = ({product}) => {
  const {addItems} = useContext(CartContext); 
  const [showItemCount,setShowItemCount]= useState(true)

  const onAdd= (quantity) => {
    addItems(product,quantity);
    setShowItemCount(false)
  };


  return (
    
    <div className="bigProductDetail">
            <img className="imgShopDetail"  src={product?.image} alt='' />
            <h2>{product?.name}</h2>
            <p className="pPrice">${product?.price}</p>
            <p className="pDescription">{product?.description}</p>
            <p className="pStock">Stock:{product?.stock}</p>
            
            {showItemCount ?(
              <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
              
            ):(
              
              <Link to="/cart">Finalizar Compra</Link>
              
              )}
            

            
    </div>
  )
}

export default ItemDetail
