import React, { useEffect, useState } from 'react'
import Router from './Router/Router'
import axios from 'axios';
import { MainContext } from './Context/Context';

const App = () => {




  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      });
  }, []);


  const data = { products, setProducts };
  return (


    <div>
      <MainContext.Provider value={data}>
        <Router />
      </MainContext.Provider>
    </div>
  )
}

export default App
