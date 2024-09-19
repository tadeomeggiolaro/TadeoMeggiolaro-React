import logo from "../../assets/img/logoPrincipal.png"
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import { Link,NavLink } from "react-router-dom"
const NavBar = () => {

return (
    
    <div className="nav-wraper">
            <nav>
                <div className="menu">
                    <ul>
                        
                    <NavLink to='/'><img className="imgLogo" src={logo} alt="" /></NavLink>
                        <div className="nav-li">
                            <li>
                                <NavLink to="/category/buzo" className={({isActive})=>(isActive?'link active':'categoryLink')}>Buzos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/remera" className={({isActive})=>(isActive?'link active':'categoryLink')}>Remeras</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/pantalon" className={({isActive})=>(isActive?'link active':'categoryLink')}>Pantalones</NavLink>
                            </li>
                            </div>
                            <CartWidget/>
                    </ul>
                </div>
            </nav>
        </div>
)
}

export default NavBar;


