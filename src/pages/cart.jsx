import React, { useState } from "react";
import "./cart.scss";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
  const [cartdata, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  const handleAddCart =()=>{
    if(cartdata) {
        let currentIndex = -1;
        let item = cartdata.filter((ele, index) =>{
           
                currentIndex = index;
                return true;
       
        });
        if (item.length) {
            cartdata.slice(cartdata.currentIndex)
            addItemToCart(cartdata);
        }
 
    } 

  
      
    }

    const removeItemFromCart = (data) => {
        if (!data)
        return;
         console.log(data, cartdata);
        let currentIndex = -1;
        // setCartData([])
        let item = cartdata.filter((ele, index) =>{
            if(ele.id == data.id) {
                currentIndex = index;
                return true;
            }
       
        });
        console.log(item, currentIndex);
        if (item.length) {
            console.log(cartdata[currentIndex].totalAddedTocart);
            if (Number(cartdata[currentIndex].totalAddedTocart) >= 2) {
                cartdata[currentIndex].totalAddedTocart = Number(cartdata[currentIndex].totalAddedTocart) - 1;
                addItemToCart(cartdata);
            } else {
                let newcartdata = cartdata.filter((ele) =>{
                    if(ele.id == item.id) {
                        return false;
                    } else {
                        return true;
                    }
                });
                console.log(newcartdata, "newcartdata");
                // addItemToCart(newcartdata);
            }
        }
    }

    const addItemToCart = (items) => {
        localStorage.setItem('cart', JSON.stringify(items));
        setCartData(JSON.parse(localStorage.getItem("cart")))
    }
  return (
    <div className="cart-container">
         <button onClick={()=> navigate('/home')}>back to home</button>
      {cartdata.map((item) => {
        return (
          <>
            <div className="cart-item-container">
              <div
                className="cartimg"
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  background: `url(${item.productImgUrl})`,
                }}
              ></div>
              <div>
                x<div>product detail</div>
                <div>{item.price} for 1</div>
                <button onClick={() => removeItemFromCart(item)}>remove</button>
              
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
