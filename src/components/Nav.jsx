import React from "react";

const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: 72,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#fff",
          marginBottom: 38,
        }}
      >
        {"Mood Check-In"}
      </p>
    </div>
  );
};

export default Nav;
