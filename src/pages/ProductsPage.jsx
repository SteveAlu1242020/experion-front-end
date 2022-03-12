import React, { useState, useEffect } from "react";
import FilterPanelTop from "../components/FilterPanelTop";
import ProductCard from "../components/ProductCard";
import Topbar from "../components/Topbar";
import productInfo from "../json/ProductInfo";

const ProductsPage = () => {
  const newArrival = productInfo.filter((res) => res.new === true);

  const [productCardData, setProductCardData] = useState();

  const [topBarSearch, setTopBarSearch] = useState([]);
  const [selectFilter, setSelectFilter] = useState("none");
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    let filterResult = productInfo
      .map((res) => res)
      .filter((val) =>
        val.title.toLowerCase().includes(searchItem.toLowerCase())
      );
    setTopBarSearch(filterResult);
    console.log("topBarSearch", topBarSearch);
    console.log("filterResult", filterResult);
  }, [searchItem]);

  useEffect(() => {
    if (selectFilter === "none") {
      setProductCardData(
        productInfo.map((res) => {
          return <ProductCard key={res.id} props={res} />;
        })
      );
    } else if (selectFilter === "new") {
      setProductCardData(
        newArrival.map((res) => {
          return <ProductCard key={res.id} props={res} />;
        })
      );
    }
  }, [selectFilter]);

  useEffect(() => {
    if (topBarSearch) {
      setProductCardData(
        topBarSearch.map((res) => {
          return <ProductCard key={res.id} props={res} />;
        })
      );
    }
  }, [topBarSearch]);

  return (
    <div className="products-page">
      <Topbar searchItem={searchItem} setSearchItem={setSearchItem} />
      <div className="filter-panel-top">
        <FilterPanelTop
          setSelectFilter={setSelectFilter}
          selectFilter={selectFilter}
          newArrival={newArrival}
          topBarSearch={topBarSearch}
        />
      </div>
      <div className="product-wrapper">{productCardData}</div>
    </div>
  );
};

export default ProductsPage;

// {topBarSearch
//   ? topBarSearch.map((res) => {
//       return <ProductCard key={res.id} props={res} />;
//     })
//   : selectFilter === "none"
//   ? productInfo.map((res) => {
//       return <ProductCard key={res.id} props={res} />;
//     })
//   : newArrival.map((res) => {
//       return <ProductCard key={res.id} props={res} />;
//     })}
