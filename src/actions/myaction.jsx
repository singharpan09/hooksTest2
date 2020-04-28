//action crator is a function that returns the action
//It is used for asysnchronous actions...when data takes time to load
//we make action seperatly here and import and use with dispatch function in "App.js"
//It also make our code reusable
//action creator is most useful with "redux-thunk"
//asynxchronous opertions are performend here
//Redux-thunk as middleware b/w action and reducer

// export const anotherName = (name) => {
//   return {
//     type: "CHANGE_NAME",
//     payload: name,
//   };
// };

//here we were directly returning object ourlier
//but now we will fetch the data and then return....so now we will return a function
//now we will fetch name from api
//This will take dispatch as argument
//will first fetch and then dispatch the "name"
//dispatch will return
//we are not sending any data to api so..will remove "name" argumnet from anotherName
//this is done when we want to fetch data based on our send data

// export const anotherName = () => {
//   return (dispatch) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((res2) => {
//         dispatch({
//           type: "CHANGE_NAME",
//           payload: res2[0].name,
//         });
//       });
//   };
// };

export const anotherName = () => {
  return async (dispatch) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res2 = await data.json();

    dispatch({
      type: "CHANGE_NAME",
      payload: res2[0].name,
    });
  };
};

//data fetched through async and await.....await resolves the promise
