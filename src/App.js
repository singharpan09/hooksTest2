import React from "react";
import { connect } from "react-redux";

import "./App.css";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h2>This is App component</h2>
      <p>The user name is {props.myname}</p>
    </div>
  );
}
//Note:to use the value we can directly use through store
//but to update/change any data in store we need to follow the steps...component-->action--->reducer-->store
//any name can be used

//a variable is used to map state to props...it returns a object..key,value...we use "key" to use value(in store) using props
//It is passed to connect as argument
//it takes state as argument
const mapStateToProps = (state) => {
  return {
    myname: state.name,
  };
};

export default connect(mapStateToProps)(App);
//parethesis() is used to invoke and App component is passed to it...as "connect" return Higher Order Component
