import React, { useState } from "react";
import LogoVanness from "../assets/image/LogoVanness.png";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext"; // Import useUserAuth from context

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth(); // Use useUserAuth hook from context
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password); // Use logIn function from context
      navigate("/homepage");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 vw-100">
      <div className="bg-white p-3 rounded w-25">
        <img className="SignUpPageLogo" src={LogoVanness} alt="logo"></img>
        <h3>Login</h3>
        {error && <p className="text-danger">{error}</p>} {/* Display error message */}
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email} // Bind value to state
              onChange={(e) => setEmail(e.target.value)} // Handle change event
              className="form-control rounded-0"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password} // Bind value to state
              onChange={(e) => setPassword(e.target.value)} // Handle change event
              className="form-control rounded-0"
            ></input>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          <p className="d-flex justify-content-center">
            Don't have an account ?
          </p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
