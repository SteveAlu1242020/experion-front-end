import React, { useState } from "react";
import FilterPanelTop from "../components/FilterPanelTop";
import ProductCard from "../components/ProductCard";
import Topbar from "../components/Topbar";
import productInfo from "../json/ProductInfo";

const ProductsPage = () => {
  const newArrival = productInfo.filter((res) => res.new === true);
  const [selectFilter, setSelectFilter] = useState("none");
  return (
    <div className="products-page">
      <Topbar />
      <div className="filter-panel-top">
        <FilterPanelTop
          setSelectFilter={setSelectFilter}
          selectFilter={selectFilter}
          newArrival={newArrival}
        />
      </div>
      <div className="product-wrapper">
        {selectFilter === "none"
          ? productInfo.map((res) => {
              return <ProductCard key={res.id} props={res} />;
            })
          : newArrival.map((res) => {
              return <ProductCard key={res.id} props={res} />;
            })}
      </div>
    </div>
  );
};

export default ProductsPage;
