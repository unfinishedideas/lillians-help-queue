import React from "react";

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

  return (
    <div style={headerStyle}>
      <div style={headerH1}>Queue</div>
    </div>
  );
}

export default Header;
