import React from "react";
import { connect } from "react-redux";
import { anotherName } from "./actions/myaction";

import "./App.css";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h2>This is App component</h2>
      <p>The user name is {props.myname}</p>
      <button
        onClick={() => {
          props.changeName("Rahul");
        }}
      >
        Click Here
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name,
  };
};

//This changeName will be "dispatched" to reducer...for updating the state
//"changeName" props is availbale in App component
//changeName will accept some "name" argument
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch(anotherName(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//parethesis() is used to invoke and App component is passed to it...as "connect" return Higher Order Component
//If Component is not needed to display but only update the state...then first argument to connect() is null
