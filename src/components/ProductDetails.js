import React, { useContext } from "react";
import { Link } from "react-router-dom";

//context
import { ProductsContext } from "../context/ProductsContextProvider";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { image, title, category, description, price } = product;

  return ( 
            <div>
                <img src={image} alt="product" />
                <div>
                    <h3> {title} </h3>
                    <p>{description}</p>
                    <p><span>categoty:</span> {category} </p>
                </div>
                
                <div>
                    <span>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>);
};

export default ProductDetails;
