import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CelestialEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents([
      { name: "Meteor Shower", date: "2025-08-12" },
      { name: "Lunar Eclipse", date: "2025-09-07" },
      { name: "Perseid Meteor Shower", date: "2025-08-13" },
    ]);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-gray-700"
    >
      <h3 className="text-xl font-semibold text-starry mb-4">Upcoming Celestial Events</h3>
      {events.length === 0 ? (
        <p className="text-gray-400">No upcoming events.</p>
      ) : (
        events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="border border-gray-600 p-3 my-2 rounded-lg bg-gray-800 bg-opacity-50"
          >
            <p className="text-starry">{event.name} on {event.date}</p>
          </motion.div>
        ))
      )}
    </motion.div>
  );
}

export default CelestialEvents;