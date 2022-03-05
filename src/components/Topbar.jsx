import React from "react";
import search from "../assets/icons/search.svg";
import like from "../assets/icons/like.svg";
import cart from "../assets/icons/cart.svg";
import john from "../assets/icons/john.jpg";
import dropdown from "../assets/icons/drop-down.png";
import logoBlue from "../assets/icons/logo-blue.svg";

const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="wrapper">
        <div className="left">
          <div className="welcome">
            <h1>
              <span>Hi John!</span>
            </h1>
          </div>
        </div>
        <div className="right">
          <div className="right_inner-left">
            <div className="search-bar">
              <img src={search} alt="search" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for products, brands and more"
              />
            </div>
          </div>
          <div className="right_inner-right">
            <div className="status">
              <div className="desktop">
                <img src={like} alt="like" />
                <img src={cart} alt="cart" />
              </div>
              <div className="mobile">
                <img src={logoBlue} alt="logoBlue" />
              </div>
            </div>
            <div className="profile">
              <img src={john} alt="john" />
              <p>
                <span>John Paul</span> <img src={dropdown} alt="dropdown" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
