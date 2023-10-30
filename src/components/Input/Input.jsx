import { useState } from "react";
import "./Input.css";
export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event) => {
    console.log(event);
    // const { target: { value = "" } = {} } = event;
    //     const { target } = event;
    setInputValue(event.target.value);
    // setInputValue(value);
  };
  const onClearHandler = () => {
    console.warn("CLEAR");
    setInputValue("");
  };
  return (
    <>
      <div className="container">
        <input
          value={inputValue}
          placeholder="enter your name"
          // onChange={(event) => setInputValue(event.target.value)}
          onChange={onChangeHandler}
          type="text"
        />
      </div>
      <div
        className="container"
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        <button onClick={onClearHandler}>clear</button>
      </div>
      <div className="container">
        <h3>{inputValue}</h3>
      </div>
    </>
  );
};
