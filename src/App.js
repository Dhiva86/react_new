import logo from './logo.svg';
import './App.css';

const data=[{
      productImage :" https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000",
      productName: "Dell",
      productPrice:50000
},
{
  productImage :" https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80",
  productName: "Mac Book",
  productPrice:150000
},
{
  productImage :"https://itronics.in/wp-content/uploads/2021/09/iphone-13-select-2021.jpeg",
  productName: "Apple i7",
  productPrice:100000
},
{
  productImage :"https://m.media-amazon.com/images/I/81oHGrH1PwL._SL1500_.jpg",
  productName: "LED TV",
  productPrice:70000
},


]

function App() {
   const [cartCount,setCartCount] = useState(0);
  return (
    <div className="App">
      <h1>Cart 0</h1>
      <div className="product">
        {data.map((prod,index)=>(
      <ProductCard
      key={index}
      productName= {prod.productName}
      productImage={prod.productImage}
      productPrice= {prod.productPrice}
      cartCount = {cartCount}
      setCartCount = {setCartCount}
      />
      ))}
      </div>
    
    </div>
  );
}
function ProductCard(productName,productImage,productPrice){
  const [show, setShow] = useState(true);

  const handleAddToCard = ()=>{
     setShow(!show)
     setCartCount(cartCount+1)
  }
  const handleRemoveToCard = ()=>{
    setShow(!show)
    setCartCount(cartCount-1)
 }
  return(
    <div className="card">
      <img src={productImage}
      alt="product name"></img>
      <div>
        <h3>{productName}</h3>
        <p>RS.{productPrice}</p>
        <p>9.5</p>
      </div>
      {show ? <button onClick={handleAddToCard}>Add to Cart</button>:
      <button onClick={handleRemoveToCard}>Remove from Cart</button> }
      
    </div>
  )
}

export default App;
