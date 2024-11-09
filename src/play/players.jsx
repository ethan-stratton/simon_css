import React, { useState, useEffect } from 'react';
import { GameNotifier } from './gameNotifier';

export function Players({ userName }) {
    const [events, setEvent] = React.useState([]);

    React.useEffect(() => {
      GameNotifier.addHandler(handleGameEvent);
    
      return () => {
        GameNotifier.removeHandler(handleGameEvent);
      };
    });

    function handleGameEvent(event) {
        let newEvents = [event, ...events];
        if (newEvents.length > 10) {
          newEvents = newEvents.slice(1, 10);
        }
        setEvent(newEvents);
      }

  return (
    <div className="players">
      <span className="player-name">{userName}</span>
      <div id="player-messages">
        {events.map((event, index) => (
          <div key={index} className="event">
            <span className="player-event">{event.userName}</span> scored {event.score}
          </div>
        ))}
      </div>
    </div>
  );
}
