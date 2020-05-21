import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { anotherName, addWish } from "./actions/myaction";
//now we will use hooks to get and dispatch values to store
import "./App.css";
//will use useSelector and useDispatch hooks
//these hooks are the part of react-redux
//we don't need connect now to connect to store
//useSelector have direct access to store ...like mapStatetoProps have
//now for dispatching the action we use "useDispatch" hooks
function App() {
  const data = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  //we simply need to call the useDispatch
  //then will call action Creator using this dispatch
  //wishes get from store
  //dispatch takes "actionCreator" as argument
  const mywishes = data.wish.map((item) => {
    return (
      <React.Fragment>
        <h2 key={Math.random()}>{item}</h2>
      </React.Fragment>
    );
  });
  return (
    <div className="App">
      <h2>This is App component</h2>
      <p>The user name is {data.name}</p>
      {mywishes}
      <button
        onClick={() => {
          dispatch(anotherName());
        }}
      >
        Click Here
      </button>
      <button
        onClick={() => {
          dispatch(addWish());
        }}
      >
        Add Wish
      </button>
    </div>
  );
}

//now we don't need "mapStatetoProps" or "mapDispatchtoProps" to "get data" or "dispatch actions"

// //to get data "mapStatetoProps"
// const mapStateToProps = (state) => {
//   return {
//     myname: state.name,
//     mywish: state.wish,
//   };
// };
// //we are not sending any data..so no need to send argument to API
// //to change/update data "mapDispatchToProps"
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeName: () => {
//       dispatch(anotherName());
//     },
//     addWish: () => {
//       dispatch(addWish());
//     },
//   };
// };

export default App;
//parethesis() is used to invoke and App component is passed to it...as "connect" return Higher Order Component
//If Component is not needed to display but only update the state...then first argument to connect() is null

// addWish: () => {
//  dispatch(addWish);
//},
//here first "addWish" will be used as props in "Add" component
//& second "addWish" will be dispatched to action for the furthur operation...
//they both could have different names
