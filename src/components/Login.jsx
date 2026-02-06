import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // ✅ import useNavigate

const Login = () => {
  const [loginData, setLoginData] = useState({
    usernameOrEmail: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();  // ✅ create navigate hook

  // Handle input change
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", loginData);
      setMessage(response.data);

      if (response.data === "Login successful!") {
        // ✅ Navigate to Home page
        navigate("/");
      }
    } catch (error) {
      setMessage("Error: " + (error.response?.data || "Something went wrong"));
    }
  };

  return (
    <div className="add_event_container">
      <h2 className="page_title">User Login</h2>
      {message && <p style={{ color: "#FF0C55", fontWeight: "bold" }}>{message}</p>}

      <form onSubmit={handleSubmit} className="add_event_form">
        <input
          type="text"
          name="usernameOrEmail"
          placeholder="Username or Email"
          value={loginData.usernameOrEmail}
          onChange={handleChange}
          required
          className="event_input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
          className="event_input"
        />

        <button type="submit" className="event_btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
