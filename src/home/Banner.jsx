import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectCategory from "../components/SelectCategory";

const title = (
  <h2>
    Search your One From <span>Thousand</span> of Products
  </h2>
);

const desc = "We have the Largest collection of products";

const bannerList = [
  { iconName: "icofont-users-alt-4", text: "1.5 Million Customers" },
  { iconName: "icofont-notification", text: "More then 2000 Marchent" },
  { iconName: "icofont-globe", text: "Buy Anything Online" },
];

const Banner = () => {
  const [searchInput, setsearchInput] = useState("");
  const [filteredProduct, setfilteredProduct] = useState(productData);

  // search functionality
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setsearchInput(searchTerm);

    // filtering product based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilteredProduct(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectCategory select={ "all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProduct.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
