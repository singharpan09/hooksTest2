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

const mapStateToProps = (state) => {
  return {
    myname: state.name,
  };
};

//for updating the state
//this returns a methods which we call with props....we give method name "changeName" here
//method takes a argument...which is changing
//dispatch()takes action(type,payload) as argumnet
//action is a type of object
//this is given as second argument to connect()
//"changeName" props is availbale in App component
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch({ type: "CHANGE_NAME", payload: name });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//parethesis() is used to invoke and App component is passed to it...as "connect" return Higher Order Component
//If Component is not needed to display but only update the state...then first argument to connect() is null
