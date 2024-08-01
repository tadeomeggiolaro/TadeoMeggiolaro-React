import logo from "../../assets/img/logoPrincipal.png"
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
const NavBar = () => {

return (
    
    <div className="nav-wraper">
            <nav>
                <div className="menu">
                    <ul>
                        
                        <img className="imgLogo" src={logo} alt="" />
                        
                        <div className="nav-li">
                            {[{text:'Inicio'},{text:'Comprar'},{text:'Carrito'},{text:'Nosotros'}].map(link=><li><a href="#">{link.text}</a></li>)}
                        </div>
                            <CartWidget/>
                    </ul>
                </div>
            </nav>
        </div>
)
}

export default NavBar;


