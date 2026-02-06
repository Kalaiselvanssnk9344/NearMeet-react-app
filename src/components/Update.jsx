// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function Update() {
//   const { id } = useParams(); // Get event ID from URL
//   const navigate = useNavigate();

//   const [event, setEvent] = useState({
//     title: "",
//     description: "",
//     category: "SOCIAL",
//     startDatetime: "",
//     endDatetime: "",
//     location: "",
//     maxCapacity: 100,
//     currentRegistrations: 0,
//     registrationDeadline: "",
//     status: "DRAFT",
//     recurrencePattern: "",
//     recurring: false
//   });

//   // 🔹 Fetch event details by ID
//   useEffect(() => {
//     fetch(`http://localhost:8080/getEvents`)
//       .then((res) => res.json())
//       .then((data) => {
//         const foundEvent = data.find((e) => e.id === parseInt(id));
//         if (foundEvent) setEvent(foundEvent);
//       })
//       .catch((err) => console.error("Error fetching event:", err));
//   }, [id]);

//   // 🔹 Update event
//   const updateEvent = () => {
//     fetch(`http://localhost:8080/updateEvent/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(event),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to update event");
//         return res.text();
//       })
//       .then(() => {
//         alert("Event updated!");
//         navigate("/events"); // Go back to events list
//       })
//       .catch((err) => console.error("Error updating event:", err));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Update Event</h2>

//       <input
//         type="text"
//         placeholder="Title"
//         value={event.title}
//         onChange={(e) => setEvent({ ...event, title: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={event.description}
//         onChange={(e) => setEvent({ ...event, description: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Location"
//         value={event.location}
//         onChange={(e) => setEvent({ ...event, location: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Max Capacity"
//         value={event.maxCapacity}
//         onChange={(e) => setEvent({ ...event, maxCapacity: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Current Registrations"
//         value={event.currentRegistrations}
//         onChange={(e) =>
//           setEvent({ ...event, currentRegistrations: e.target.value })
//         }
//       />
//       <input
//         type="datetime-local"
//         value={event.startDatetime}
//         onChange={(e) => setEvent({ ...event, startDatetime: e.target.value })}
//       />
//       <input
//         type="datetime-local"
//         value={event.endDatetime}
//         onChange={(e) => setEvent({ ...event, endDatetime: e.target.value })}
//       />
//       <input
//         type="datetime-local"
//         placeholder="Registration Deadline"
//         value={event.registrationDeadline}
//         onChange={(e) =>
//           setEvent({ ...event, registrationDeadline: e.target.value })
//         }
//       />

//       <select
//         value={event.category}
//         onChange={(e) => setEvent({ ...event, category: e.target.value })}
//       >
//         <option value="SOCIAL">SOCIAL</option>
//         <option value="EDUCATIONAL">EDUCATIONAL</option>
//         <option value="RECREATIONAL">RECREATIONAL</option>
//         <option value="CIVIC">CIVIC</option>
//         <option value="EMERGENCY">EMERGENCY</option>
//       </select>

//       <select
//         value={event.status}
//         onChange={(e) => setEvent({ ...event, status: e.target.value })}
//       >
//         <option value="DRAFT">DRAFT</option>
//         <option value="PENDING_APPROVAL">PENDING_APPROVAL</option>
//         <option value="APPROVED">APPROVED</option>
//         <option value="CANCELLED">CANCELLED</option>
//         <option value="COMPLETED">COMPLETED</option>
//       </select>

//       <input
//         type="text"
//         placeholder="Recurrence Pattern"
//         value={event.recurrencePattern}
//         onChange={(e) => setEvent({ ...event, recurrencePattern: e.target.value })}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={event.recurring}
//           onChange={(e) => setEvent({ ...event, recurring: e.target.checked })}
//         />
//         Recurring Event
//       </label>

//       <br />
//       <button onClick={updateEvent}>Update Event</button>
//     </div>
//   );
// }

// export default Update;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Style.css'; // Make sure your CSS file is imported

function Update() {
  const { id } = useParams(); // Get event ID from URL
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    title: "",
    description: "",
    category: "SOCIAL",
    startDatetime: "",
    endDatetime: "",
    location: "",
    maxCapacity: 100,
    currentRegistrations: 0,
    registrationDeadline: "",
    status: "DRAFT",
    recurrencePattern: "",
    recurring: false
  });

  // 🔹 Fetch event details by ID
  useEffect(() => {
    fetch(`http://localhost:8080/getEvents`)
      .then((res) => res.json())
      .then((data) => {
        const foundEvent = data.find((e) => e.id === parseInt(id));
        if (foundEvent) setEvent(foundEvent);
      })
      .catch((err) => console.error("Error fetching event:", err));
  }, [id]);

  // 🔹 Update event
  const updateEvent = () => {
    fetch(`http://localhost:8080/updateEvent/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update event");
        return res.text();
      })
      .then(() => {
        alert("Event updated!");
        navigate("/events"); // Go back to events list
      })
      .catch((err) => console.error("Error updating event:", err));
  };

  return (
    <div className="add_event_container common_container">
      <h2 className="neighbor_title_container">Update Event</h2>
      <div className="add_event_form">
        <input
          className="event_input"
          type="text"
          placeholder="Title"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
        <input
          className="event_input"
          type="text"
          placeholder="Description"
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
        <input
          className="event_input"
          type="text"
          placeholder="Location"
          value={event.location}
          onChange={(e) => setEvent({ ...event, location: e.target.value })}
        />
        <input
          className="event_input"
          type="number"
          placeholder="Max Capacity"
          value={event.maxCapacity}
          onChange={(e) => setEvent({ ...event, maxCapacity: e.target.value })}
        />
        <input
          className="event_input"
          type="number"
          placeholder="Current Registrations"
          value={event.currentRegistrations}
          onChange={(e) => setEvent({ ...event, currentRegistrations: e.target.value })}
        />
        <input
          className="event_input"
          type="datetime-local"
          value={event.startDatetime}
          onChange={(e) => setEvent({ ...event, startDatetime: e.target.value })}
        />
        <input
          className="event_input"
          type="datetime-local"
          value={event.endDatetime}
          onChange={(e) => setEvent({ ...event, endDatetime: e.target.value })}
        />
        <input
          className="event_input"
          type="datetime-local"
          placeholder="Registration Deadline"
          value={event.registrationDeadline}
          onChange={(e) => setEvent({ ...event, registrationDeadline: e.target.value })}
        />

        <select
          className="event_select"
          value={event.category}
          onChange={(e) => setEvent({ ...event, category: e.target.value })}
        >
          <option value="SOCIAL">SOCIAL</option>
          <option value="EDUCATIONAL">EDUCATIONAL</option>
          <option value="RECREATIONAL">RECREATIONAL</option>
          <option value="CIVIC">CIVIC</option>
          <option value="EMERGENCY">EMERGENCY</option>
        </select>

        <select
          className="event_select"
          value={event.status}
          onChange={(e) => setEvent({ ...event, status: e.target.value })}
        >
          <option value="DRAFT">DRAFT</option>
          <option value="PENDING_APPROVAL">PENDING_APPROVAL</option>
          <option value="APPROVED">APPROVED</option>
          <option value="CANCELLED">CANCELLED</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>

        <input
          className="event_input"
          type="text"
          placeholder="Recurrence Pattern"
          value={event.recurrencePattern}
          onChange={(e) => setEvent({ ...event, recurrencePattern: e.target.value })}
        />
        <label className="event_checkbox_label">
          <input
            type="checkbox"
            checked={event.recurring}
            onChange={(e) => setEvent({ ...event, recurring: e.target.checked })}
          />
          Recurring Event
        </label>

        <button className="event_btn" onClick={updateEvent}>Update Event</button>
      </div>
    </div>
  );
}

export default Update;

