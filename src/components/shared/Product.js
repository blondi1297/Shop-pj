import React, { useContext } from "react";
import { Link } from "react-router-dom";
//function
import { shorten, isInCart, quantityCount } from "../../helper/function";
//context
import { CartContext } from "../../context/CartContextProvider";
//icon
import trashIcon from "../../icon/trash.svg"
//style
import styles from "./Product.module.css"

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <img src={productData.image} alt="product"/>
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div>
        <Link className={styles.link} to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) > 1 && (
            <button 
            className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button
            className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img className={styles.trash} src={trashIcon} alt="trash icon"/>
            </button>
          )}
          {isInCart(state, productData.id) ? (
            <button
            className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button 
            className={styles.add}
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
