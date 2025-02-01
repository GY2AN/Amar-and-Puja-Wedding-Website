import React, { useState } from "react";
import engagementImg from "../assets/images/engagement.jpg";
import mehndiImg from "../assets/images/mehndi.jpg";
import weddingImg from "../assets/images/wedding.jpg";

const DatesSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(1);

  const events = [
    { id: 1, date: "2025-02-04", name: "Haldi Ceremony", img: engagementImg },
    { id: 2, date: "2025-02-05", name: "Ghee Dhari", img: mehndiImg },
    { id: 3, date: "2025-02-06", name: "Wedding", img: weddingImg },
  ];

  const handleEventClick = (id) => {
    setSelectedEvent(id);
  };

  return (
    <section id="dates" className="dates-section">
      <h2>Events</h2>
      <div className="dates-content">
        {/* Left Column: Event Tiles */}
        <div className="event-tiles">
          {events.map((event) => (
            <div
              key={event.id}
              className={`tile ${selectedEvent === event.id ? "active" : ""}`}
              onClick={() => handleEventClick(event.id)}
            >
              <h3>{event.name}</h3>
              <p>{event.date}</p>
            </div>
          ))}
        </div>

        {/* Right Column: Event Images */}
        <div className="event-image">
          {events.map(
            (event) =>
              selectedEvent === event.id && (
                <img
                  key={event.id}
                  src={event.img}
                  alt={event.name}
                  className="event-img"
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default DatesSection;
