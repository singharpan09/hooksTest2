//action crator is a function that returns the action
//It is used for asysnchronous actions...when data takes time to load

export const anotherName = () => {
  return {
    type: "CHANGE_NAME",
    payload: name,
  };
};
