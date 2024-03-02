// import React, { useDebugValue, useEffect, useState } from 'react'
// import Link from 'next/link'
// import { Button } from 'react-bootstrap'
// import Quantity from '../component/Quantity'
// import Cart from '../component/Cart'
// import Image from 'next/image'
// import beats from '../public/images/beats.png'
// // import pills from '../public/images/beatsProduct/4dd6c0b8562b6fd6ded0cbe01224c976.jpg'

// interface Products {
//   id: string;
//   name: string;
//   price?: number;
//   imgSrc?: string;
//   rating?: number;
// }

// const ProductList = () => {
//   // const [productImage, setProductImage] = useState('');

//   // useEffect(() => {
//   //   fetch('../app/data.json')
//   //           .then(res=>res.json())
//   //           .then(json=>console.log(json))
//   // },[])


//   // json data fetching
//   const [Listing, setListing] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const json = await response.json();
//       setListing(json);
//     };

//     fetchData();
//   }, []);

//   console.log(Listing)

//   return (
//     <div className='beatslist'>


//       {/* structure of the card */} 
//       <div style={{border:"5px dotted black", height:"300px", width:"250px", position:"relative"}}>
//         <div style={{background:"grey", height:"70%"}}>
//           image
//         </div>
//         <div id='cart'>cart</div>
//         <div id='ratings'>
//           <div id='ratingBackground'>Rating</div>
//           <div id='stars'>RATING</div>
//         </div>
//         <div id='productName'>Razer Kraken Tournament Edition</div>
//       </div>


//       {/* <div style={{position:"absolute", top:"10px", right:"10px"}}>
//       <Cart />
//       </div> */}
//     </div>
//   )
// }

// export default ProductList
