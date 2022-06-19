import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"

//icon
import shopIcon from "../../icon/shopbasket.png";
//style
import styles from "./Navbar.module.css"

const Navbar = () => {

    const state = useSelector(state => state.cartState)

    return (
        <div className={styles.maincontainer}>
            <div className={styles.container}>
                <Link className={styles.productlink} to="/products">Products</Link>
                 <div className={styles.icon}>
                    <Link to="/cart"><img src={shopIcon} alt="shopicon"/></Link>
                    <span className={ state.itemsCounter ? styles.iconMorethanZero : styles.iconZero }>{state.itemsCounter}</span>
                 </div>
            </div>
        </div>
    );
};

export default Navbar;