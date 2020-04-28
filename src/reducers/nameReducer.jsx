//state is a object
//initilly we don't define state here
//we send " "(type of state we are expecting) ,from all the reducer
//all the state value combine in "index.js" and make a state object
//state data is divided into two reducers
//we can't now return the state here...b'coz name reducer have now only "name" value of the state
//so we will only return name here
const nameReducer = (state = "", action) => {
  console.log(action);
  if (action.type === "CHANGE_NAME") {
    return action.payload;
  }
  return state;
};
//else state will be previous state "return state"
export default nameReducer;
