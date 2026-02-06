import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Venues.css";

function Venues() {
  const [venues, setVenues] = useState([]);
  const [formData, setFormData] = useState({
    venueName: "",
    address: "",
    capacity: "",
    description: "",
    amenities: "",
    hourlyRate: "",
    contactPerson: "",
    contactPhone: "",
    accessibilityFeatures: "",
    available: "true", // ✅ changed from isAvailable → available
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  // Fetch venues
  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const res = await axios.get("http://localhost:8080/getVenue");
      setVenues(res.data);
    } catch (err) {
      setError("Failed to load venues");
    }
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add or Update Venue
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // convert string → boolean before sending
      const payload = {
        ...formData,
        available: formData.available === "true", // ✅ correct field name
      };

      if (editingId) {
        await axios.put(
          `http://localhost:8080/updateVenue/${editingId}`,
          payload
        );
      } else {
        await axios.post("http://localhost:8080/addVenue", payload);
      }

      // Reset form
      setFormData({
        venueName: "",
        address: "",
        capacity: "",
        description: "",
        amenities: "",
        hourlyRate: "",
        contactPerson: "",
        contactPhone: "",
        accessibilityFeatures: "",
        available: "true", // ✅ reset field name
      });
      setEditingId(null);
      fetchVenues();
    } catch (err) {
      setError("Error saving venue");
    }
  };

  // Delete venue
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deleteVenue?id=${id}`);
      fetchVenues();
    } catch (err) {
      setError("Error deleting venue");
    }
  };

  // Edit venue
  const handleEdit = (venue) => {
    setFormData({
      ...venue,
      available: venue.available ? "true" : "false", // ✅ correct mapping
    });
    setEditingId(venue.id);
  };

  return (
    <div className="venue-container">
      <h2 className="form-title" style={{fontSize : "20px", textTransform : "uppercase"}}>{editingId ? "Update Venue" : "Add Venue"}</h2>
      {error && <p className="error">{error}</p>}

      <form className="venue-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="venueName"
          placeholder="Venue Name"
          value={formData.venueName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={formData.capacity}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="amenities"
          placeholder="Amenities (comma separated)"
          value={formData.amenities}
          onChange={handleChange}
        />
        <input
          type="number"
          name="hourlyRate"
          placeholder="Hourly Rate"
          value={formData.hourlyRate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactPerson"
          placeholder="Contact Person"
          value={formData.contactPerson}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactPhone"
          placeholder="Contact Phone"
          value={formData.contactPhone}
          onChange={handleChange}
        />
        <textarea
          name="accessibilityFeatures"
          placeholder="Accessibility Features"
          value={formData.accessibilityFeatures}
          onChange={handleChange}
        />

        {/* Dropdown for Availability */}
        <label className="select-label" style={{fontSize:"15px"}}>
          Status : &nbsp;
          <select
            name="available" // ✅ fixed
            value={formData.available}
            onChange={handleChange}
            style={{fontSize: "12px"}}
          >
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>
        </label>

        <button type="submit" className="submit-btn" style={{fontSize : "15px", fontWeight : "400"}}>
          {editingId ? "Update Venue" : "Add Venue"}
        </button>
      </form>

      <h2 className="list-title" style={{fontSize : "20px", textTransform: "uppercase"}}>Venues List</h2>
      <table className="venue-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Capacity</th>
            <th>Rate</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {venues.map((venue) => (
            <tr key={venue.id}>
              <td>{venue.venueName}</td>
              <td>{venue.capacity}</td>
              <td>{venue.hourlyRate ? `₹${venue.hourlyRate}` : "-"}</td>
              <td>
                {venue.contactPerson} ({venue.contactPhone})
              </td>
              <td
                style={{
                  color: venue.available ? "#00A67A" : "#FF0C55", 
                  fontWeight: "bold",
                textTransform : "uppercase",
                
                }}
              >
                {venue.available ? "Available" : "Unavailable"}
              </td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(venue)} style={{backgroundColor: "#16423C"}}>
                  {/* Edit */}
                  <i class="fa-solid fa-pen-to-square" style={{fontWeight: "400", fontSize: "12px"}}></i>
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(venue.id)}
                  style={{backgroundColor: "#FF0C55"}}
                >
                  {/* Delete */}
                  <i class="fa-solid fa-xmark" style={{ fontSize: "12px"}}></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Venues;
