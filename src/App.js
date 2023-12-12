import React, { Suspense, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";

import Home from "./component/Home";

import Cart from "./component/Cart";

// import Employee from "./component/Employee";

import ProductDetails from "./component/ProductDetails";
import Login from "./component/Login";
import Header from "./component/Header";

const LazyAbout = React.lazy(() => import("./component/Product"));
const LazyEmp = React.lazy(() => import("./component/Employee"));

function App() {
  //  const [userId , setUserId]= useState(null)
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  const onLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    navigate("/");
    setLoggedIn(false);
  };

  return (
    <>
      <Header loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="employees"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyEmp />
            </Suspense>
          }
        />

        <Route
          path="product"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login onLogin={onLogin} />} />
      </Routes>
    </>
  );
}

export default App;
