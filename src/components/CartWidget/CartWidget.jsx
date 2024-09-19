import "./CartWidget.css"
import { PiShoppingCartThin } from "react-icons/pi";
import { CartContext } from "../../context/CartContext/CartProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";


const CartWidgets = () => {

  const {totalCartProduct} = useContext(CartContext)
  return (
    <Link to={'/cart'} className="div-cart">
      {totalCartProduct()===0 ? null : totalCartProduct()}
      <PiShoppingCartThin />
      
    </Link>
  )
}

export default CartWidgets
