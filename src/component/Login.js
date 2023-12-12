import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import "./Login.css";
export default function Login({ onLogin }) {
  const API_URL = "  http://localhost:8000/user";
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (loggedIn) {
      console.log("user logged in sucesfully");
      navigate("/");
    }
  }, [loggedIn, navigate]);
  const handleSignUp = async () => {
    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create user object
    const newUser = { id, email, name, password };

    // Send POST request to JSON server to store user data
    try {
      const response = await axios.post(API_URL, newUser);
      console.log("User signed up successfully:", response.data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleLogin = async () => {
    // Send GET request to JSON server to retrieve user data
    try {
      const response = await axios.get(
        `${API_URL}?id=${id}&password=${password}`
      );
      const user = response.data[0];

      if (user) {
        onLogin();
        closeModal();
        setLoggedIn(true);
      } else {
        alert("Invalid ID or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log("loggedIn", loggedIn);
  return (
    <>
      <div className="container mb-3">
        <div className="row g-5">
          <div className="sh col">
            <h1 className="sign text-center">Sign Up</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="mb-3">
                <label className="form-label">ID:</label>
                <input
                  {...register("id", { required: "ID is required" })}
                  className="form-control"
                  onChange={(e) => setId(e.target.value)}
                  value={id}
                />
                {errors.id && (
                  <p className="text-danger">{errors.id.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  {...register("email", { required: "Email is required" })}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password:</label>
                <input
                  {...register("confirmPassword", {
                    required: "ConfirmPassword is required",
                  })}
                  className="form-control"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  type="password"
                />
                {errors.confirmPassword && (
                  <p className="text-danger">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="text-center">
                <button
                  className="btn btn-warning btn-lg me-2 mb-2"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
                <button
                  className="btn btn-primary btn-lg mb-2"
                  onClick={openModal}
                >
                  Login
                </button>
                <br></br>
                <span className=" mb-2 text-success">
                  Don't have account please signUp
                </span>
              </div>
            </form>
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Login Modal"
          >
            {/* Your login form goes here */}
            <form onSubmit={handleSubmit(handleLogin)}>
              {/* ... (Your existing login form code) */}
              <div className="mb-3">
                <label className="form-label">ID:</label>
                <input
                  {...register("id", { required: "ID is required" })}
                  className="form-control"
                  onChange={(e) => setId(e.target.value)}
                  value={id}
                />
                {errors.id && (
                  <p className="text-danger">{errors.id.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </div>

              <div class="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>

                <button className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </div>
              <div className="text-center bg-warning text-dark">
                Don't have account please signUp
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
}
