import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/product")
      .then((res) => {
        console.log("Response Data:", res.data);
        const productData = res.data.find(
          (item) => parseInt(item.id) === parseInt(id)
        );
        console.log("product Dat:", productData);
        setProduct(productData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      {product && (
        <div
          style={{
            margin: "20",
          }}
        >
          <img
            style={{
              height: 300,
              width: 300,
              float: "left",
              marginRight: "25px",
            }}
            src={product.image}
            alt=""
          />
          <div
            className="card"
            style={{
              display: "flex",

              flexWrap: "wrap",

              justifyContent: "end",
              backgroundColor: "#ddd",
            }}
          >
            <div className="card-body">
              <h3 className="card-title">{product.title}</h3>
              <h4>Price: ${product.price}</h4>
              <p className="card-text">{product.description}</p>
              <h3 className="card-text">{product.category}</h3>
              <div className="size">
                <label>Select Size: One Size</label>
              </div>

              <div className="quantity" style={{ margin: "10px 0" }}>
                <label>Quantity: </label>

                <input
                  type="number"
                  defaultValue={1}
                  style={{ marginLeft: "10px" }}
                />
              </div>

              <div className="addtocart">
                <button
                  style={{ margin: "4px 4px" }}
                  class="btn btn btn-light"
                  onClick={() => navigate(-1)}
                >
                  Go Back Products
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
