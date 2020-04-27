import React from "react";
import { connect } from "react-redux";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>This is App component</h2>
    </div>
  );
}

export default connect()(App);
//parethesis() is used to invoke and App component is passed to it...as "connect" return Higher Order Component
