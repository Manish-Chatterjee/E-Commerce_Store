import Image from 'next/image';
import { useState, useEffect } from 'react';
import Cart from '../component/Cart';
import { TiShoppingCart } from "react-icons/ti";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import AddedNotify from '../component/AddedNotify';

function Products() {
  const [articles, setArticles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://fakestoreapi.com/products');
      const data = await result.json();
      setArticles(data);
    };

    fetchData();
  }, []);


  const addToCart = (article) => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === article.id);
  
    if (existingProduct) {
      // If the product already exists, increment its quantity
      setCart(cart.map((item) => (item.id === article.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      // If the product doesn't exist, add it to the cart
      setCart([...cart, { ...article, quantity: 1 }]);
      // <AddedNotify/>
    }
  }

  return (
    <div>
      <ul>
        <div className='beatslist'>


            {articles.map((article) => (
              <li key={article.id}>
                {/* structure of the card */} 
                <div style={{border:"2px solid #8a8a8a", borderRadius:"15px", height:"300px", width:"250px", position:"relative", margin:"20px"}}>
                    <div style={{height:"70%", display:"flex", justifyContent:"center"}}>
                        <Image src={article.image} alt='image' width={100} height={100} style={{height:"auto", width:"auto", padding:"20px"}}/>
                    </div>
                    <div id='cart'><button onClick={() => addToCart(article)} article={article}><TiShoppingCart id='cartButton'/></button></div>
                    <div id='ratings'>
                    {/* <div id='ratingBackground'>Rating</div> */}
                    {/* <div id='stars'>{article.rating.rate}</div> */}
                    </div>
                    <div id='productName'>{article.title}</div>
                </div>
              </li>
            
            ))}


        <div id='goToCart'>
          <Cart data={cart}/>
        </div>
        </div>
      </ul>
    </div>
  );
}

export default Products;