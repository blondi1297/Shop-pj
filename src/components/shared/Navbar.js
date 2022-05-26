import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//context
import { CartContext } from '../../context/CartContextProvider';
//icon
import shopIcon from "../../icon/shopbasket.png";

const Navbar = () => {
    const {state} = useContext(CartContext);
    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                 <div>
                    <Link to="/cart"><img src={shopIcon} alt="shopicon"/></Link>
                    <span>{state.itemsCounter}</span>
                 </div>
            </div>
        </div>
    );
};

export default Navbar;