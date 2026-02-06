import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    passwordHash: "",
    role: "RESIDENT",
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    emergencyContact: ""
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/addUsers", formData);
      setMessage(response.data);

      if (response.data.toLowerCase().includes("success")) {
        // Redirect to login after successful registration
        setTimeout(() => {
          navigate("/login");
        }, 1500); // small delay so user can see success message
      }

      setFormData({
        username: "",
        email: "",
        passwordHash: "",
        role: "RESIDENT",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        emergencyContact: ""
      });
    } catch (error) {
      const errMsg = error.response?.data || "Something went wrong";
      setMessage("Error: " + errMsg);

      // If backend says user already exists, go to login page
      if (typeof errMsg === "string" && errMsg.toLowerCase().includes("already")) {
        setTimeout(() => {
          navigate("/login");
        }, 2000); // give 2 seconds before redirect
      }
    }
  };

  return (
    <div className="add_event_container">
      <h2 className="page_title">User Registration</h2>
      {message && <p style={{ color: "#FF0C55", fontWeight: "bold" }}>{message}</p>}

      <form onSubmit={handleSubmit} className="add_event_form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className="event_input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="event_input"
        />

        <input
          type="password"
          name="passwordHash"
          placeholder="Password"
          value={formData.passwordHash}
          onChange={handleChange}
          required
          className="event_input"
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="event_select"
        >
          <option value="RESIDENT">RESIDENT</option>
          <option value="EVENT_ORGANIZER">EVENT_ORGANIZER</option>
          <option value="ZONE_COORDINATOR">ZONE_COORDINATOR</option>
          <option value="COMMUNITY_MANAGER">COMMUNITY_MANAGER</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="event_input"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="event_input"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="event_input"
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="event_input"
        />

        <input
          type="text"
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={formData.emergencyContact}
          onChange={handleChange}
          className="event_input"
        />

        <button type="submit" className="event_btn">Register</button>
      </form>

      {/* 👉 Extra: direct link for users who already have an account */}
      <p style={{ marginTop: "15px", fontSize: "15px" }}>
        Already have an account? <Link to="/login" style={{ color: "#16423C", fontWeight: "" }}>Login here</Link>
      </p>
    </div>
  );
};

export default Register;
