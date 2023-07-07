import { he } from "date-fns/locale";
import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  const category = [
    "Books",
    "Electronics",
    "realEstate",
    "cors-bikes",
    "furniture",
    "men",
    "women",
    "music",
    "Hobbies Games",
    "Toys",
    "kids",
  ];
  return (
    <div className="Nav-container">
      <div className="Navbar">
        <div className="nav-logo"></div>

        <div>
          <select>
            <option>name</option>
          </select>
        </div>
        <div>
          <input placeholder="search" className="search" />
        </div>
        <div style={{width:'20px', height:'20px', cursor:'pointer'}}
          
        >
          <img  src="/src/assets/image/basket.png" alt='cart'/>
        </div>
      </div>
      <div className="category">
        <div className="category-container">
          <select placeholder="All category">
            <option>All category</option>
          </select>
        </div>

        {category.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
