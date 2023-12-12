import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div>
        <div className="carousel">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  class="d-block w-90 "
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
                  <p>
                    Your perfect pack for everyday use and walks in the forest.
                    Stash your laptop (up to 15 inches) in the padded sleeve,
                    your everyday
                  </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  class="d-block  w-90"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Mens Casual Premium Slim Fit T-Shirts</h5>
                  <p>
                    Slim-fitting style, contrast raglan long sleeve,
                    three-button henley placket, light weight & soft fabric for
                    breathable and comfortable wearing. And Solid stitched
                    shirts with round neck made for durability and a great fit
                    for casual fashion wear and diehard baseball fans. The
                    Henley style round neckline includes a three-button placket.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  class="d-block w-90  "
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Mens Cotton Jacket</h5>
                  <p>
                    great outerwear jackets for Spring/Autumn/Winter, suitable
                    for many occasions, such as working, hiking, camping,
                    mountain/rock climbing, cycling, traveling or other
                    outdoors. Good gift choice for you or your family member. A
                    warm hearted love to Father, husband or son in this
                    thanksgiving or Christmas Day.", "category": "men's
                    clothing"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>Trending Product</h2>
        <div className="imga">
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                alt="Samsung"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
                alt="Solid Gold Petite Micropave"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
                alt="Hard Drive"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
