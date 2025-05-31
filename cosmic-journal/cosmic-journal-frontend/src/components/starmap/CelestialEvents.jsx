import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CelestialEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents([{ name: "Meteor Shower", date: "2025-08-12" }]); 
  }, []);

  return (
    <div className="p-4">
      <h3>Upcoming Celestial Events</h3>
      {events.map((event, index) => (
        <div key={index} className="border p-2 my-2">
          <p>{event.name} on {event.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CelestialEvents;