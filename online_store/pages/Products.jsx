import Image from 'next/image';
import { useState, useEffect } from 'react';
import Cart from '../component/Cart';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://fakestoreapi.com/products');
      const data = await result.json();
      setArticles(data);
    };

    fetchData();
  }, []);


  return (
    <div>
      <ul>
        <div className='beatslist'>


            {articles.map((article) => (
              <li key={article.id}>
                {/* structure of the card */} 
                <div style={{border:"2px solid black", borderRadius:"15px", height:"300px", width:"250px", position:"relative", margin:"20px"}}>
                    <div style={{height:"70%", display:"flex", justifyContent:"center"}}>
                        <Image src={article.image} alt='image' width={100} height={100} style={{height:"auto", width:"auto", margin:"10px"}}/>
                    </div>
                    <div id='cart'>cart</div>
                    <div id='ratings'>
                    {/* <div id='ratingBackground'>Rating</div> */}
                    {/* <div id='stars'>{article.rating.rate}</div> */}
                    </div>
                    <div id='productName'>{article.title}</div>
                </div>
              </li>
            
            ))}


        <div style={{position:"absolute", top:"10px", right:"10px"}}>
        <Cart />
        </div>
        </div>
      </ul>
    </div>
  );
}

export default App;