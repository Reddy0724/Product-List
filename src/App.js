import './Product.css';
import React, { useState } from 'react';
import CartSummary from './CartSummary';
import Menu from './Menu';
import ProductListing from './Product';
import Recommend from './recommend';


const App = () => {
   const [cart, setCart] = useState([]);
   const [recommendation, setRecommendation] = useState(null);

  return(
   <div className='container' >

      < Menu />
       
      <ProductListing  cart={cart} setCart={setCart}  setRecommendation={setRecommendation}  />
    
      <CartSummary  cart={cart}/>

      <Recommend recommendation={recommendation}/>
     
    </div>
     
   
    
  )
}

export default App;