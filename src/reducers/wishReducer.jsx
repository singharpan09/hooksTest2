//we are making second reducer for "wishes"
//we have empty initial wishes array
//we send [](type of state we are expecting) ,from all the reducer
//all the state value combine in "index.js" and make a state object
//any action has not been dispatched to this reducer....so it will simply return state
const wishReducer = (state = [], action) => {
  if (action.type === "ADD_WISH") {
    return [...state, action.payload];
  }
  return state;
};
//else state will be previous state "return state"
export default wishReducer;
