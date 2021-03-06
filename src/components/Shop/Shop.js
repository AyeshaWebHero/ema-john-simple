import React from 'react';
import fakeData from '../../../src/components/Shop/fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
   // console.log(fakeData);
   const first10 = fakeData.slice(0,10);
   const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">

           <div className="product-container"> 
            {
                products.map(pd => <Product>{pd.name}</Product>) 
            }
            </div>

            <div className="cart-container">
            <h1>This is cart</h1>
            </div>
        </div>
    );
};

export default Shop;