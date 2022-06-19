import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux"

//component
import Cart from "./shared/Cart"

//style
import styles from "./ShopCart.module.css"

//actions
import { clear, checkout } from "../redux/cart/cartAction";

const ShopCart = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.cartState);

  return(
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item} />)
                }
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items : </span>{state.itemsCounter}</p>
                    <p><span>Total Payment : </span>{state.total} $</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch(clear())}>Clear</button>
                        <button className={styles.checkout} onClick={() => dispatch(checkout())}>Check Out</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked Out Successfully!</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to Shop</Link>
                </div>
            }

         </div>
  ) ;
};

export default ShopCart;
