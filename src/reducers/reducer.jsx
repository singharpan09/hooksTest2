//this function could have any name
//It takes state and action as argument
//reducer should have some initial data to initalize central store

const iState = {
  name: "Ramesh",
  wishes: ["eat", "code", "repeat"],
};
//initial data for reducer
//inialilly reducer is only showing data(state)
//now action have the data(payload)...reducer will decide what to do
//If there is more than one action ....we use "Switch case checking"
//we return objet in action...to update the state
//What we will return...will be new state
//first we will copy the state with "...state" then we will override(update) the needed property
//otherwise other state data will be lost
const reducer = (state = iState, action) => {
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
export default reducer;
