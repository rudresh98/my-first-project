import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const increNumber = () => {
    console.log("incree");
  };
  const decreNumber = () => {
    console.log("decree");
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
