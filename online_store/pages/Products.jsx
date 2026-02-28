import Image from "next/image";
import { useState, useEffect } from "react";
import Cart from "../component/Cart";
import AddedNotify from "../component/AddedNotify";
import logo from "../public/images/logo.png";
import Lottie from "lottie-react";
import CartLoading from "../app/cartLoading.json";
import productData from "../data/product.json";
import styled from "styled-components";

function Products() {
  const [articles, setArticles] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  console.log(setCart, "setCart products");
  // const [quantity, setQuantity] = useState(id);
  // console.log(cart, "cart");

  // data fetching and storing in article array
  useEffect(() => {
    const fetchData = async () => {
      setArticles(productData);
      console.log(productData, "product");
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchData();
  }, []);

  const addToCart = (article) => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === article.id);

    if (existingProduct) {
      // If the product already exists, increment its quantity
      setCart(
        cart.map((item) =>
          item.id === article.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      // If the product doesn't exist, add it to the cart
      setCart([...cart, { ...article, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      {loading ? (
        <div id="loading">
          <Lottie animationData={CartLoading} loop={true} />
        </div> // Display loading symbol while loading is true
      ) : (
        <div>
          <div className="header">
            <Image
              src={logo}
              alt="Banner Image"
              className="logo"
              height={55}
              width={55}
            />
            <p id="logoName">Daily Deals</p>
          </div>

          <ul>
            <div className="products">
              {articles.map((article) => (
                <li key={article.id}>
                  {/* structure of the card */}
                  <Card
                    style={{
                      border: "0.5px solid #8a8a8a",
                      borderRadius: "15px",
                      height: "300px",
                      width: "250px",
                      position: "relative",
                      margin: "20px",
                    }}
                  >
                    <div id="productImage">
                      <Image
                        src={article.image}
                        alt="image"
                        width={100}
                        height={100}
                        style={{
                          height: "auto",
                          width: "auto",
                          padding: "20px",
                        }}
                      />
                      <div style={{ position: "absolute", bottom: "25%" }}>
                        <Image
                          src={article.brandLogo}
                          alt="image"
                          width={35}
                          height={35}
                        />
                      </div>
                    </div>
                    <div id="cart">
                      <button
                        onClick={() => addToCart(article)}
                        article={article}
                      >
                        <AddedNotify />
                      </button>
                    </div>
                    <div id="ratings"></div>
                    <div id="productName">
                      <span>{article.title}</span>
                      <span
                        style={{
                          backgroundColor: "white",
                          padding: "2px 10px 2px 10px",
                          borderRadius: "50px",
                        }}
                      >
                        ${article.price}
                      </span>
                    </div>
                  </Card>
                </li>
              ))}

              {/* Cart */}
              <div id="goToCart">
                <Cart
                  data={cart}
                  onClearCart={clearCart}
                  onRemoveFromCart={removeFromCart}
                  setCart={setCart}
                />
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Products;

const Card = styled.div`
  &:hover {
    transform: scale(1.1);
    transition: 100ms linear;
    box-shadow: 0 0 10px gray;
  }
`;
