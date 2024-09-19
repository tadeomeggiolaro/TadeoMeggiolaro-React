import { CartContext } from '../../context/CartContext/CartProvider'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import './CartDetail.css'



const CartDetail = ({cart}) => {
    const {clearCart,totalCart,totalCartProduct,removeItems,buy} = 
useContext(CartContext)

return (
    <div className='divCartDetail'>
    <h2>Carrito de compras</h2>
    {cart.map((item) => 
    <div key={item.product.id}>
        <img className='imgCart' src={item.product.image}alt={item.product.name}></img>
        <p>{item.product.name}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio: ${item.product.price}</p>


        <button onClick={() => removeItems(item.product.id)}>Eliminar del carrito</button>

    </div>
    )}


    <h3>Total productos: {totalCartProduct()}</h3>
    <h3>Total a pagar: $ {totalCart()}</h3>
    <button onClick={clearCart}>Limpiar carrito</button>
    <Link to={"/checkout"}>Comprar</Link>


    </div>
)
}

export default CartDetail
