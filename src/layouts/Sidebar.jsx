import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import user from "../assets/icons/user.svg";
import current from "../assets/icons/current.svg";
import check from "../assets/icons/check.svg";
import info from "../assets/icons/info.svg";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const [background, setBackground] = useState(1);

  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="logo">
          <Link to="/emptyPage">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="page-tabs">
          <Link
            to="/emptyPage"
            className={background === 0 ? "active" : ""}
            onClick={() => {
              setBackground(0);
            }}>
            <div className="profile">
              <img src={user} alt="user" />
            </div>
          </Link>
          <Link
            to="/"
            className={background === 1 ? "active" : ""}
            onClick={() => {
              setBackground(1);
            }}>
            <div className="products">
              <img src={current} alt="current" />
            </div>
          </Link>
          <Link
            to="/emptyPage"
            className={background === 2 ? "active" : ""}
            onClick={() => {
              setBackground(2);
            }}>
            <div className="check">
              <img src={check} alt="check" />
            </div>
          </Link>
          <Link
            to="/emptyPage"
            className={background === 3 ? "active" : ""}
            onClick={() => {
              setBackground(3);
            }}>
            <div className="info">
              <img src={info} alt="info" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
