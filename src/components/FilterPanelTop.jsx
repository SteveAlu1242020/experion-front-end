import React from "react";
import { useState } from "react";
import SideFilter from "../layouts/SideFilter";
import productInfo from "../json/ProductInfo";
import { BsCodeSlash } from "react-icons/bs";

const FilterPanelTop = ({
  setSelectFilter,
  selectFilter,
  newArrival,
  setSearchItem,
}) => {
  const [sideFilter, setSideFilter] = useState(false);

  return (
    <div className="wrapper">
      <div className="title">
        {/* <p>Filters based on your profile</p> */}
        <p className="code">
          <BsCodeSlash className="icon" />{" "}
          <a
            href="https://github.com/SteveAlu1242020/shopping-page-template"
            target="_blank"
            rel="noreferrer">
            See The Code
          </a>
        </p>
      </div>
      <div className="filters">
        <div className="left">{/* <button>Size</button> */}</div>
        <div className="right">
          <p
            onClick={() => {
              setSearchItem("");
            }}>
            Clear all
          </p>
          <button
            onClick={() => {
              setSideFilter(!sideFilter);
            }}>
            Filters
          </button>
        </div>
      </div>
      <div className="total-sort">
        <div className="total">
          <p>
            Showing {}
            {/* {topBarSearch ? topBarSearch.length : ""}{" "} */}
            {selectFilter === "none"
              ? productInfo.length
              : newArrival.length}{" "}
            Products
          </p>
        </div>

        <div className="sort">
          <p>Sort by:</p>
          <select
            onChange={(e) => {
              setSelectFilter(e.target.value);
            }}>
            <option value="none">none</option>
            <option value="new">newest to oldest</option>
          </select>
        </div>
      </div>
      {sideFilter ? (
        <SideFilter sideFilter={sideFilter} setSideFilter={setSideFilter} />
      ) : (
        ""
      )}
    </div>
  );
};

export default FilterPanelTop;
