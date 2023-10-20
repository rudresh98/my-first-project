import { useState } from "react";
import "./Input.css";
export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event) => {
    console.log(event);
    const { target: { value = "" } = {} } = event;
    //     const { target } = event;
    //     setInputValue(event.target.value);
    setInputValue(value);
  };
  return (
    <>
      <div className="container">
        <input
          placeholder="enter your name"
          // onChange={(event) => setInputValue(event.target.value)}
          onChange={onChangeHandler}
          type="text"
        />
        <button>clear</button>
      </div>
      <div className="container">
        <h3>{inputValue}</h3>
      </div>
    </>
  );
};
