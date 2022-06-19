import React from "react";
import {useDispatch} from "react-redux"

//actions
import { decrease, increase, removeItem } from "../../redux/cart/cartAction";

//function
import { shorten } from "../../helper/function";
//icon
import trashIcon from "../../icon/trash.svg"
//styles
import styles from "./Cart.module.css"

const Cart = (props) => {

  const dispatch = useDispatch()
  const { image, title, quantity, price } = props.data;

  return ( 
            <div className={styles.container}>
                <img className={styles.productImage} src={image} alt="product" />
                <div className={styles.data}>
                    <h3>{shorten(title)}</h3>
                    <p>{price} $</p>
                </div>
                <div>
                    <span className={styles.quantity}>{quantity}</span>
                </div>
                <div className={styles.buttonContainer}>
                    {
                        quantity > 1 ?
                        <button onClick={() => dispatch(decrease(props.data))}>-</button> :
                        <button onClick={() => dispatch(removeItem(props.data))}><img src={trashIcon} alt="trashicon" style={{width: "20px"}}/></button>
                    }
                    {
                        <button onClick={() => dispatch(increase(props.data))}>+</button>
                    }
                </div>
            </div>); 
        
};

export default Cart;
