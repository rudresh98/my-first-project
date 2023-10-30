import { useState } from "react";
// import React from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const increNumber = () => {
    console.warn("incree", { number });
    setNumber(number + 1);
  };
  const decreNumber = () => {
    console.error("decree");
    setNumber(number - 1);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <button
            disabled
            style={{
              height: "3rem",
              width: "3rem",
              border: "none",
              cursor: "pointer",
              marginRight: "1rem",
              background: "green",
            }}
            onClick={decreNumber}
          >
            -
          </button>
        </div>
        <div style={{ fontSize: "5rem", fontWeight: "600" }}>{number}</div>
        <div>
          <button
            style={{
              height: "3rem",
              width: "3rem",
              border: "none",
              cursor: "pointer",
              marginLeft: "1rem",
              background: "red",
            }}
            onClick={increNumber}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
