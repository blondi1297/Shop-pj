import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

//function
import { shorten, isInCart, quantityCount } from "../../helper/function";

//icon
import trashIcon from "../../icon/trash.svg";

//actions
import { addItem, removeItem, increase, decrease} from "../../redux/cart/cartAction"

//style
import styles from "./Product.module.css";

const Product = ({ productData }) => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);

  return (
    <div className={styles.container}>
      <img src={productData.image} alt="product" />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div>
        <Link className={styles.link} to={`/products/${productData.id}`}>
          Details
        </Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch(decrease(productData))
              }
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch(removeItem(productData))
              }
            >
              <img className={styles.trash} src={trashIcon} alt="trash icon" />
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCount(state, productData.id)}
            </span>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch(increase(productData))
              }
            >
              +
            </button>
          ) : (
            <button
              className={styles.add}
              onClick={() =>
                dispatch(addItem(productData))
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
