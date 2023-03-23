import React from "react";
import { useState } from "react";

const Form = ({ setPage }) => {
  const [input, setInput] = useState();
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const pageHandler = (event) => {
    event.preventDefault();
    setPage(input);
  };
  return (
    <form>
      <label htmlFor="page"> Set page </label>
      <input type="text" onChange={inputHandler} id="page" />
      <button type="submit"> Change page </button>
    </form>
  );
};

export default Form;
