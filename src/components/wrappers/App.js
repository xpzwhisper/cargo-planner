import React from "react";
import "semantic-ui-css/semantic.min.css";
//import logo from './logo.svg';
import "../../gfx/styles/App.css";
import Companies from "../ui/Companies.js";
import MainContent from "../ui/MainContent.js";

function App() {
  return (
    <div className="App">
      <div className="ui grid">
        <Companies />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
