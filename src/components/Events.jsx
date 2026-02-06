// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Events() {
//   const [events, setEvents] = useState([]);

//   const fetchEvents = () => {
//     fetch("http://localhost:8080/getEvents")
//       .then((res) => res.json())
//       .then((data) => setEvents(data))
//       .catch((err) => console.error("Error fetching events:", err));
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const deleteEvent = (id) => {
//     fetch(`http://localhost:8080/deleteEvents?id=${id}`, { method: "DELETE" })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to delete event");
//         return res.text();
//       })
//       .then(() => {
//         alert("Event deleted!");
//         fetchEvents();
//       })
//       .catch((err) => console.error("Error deleting event:", err));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Events List</h1>
//       <Link to="/add-event">Add Event</Link>
//       {events.length === 0 ? (
//         <p>No events available.</p>
//       ) : (
//         <ul>
//           {events.map((event) => (
//             <li key={event.id}>
//               <h3>{event.title}</h3>
//               <p>{event.description}</p>
//               <p>
//                 <strong>Location:</strong> {event.location}
//               </p>
//               <p>
//                 <strong>Status:</strong> {event.status}
//               </p>
//               <p>
//                 <strong>Category:</strong> {event.category}
//               </p>
//               <Link to={`/update-event/${event.id}`}>Update Event</Link>
//               <button onClick={() => deleteEvent(event.id)}>Delete</button>
//               <hr />
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Events;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Style.css'; // make sure CSS is imported

function Events() {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    fetch("http://localhost:8080/getEvents")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const deleteEvent = (id) => {
    fetch(`http://localhost:8080/deleteEvents?id=${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete event");
        return res.text();
      })
      .then(() => {
        alert("Event deleted!");
        fetchEvents();
      })
      .catch((err) => console.error("Error deleting event:", err));
  };

  return (
    <div className="events_container common_container">
      
          <div>
      <nav>
        <div className="company_title">NEARMEET</div>
        <div className="nav_links">
          {/* <a href="">HOME</a>
          <a href="">EVENTS</a>
          <a href="">SPONSORS</a>
          <a href="">VENUE</a>
          <a href="">AGENDA</a> */}
                    <Link to="/">HOME</Link>
                    <Link to="/events">EVENTS</Link>
                    <Link to="/sponsors">SPONSORS</Link>
                    <Link to="/venue">VENUE</Link>
                    <Link to="/agenda">AGENDA</Link>
        </div>
        <div className="login_container">
          <a href="">LOGIN</a>
        </div>
      </nav>

      <div className="common_container">
        <div className="page_naved_container">
          <div className="page_title">UPCOMING EVENT LISTING PAGE</div>
          <div className="naved_direction_title">
            HOME &gt; <span>EVENTS</span>
            {/* <i className="fa-solid fa-greater-than greater_than_icon"></i> */}
          </div>
        </div>

        <div className="events_conatiner add_padding_for_event_conatainer">
          <div className="speaker_title">
            EVENTS <span>OF</span> THE SPEAKER
          </div>
          <div className="two_lines_and_icon_container">
            <div className="lines_and_icon_holder">
              <div className="line_holder_speaker"></div>
              <div className="icon_speaker_container">
                <i className="fa-solid fa-calendar-week calendar_icon"></i>
              </div>
              <div className="line_holder_speaker"></div>
            </div>
          </div>
          <div className="u_might_also_love_content">
            You all love these events.
          </div>

          <div className="event_from_api_container">
            {/* events will load here */}
          </div>
        </div>
      </div>
    </div>


      <div className="events_header">
        <h1 className="speaker_title">EVENT LIST</h1>
        <Link to="/add-event" className="circle_btn_add_event">+</Link>
      </div>

      {events.length === 0 ? (
        <p className="no_events_text">No events available.</p>
      ) : (
        <ul className="events_list">
          {events.map((event) => (
            <li key={event.id} className="event_card">
              <h3 className="event_title">{event.title}</h3>
              <p className="event_description">{event.description}</p>
              <p className="event_location"><strong>Location :</strong> {event.location}</p>
              <p className="event_status"><strong>Status :</strong> {event.status}</p>
              <p className="event_category"><strong>Category :</strong> {event.category}</p>

              <div className="event_actions">

                <div>
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className=" delete_event_btn"
                  >
                    <i class="fa-solid fa-xmark delete_iconn"></i>
                    {/* Delete */}
                  </button>
                </div>

                <div>
                  <Link to={`/update-event/${event.id}`} className="event_btn update_event_btn">
                  {/* Update */}
                    <i class="fa-regular fa-pen-to-square update_iconn"></i>
                  </Link>
                </div>

              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Events;
