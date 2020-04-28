//we are making second reducer for "wishes"
//we have empty initial wishes array
//we send [](type of state we are expecting) ,from all the reducer
//all the state value combine in "index.js" and make a state object

const wishReducer = (state = [], action) => {
  console.log(action);
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      name: action.payload,
    };
  }
  return state;
};
//else state will be previous state "return state"
export default wishReducer;
