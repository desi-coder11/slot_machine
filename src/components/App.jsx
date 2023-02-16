import React from "react";
import SlotM from "./SlotM";

const App = () => {
  return (
    <>
      <h1 style={{ color: "red", textAlign: "center" }}>Slot machine</h1>
      <hr />

      <div
        style={{
          color: "blue",
          justifyContent: "center",
          textAlign: "center",
          flex: 1
        }}
      >
        <SlotM x="1" y="1" z="1" />
        <hr />
        <SlotM x="1" y="2" z="1" />
        <hr />
        <SlotM x="1" y="1" z="3" />
        <hr />
        <SlotM x="5" y="1" z="1" />
        <hr />
        <SlotM x="5" y="5" z="5" />
        <hr />
      </div>
    </>
  );
};

export default App;
