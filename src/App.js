import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by FrantiskaM and it is hosted on{" "}
          <a
            href="https://github.com/FrantiskaM/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub.
          </a>{" "}
          and is open-sourced.
        </footer>
      </div>
    </div>
  );
}
