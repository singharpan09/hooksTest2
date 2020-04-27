//this function could have any name
//It takes state and action as argument
//reducer should have some initial data to initalize central store

const iState = {
  name: "Ramesh",
  wishes: ["eat", "code", "repeat"],
};
//initial data for reducer

const reducer = (state = iState, action) => {
  return state;
};

export default reducer;
