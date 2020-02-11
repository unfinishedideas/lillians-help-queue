import React from "react";
import Ticket from "./Ticket"

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.',
    timestamp: '1581448053711'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?',
    timestamp: '1581448123711'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :(',
    timestamp: '1581448153711'
  }
];

function TicketList(){
  const makeTickets = () => {
    const ticketArr = masterTicketList.map((ticket, index) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        timestamp={ticket.timestamp}
        key={index*2} />
    )
    const insertHr = (arr) => {
      const newArr = [];
      for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        if (i < arr.length - 1) {
          newArr.push(<hr key={i*2-1}/>);
        }
      }
      return newArr;
    }
    return insertHr(ticketArr);
  };
  return (
    <div>
      {makeTickets()}
    </div>
  );
}

export default TicketList;
