import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { addToCart } from "../action/cartAction";
import { useDispatch } from "react-redux";
import "./Product.css";

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/product")
      .then((res) => {
        setProduct(res.data);
        setSearchResults(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterResult(term);
  };

  const filterResult = (searchTerm) => {
    const results = product.filter(
      (item) =>
        item.rating.count.toString().includes(searchTerm) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  const renderProducts = (products) => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "0 20px",
      }}
    >
      {products.map((item, index) => (
        <div
          className="card"
          key={index}
          style={{ width: "20rem", margin: "2rem" }}
        >
          <img
            src={item.image}
            style={{
              width: "10rem",
              margin: "auto",
            }}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">
              <small className="text-muted">{item.rating.count}</small>
            </p>
            <br />
            <button onClick={() => navigate(`/product/${item.id}`)}>
              MoreInfo
            </button>
            <button
              style={{ margin: "4px 4px" }}
              onClick={() => dispatch(addToCart(item))}
              className="btn btn btn-warning"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div>
        <div className="text-center">
          Search:
          <input
            type="text"
            style={{
              width: "600px",
              margin: "auto",
            }}
            className="form-control"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>

        {searchTerm === ""
          ? renderProducts(product)
          : renderProducts(searchResults)}

        <Outlet />
      </div>
    </>
  );
}

export default Product;
