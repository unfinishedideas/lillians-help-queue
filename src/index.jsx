import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function liveTimes() {
    ReactDOM.render(
    <App/>,
    document.getElementById('react-app-root')
  );
}
setInterval(liveTimes, 1000);
