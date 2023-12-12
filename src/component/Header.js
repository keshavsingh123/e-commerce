import React from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

export default function Header({ loggedIn, handleLogout }) {
  console.log("loggedIn:", loggedIn);
  useEffect(() => {
    console.log("header component: loggedIn is", loggedIn ? "true" : "false");
  }, [loggedIn]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          E-Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mb-2 me-auto mb-lg-0 justify-content-between">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {loggedIn && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/employees"
                    >
                      Employees
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/product"
                    >
                      Products
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/cart"
                    >
                      Cart
                    </Link>
                  </li>

                  <li className="nav-item">
                    <button
                      className="nav-link btn btn-primary"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
              {!loggedIn && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
}
