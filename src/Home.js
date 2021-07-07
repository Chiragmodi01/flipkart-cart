import React, {useState} from 'react';
import './App.css';
import data from './data.json';

function Home (){
    const [cart, setCart] = useState([]);
    const [saveforlater, setSaveforlater] = useState([]);
    const [page, setPage] = useState('home');

    const addToCart = (product) => {
        setCart([...cart, {...product}]);
    }
    const addTosaveforlater = (product) => {
        setSaveforlater([...saveforlater, {...product}]);
    }
    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        );
    }
    const removeFromLater = (laterToRemove, product) => {
        setSaveforlater(
            saveforlater.filter((product) => product !== laterToRemove)
        );
    }
    const goTo = (cartPage) => {
        setPage(cartPage)
    }

  return (
    <div className="home">
        <button id="btn-cart" onClick={() => goTo('cart')}>cart ({cart.length})</button>
        {page === 'cart' && (<button id="btn-goto" onClick={() => goTo('home')}>Home</button>)}

        {page === 'home' && (
        <div className="pdt-card">
        {data.map((product, index)=>{
        return <div key={index}>

        <div className="img-box">
        <img src={product.image} alt="pdt-img" />
        </div>

        <div className="pdt-info">
        <h1 className="brand">{product.brand}</h1>
        <p className="title">{product.title}</p>

        <div className="line-rating">
        <p className="rating">{product.rating}</p>
        <p className="people">{product.people}</p>
        </div>
        
        <div className="line-price">
        <p className="price">{product.price}</p>
        <p className="offerPrice">{product.offerPrice}</p>
        <p className="discount">{product.discount}</p>
        </div>
        <button className="btn-cart" onClick={()=> addToCart(product)}>
            add to cart
        </button>
        </div>

         </div>
         })}
        </div>
        )}
        
        {page === 'cart' && (
            <div className="pdt-card">
            {cart.map((product, index)=>{
            return <div key={index}>
    
            <div className="img-box">
            <img src={product.image} alt="pdt-img" />
            </div>
    
            <div className="pdt-info">
            <h1 className="brand">{product.brand}</h1>
            <p className="title">{product.title}</p>
    
            <div className="line-rating">
            <p className="rating">{product.rating}</p>
            <p className="people">{product.people}</p>
            </div>
            
            <div className="line-price">
            <p className="price">{product.price}</p>
            <p className="offerPrice">{product.offerPrice}</p>
            <p className="discount">{product.discount}</p>
            </div>
            <button className="btn-cart" onClick={()=> removeFromCart(product)}>
            Remove
            </button>
            <button className="btn-cart"  onClick={()=> addTosaveforlater(product)}>
            Save For Later
            </button>
            </div>
            <div className="saveforlater">
                <h1>Save For Later ({saveforlater.length })</h1>    
            </div> 

{saveforlater ?
            <div className="pdt-card">
            {saveforlater.map((product, index)=>{
            return <div key={index}>
    
            <div className="img-box">
            <img src={product.image} alt="pdt-img" />
            </div>
    
            <div className="pdt-info">
            <h1 className="brand">{product.brand}</h1>
            <p className="title">{product.title}</p>
    
            <div className="line-rating">
            <p className="rating">{product.rating}</p>
            <p className="people">{product.people}</p>
            </div>
            
            <div className="line-price">
            <p className="price">{product.price}</p>
            <p className="offerPrice">{product.offerPrice}</p>
            <p className="discount">{product.discount}</p>
            </div>
            <button className="btn-cart" onClick={()=> removeFromLater(product)}>
            Remove
            </button>
            
            </div>
             </div>
             
             })}
             </div>: <> </> }

             </div>
             
             
             })}

            
            

                         
            </div>
        )}


    </div>
        )};

export default Home;