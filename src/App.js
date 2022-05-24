import React from 'react';

//components
import Store from './components/Store';

//context
import ProductsContextProvider from './context/ProductsContextProvider';

const App = () => {
  return (
    <ProductsContextProvider>
      <Store />
    </ProductsContextProvider>
  );
};

export default App;