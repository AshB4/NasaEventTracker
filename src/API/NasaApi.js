import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./NasaApi.css";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://eonet.gsfc.nasa.gov/api/v2.1/events');
        const filteredEvents = response.data.events.filter(event => {
          // Filter events for years 2023 and 2024
          const eventYear = new Date(event.geometries[0].date).getFullYear();
          return eventYear === 2023 || eventYear === 2024;
        });
        setEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
<div>
    <h2>Recent Events : 2023-2024 </h2>
    </div>
    <div className='table-container'>
      
      <table className='event-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th> </th>
            <th>Data on the event</th>
            <th>Description</th>
            
            <th>Date</th>
            <th>Coordinates</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td><a href={event.sources[0].url} target="_blank" rel="noopener noreferrer">{event.sources[0].url}</a></td>
              <td>{event.categories[0].title}</td>
              {/* <td>{event.sources[0].url}</td> */}

              <td>{new Date(event.geometries[0].date).toLocaleString()}</td>
              {/* <td>{event.geometries[0].type}</td> */}
              <td>{event.geometries[0].coordinates[0]}, {event.geometries[0].coordinates[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default EventList;
