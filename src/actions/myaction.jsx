//action crator is a function that returns the action
//It is used for asysnchronous actions...when data takes time to load
//we make action seperatly here and import and use with dispatch function in "App.js"
//It also make our code reusable
//action creator is most useful with "redux-thunk"
//asynxchronous opertions are performend here
//Redux-thunk as middleware b/w action and reducer

export const anotherName = (name) => {
  return {
    type: "CHANGE_NAME",
    payload: name,
  };
};
