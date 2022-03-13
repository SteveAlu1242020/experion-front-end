import React from "react";
import Modal from "../components/Modal";
import close from "../assets/icons/x.svg";
import black from "../assets/icons/black.png";
import white from "../assets/icons/white.png";
import blue from "../assets/icons/blue.png";
import pink from "../assets/icons/pink.png";

const SideFilter = ({ sideFilter, setSideFilter }) => {
  return (
    <div className="side-filter">
      <Modal className="modal">
        <div className="open-close">
          <button
            onClick={() => {
              setSideFilter(!sideFilter);
            }}>
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="filter-options">
          <div className="title">
            <p>Filters</p>
          </div>
          <div className="gender">
            <div className="box">
              <input type="checkbox" name="" id="" />
              Men
            </div>
            <div className="box">
              <input type="checkbox" name="" id="" />
              Women
            </div>
            <div className="box">
              <input type="checkbox" name="" id="" />
              Boys
            </div>
            <div className="box">
              <input type="checkbox" name="" id="" />
              Girls
            </div>
          </div>
          <div className="price">
            <p>Price</p>
            <div className="price_wrapper">
              <div className="box">
                <input type="checkbox" name="" id="" />
                $39 to $59 <span>(106)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                $60 to $79 <span>(14)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                $80 to $99 <span>(16)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                $100 to $119 <span>(5)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                $120 to $139 <span>(14)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                $140+ <span>(5)</span>
              </div>
            </div>
          </div>
          <div className="category">
            <p>Categories</p>
            <div className="category_wrapper">
              <div className="box">
                <input type="checkbox" name="" id="" />
                Tshirts <span>(106)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                Track Pants <span>(106)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                Sports Shoes <span>(156)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                Tights <span>(156)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                Casual Shoes <span>(174)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                Sweatshirts <span>(174)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                Shorts <span>(5)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                Tops <span>(5)</span>
              </div>
            </div>
          </div>
          <div className="color">
            <p>Color</p>
            <div className="color_wrapper">
              <div className="box">
                <input type="checkbox" name="" id="" />
                <img src={black} alt="black" /> Black <span>(106)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                <img src={white} alt="white" /> White <span>(156)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                <img src={blue} alt="blue" /> Blue <span>(174)</span>
              </div>
              <div className="box">
                <input type="checkbox" name="" id="" />
                <img src={pink} alt="pink" /> Pink <span>(5)</span>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button>Clear all</button>
            <button
              onClick={() => {
                setSideFilter(!sideFilter);
              }}>
              Apply
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SideFilter;
