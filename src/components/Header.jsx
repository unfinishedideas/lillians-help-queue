import React from "react";
import { Link } from 'react-router-dom';
function Header(){
  const headerStyle = {
    'backgroundColor': '#f05a26',
    'textAlign': 'center',
    'color': 'white',
    'margin': '0',
    'fontFamily': "'Nixie One', cursive",
    'width': '100%',
    'height': '50px',
    'padding': '9px 0px 0px 0px'
  };

  const headerH1 = {
    'fontSize': '30px'
  };
  const homeStyle = {
    'display':'block',
    'float':'left',
    'width':'50px',
    'height':'25px',
    'border-style':'outset',
    'border-radius':'5px',
    'background-color':'#c2c2c2',
    'top':'10px',
    'position':'fixed'
  }
  const createStyle = {
    'display':'block',
    'float':'left',
    'width':'50px',
    'height':'25px',
    'border-style':'outset',
    'border-radius':'5px',
    'background-color':'#c2c2c2',
    'top':'10px'
  }
  return (
    <div style={headerStyle}>
      <div style={headerH1}>Queue</div>
      <div style={homeStyle}>
      <Link to="/">Home</Link>
      </div>
      <div style={createStyle}>
      <Link to="/newticket">Create Ticket</Link>
      </div>
    </div>
  );
}

export default Header;
