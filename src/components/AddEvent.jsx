// import React, { useState } from "react";

// function AddEvent() {
//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     description: "",
//     category: "SOCIAL", // default from EventCategory
//     startDatetime: "",
//     endDatetime: "",
//     location: "",
//     maxCapacity: 100,
//     currentRegistrations: 0,
//     registrationDeadline: "",
//     status: "DRAFT", // default from EventStatus
//     recurrencePattern: "",
//     recurring: false
//   });

//   const addEvent = () => {
//     fetch("http://localhost:8080/addEvents", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newEvent),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to add event");
//         return res.text();
//       })
//       .then(() => alert("Event added!"))
//       .catch((error) => console.error("Error adding event:", error));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Add New Event</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={newEvent.title}
//         onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={newEvent.description}
//         onChange={(e) =>
//           setNewEvent({ ...newEvent, description: e.target.value })
//         }
//       />
//       <input
//         type="text"
//         placeholder="Location"
//         value={newEvent.location}
//         onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Max Capacity"
//         value={newEvent.maxCapacity}
//         onChange={(e) =>
//           setNewEvent({ ...newEvent, maxCapacity: e.target.value })
//         }
//       />
//       <input
//         type="datetime-local"
//         value={newEvent.startDatetime}
//         onChange={(e) =>
//           setNewEvent({ ...newEvent, startDatetime: e.target.value })
//         }
//       />
//       <input
//         type="datetime-local"
//         value={newEvent.endDatetime}
//         onChange={(e) =>
//           setNewEvent({ ...newEvent, endDatetime: e.target.value })
//         }
//       />
//       <input
//         type="datetime-local"
//         placeholder="Registration Deadline"
//         value={newEvent.registrationDeadline}
//         onChange={(e) =>
//           setNewEvent({ ...newEvent, registrationDeadline: e.target.value })
//         }
//       />
//       <select
//         value={newEvent.category}
//         onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
//       >
//         <option value="SOCIAL">SOCIAL</option>
//         <option value="EDUCATIONAL">EDUCATIONAL</option>
//         <option value="RECREATIONAL">RECREATIONAL</option>
//         <option value="CIVIC">CIVIC</option>
//         <option value="EMERGENCY">EMERGENCY</option>
//       </select>
//       <select
//         value={newEvent.status}
//         onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value })}
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
//         value={newEvent.recurrencePattern}
//         onChange={(e) =>
//           setNewEvent({ ...newEvent, recurrencePattern: e.target.value })
//         }
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={newEvent.recurring}
//           onChange={(e) =>
//             setNewEvent({ ...newEvent, recurring: e.target.checked })
//           }
//         />
//         Recurring Event
//       </label>
//       <br />
//       <button onClick={addEvent}>Add Event</button>
//     </div>
//   );
// }

// export default AddEvent;



import React, { useState } from "react";
import './Style.css'; // Make sure your CSS file is imported

function AddEvent() {
  const [newEvent, setNewEvent] = useState({
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

  const addEvent = () => {
    fetch("http://localhost:8080/addEvents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add event");
        return res.text();
      })
      .then(() => alert("Event added!"))
      .catch((error) => console.error("Error adding event:", error));
  };

  return (
    <div className="add_event_container common_container">
      <h2 className="neighbor_title_container">Add New Event</h2>
      <div className="add_event_form">
        <input
          className="event_input"
          type="text"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          className="event_input"
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
        <input
          className="event_input"
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />
        <input
          className="event_input"
          type="number"
          placeholder="Max Capacity"
          value={newEvent.maxCapacity}
          onChange={(e) =>
            setNewEvent({ ...newEvent, maxCapacity: e.target.value })
          }
        />
        <input
          className="event_input"
          type="datetime-local"
          value={newEvent.startDatetime}
          onChange={(e) =>
            setNewEvent({ ...newEvent, startDatetime: e.target.value })
          }
        />
        <input
          className="event_input"
          type="datetime-local"
          value={newEvent.endDatetime}
          onChange={(e) =>
            setNewEvent({ ...newEvent, endDatetime: e.target.value })
          }
        />
        <input
          className="event_input"
          type="datetime-local"
          placeholder="Registration Deadline"
          value={newEvent.registrationDeadline}
          onChange={(e) =>
            setNewEvent({ ...newEvent, registrationDeadline: e.target.value })
          }
        />
        <select
          className="event_select"
          value={newEvent.category}
          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
        >
          <option value="SOCIAL">SOCIAL</option>
          <option value="EDUCATIONAL">EDUCATIONAL</option>
          <option value="RECREATIONAL">RECREATIONAL</option>
          <option value="CIVIC">CIVIC</option>
          <option value="EMERGENCY">EMERGENCY</option>
        </select>
        <select
          className="event_select"
          value={newEvent.status}
          onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value })}
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
          value={newEvent.recurrencePattern}
          onChange={(e) =>
            setNewEvent({ ...newEvent, recurrencePattern: e.target.value })
          }
        />
        <label className="event_checkbox_label">
          <input
            type="checkbox"
            checked={newEvent.recurring}
            onChange={(e) =>
              setNewEvent({ ...newEvent, recurring: e.target.checked })
            }
          />
          Recurring Event
        </label>
        <button className="event_btn" onClick={addEvent}>Add Event</button>
      </div>
    </div>
  );
}

export default AddEvent;
