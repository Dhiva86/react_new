import "./App.css";
import { useState } from "react";

const data = [
  {
    productImage:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000",
    productName: "Dell",
    productPrice: 50000,
    id: 100
  },
  {
    productImage:
      "https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM=",
    productName: "imac",
    productPrice: 150000,
    id: 101
  },
  {
    productImage:
      "https://www.91-img.com/pictures/146919-v6-apple-iphone-14-pro-max-mobile-phone-large-1.jpg",
    productName: "Iphone",
    productPrice: 100000,
    id: 102
  },
  {
    productImage:
      "https://images.samsung.com/is/image/samsung/p6pim/levant/feature/164086688/levant-feature---532527398?$FB_TYPE_A_MO_JPG$",
    productName: "samsung",
    productPrice: 90000,
    id: 103
  }
];

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <div>
        <h1>Cart {cartCount}</h1>
      </div>
      <div className="products">
        {data.map((prod, idx) => (
          <ProductCard
            key={prod.id}
            productImage={prod.productImage}
            productName={prod.productName}
            productPrice={prod.productPrice}
            cartCount={cartCount}
            setCartCount={setCartCount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

function ProductCard({
  productImage,
  productName,
  productPrice,
  cartCount,
  setCartCount
}) {
  const [show, setShow] = useState(true);
 

  const handleAddToCart = () => {
    setShow(!show);
    setCartCount(cartCount + 1);
  };

  const handleRemoveCart = () => {
    setShow(!show);
    setCartCount(cartCount - 1);
  };
  return (
    <div className="card">
      <img src={productImage} alt="productimage" />
      <div>
        <h3>{productName}</h3>
        <p>Rs.{productPrice}</p>
      </div>
      {show ? (
        <button
          style={{ backgroundColor: "green", border: "none", color: "white" }}
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      ) : (
        <button
          style={{ backgroundColor: "crimson", border: "none", color: "white" }}
          onClick={handleRemoveCart}
        >
          Remove cart
        </button>
      )}
    </div>
  );
}
