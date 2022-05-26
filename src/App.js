import React from 'react';
import { Switch, Redirect, Route } from "react-router-dom";

//components
import ProductDetails from './components/ProductDetails';
import Store from './components/Store';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
//context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider, { CartContext } from './context/CartContextProvider';
const App = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart}/>
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;