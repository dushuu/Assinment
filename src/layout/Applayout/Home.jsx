import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.scss";
import Navbar from "../../components/Nav/Navbar";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import Carsole from "../../components/carsole/carsole";
import CArdCArsole from "../../components/CardCarsole/CArdCArsole";
import { Auth, db } from "../../components/Firebase";
import { onValue, ref } from "firebase/database";
import { signOut } from "firebase/auth";
import Footer from "../../components/Footer/Footer";

const Home = () => {


  useEffect(() => {
    
    Auth.onAuthStateChanged((user) => {
      if (user) {
        // read
        onValue(ref(db, `/${Auth.currentUser.uid}`), (snapshot) => {
          console.log(snapshot)
          
       
        });
      } else if (!user) {
        navigate("/");
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(Auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };



  const Url = [
    {
      url: "/src/assets/images/speaker.png",
      detail: "udta punjab",
      price: "800",
    },
    {
      url: "/src/assets/images/drown.png",
      detail: "udta punjab",
      price: "800",
    },
    {
      url: "/src/assets/images/car.png",
      detail: "lemo",
      price: "800",
    },
  ];
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(" http://localhost:5000/products/").then((data) => {
      setData(data);
    });
  }, []);

  const handleproduct = (id) => {
    navigate(`/product/:${id}`);
  };
  return (
    <>
      <Header />
      <Navbar />
      <Carsole />
      <div className="Home-container container">
        <div className="product-container row">
          {data?.data?.map((item, index) => {
            return (
              <>
                {" "}
                <div className="col-md-2">
                  <div
                    className="imge"
                    onClick={() => navigate(`/product/${item.ProductId}`)}
                    style={{
                      background: `url(${item.productImgUrl})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div>
                    <span>{item.Productname}</span>
                    <div style={{ color: "#3187ED" }}>{item.price}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card-container">
        {Url.map((item) => (
          <>
            <div className="card">
              <div
                style={{
                  background: `url(${item.url})`,
                  width: "100%",
                  height: "70%",
                  border:'1px solide #fff',
                  borderRadius:'20px'
                }}
              ></div>
              <div>
                <br />
                <p>{item.detail}</p>
                <span style={{ color: "#3187ED" }}>${item.price}</span>
              </div>
            </div>
          </>
        ))}
      </div>
      <button onClick={handleLogout}>logout</button>

      <Footer/>

      {/* 
    <CArdCArsole/> */}
    </>
  );
};

export default Home;
