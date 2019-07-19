import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>This is Uttej's Website</h1>
        <h4>
          Live as if you were to die tomorrow, learn as if you were to live
          forever” ~ Mahatma Gandhi
        </h4>
      </header>
    </div>
  );
}

export default App;
