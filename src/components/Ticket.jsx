import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  const ticketStyle = {
    'fontSize': '8vh',
    'display': 'grid',
    'gridTemplateColumns': '2fr 1fr 9fr',
    'alignItems': 'center',
    'minHeight': '15vh',
    'fontFamily': 'sans-serif'
  }
  const locationStyle = {
    'minWidth': '3em',
    'maxWidth': '10vw',
    'paddingLeft': '10px'
  }
  const timeStyle = {
    'fontSize': '6vh',
    'minWidth': '4em',
    'maxWidth': '15vw',
    'color': '#777'
  }
  const nameStyle = {
    'whiteSpace': 'nowrap',
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
    'fontSize': '8vh'
  }
  const timeStamp = () => {
    const timeElapsed = Date.now() - parseInt(props.timestamp);
    const minutes = Math.floor(timeElapsed / 60000);
    let timeString
    if (minutes < 1) {
      timeString = "<1m";
    } else {
      timeString = `${minutes}m`
    }
    return timeString;
  }
  return (
    <div>
      <div style={ticketStyle}>
        <div style={locationStyle}>{props.location}</div>
        <div style={timeStyle}>{timeStamp()}</div>
        <div>{props.names}</div>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  timestamp: PropTypes.string
};

export default Ticket;
