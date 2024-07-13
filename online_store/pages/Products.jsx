import Image from 'next/image';
import { useState, useEffect } from 'react';
import Cart from '../component/Cart';
import { TiShoppingCart } from "react-icons/ti";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import AddedNotify from '../component/AddedNotify';
import logo from '../public/images/logo.png'
import Quantity from '@/component/Quantity';
import Lottie from "lottie-react";
import CartLoading from '../app/cartLoading.json'
import productData from '../data/product.json'

function Products() {
  const [articles, setArticles] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // const [addedNotify, setAddedNotify] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // const result = await fetch('https://fakestoreapi.com/products');
      // const data = await result.json();
      setArticles(productData);
      console.log(productData,'product')
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchData();
  }, []);


  const addToCart = (article) => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === article.id);
  
    if (existingProduct) {
      // If the product already exists, increment its quantity
      setCart(cart.map((item) => (item.id === article.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } 
    else {
      // If the product doesn't exist, add it to the cart
      setCart([...cart, { ...article, quantity: 1 }]);
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };


  return (
    <div>
    {loading ? <div id='loading'><Lottie animationData={CartLoading} loop={true}/></div> : // Display loading symbol while loading is true
      <div>

      <div className='header'>
        <Image
        src={logo}
        alt="Banner Image"
        className='logo'
        height={55}
        width={55}
        />
        <p id='logoName'>Daily Deals</p>
      </div>

        <ul>
          <div className='beatslist'>


              {articles.map((article) => (
                <li key={article.id}>
                  {/* structure of the card */} 
                  <div style={{border:"0.5px solid #8a8a8a", borderRadius:"15px", height:"300px", width:"250px", position:"relative", margin:"20px"}}>
                      <div id='productImage'>
                          <Image src={article.image} alt='image' width={100} height={100} style={{height:"auto", width:"auto", padding:"20px"}}/>
                          <div style={{position:"absolute", bottom:"25%"}}><Image src={article.brandLogo} alt='image' width={35} height={35}/></div>
                      </div>
                      <div id='cart'>
                        <button onClick={() => addToCart(article)} article={article}><AddedNotify/></button>
                      </div>
                      <div id='ratings'>
                      {/* <div id='ratingBackground'>Rating</div> */}
                      {/* <div id='stars'>{article.rating.rate}</div> */}
                      </div>
                      <div id='productName'>
                        <span>{article.title}</span>
                        <span style={{backgroundColor:"white", padding:"2px 10px 2px 10px", borderRadius:"50px"}}>${article.price}</span>
                      </div>
                      {/* <div id='quantityProducts'><Quantity/></div> */}
                  </div>
                </li>
              
              ))}

          {/* Cart */}
          <div id='goToCart'>
            <Cart data={cart} onClearCart={clearCart} onRemoveFromCart={removeFromCart}/>
          </div>

          </div>
        </ul>
      </div>
    }
    </div>
  );
}

export default Products;