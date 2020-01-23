import React from "react";

const ErrHandler = err => {
  const { message } = err;
  console.log(message);
  let state = {
    message: message ? message : "Oops route not found"
  };

  return <div>{<h3>{state.message}</h3>}</div>;
};

export default ErrHandler;
