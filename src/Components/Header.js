import { Link, NavLink } from 'react-router-dom'
import logo from "../asset/logo.jpeg"
import { useCart } from '../CartContext/CartContext'

export const Header = () => {
    const {Cartlistitem}=useCart()
    return (
        <header>
            <div>
                <Link to="/" className='logo' >
                    <img src={logo} alt='sau' />
                    <span> TradeMart</span>
                </Link>
            </div>
            <div className='List'>
                    <ul>
                        <li>
                            <NavLink to="/" className="navlink">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className='navlink'>Cart</NavLink>
                        </li>
                    </ul>
            
            </div>
            <div>
                <span>Cart : {Cartlistitem.length} </span>
            </div>
        </header>

    )
}


