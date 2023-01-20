import React from "react";
import "../App.css";
import ArrowIcon from "../assets/ArrowIcon.svg";

const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: 72,
        marginBottom: 38,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          marginLeft: 30,
          display: "flex",
          width: 40,
          height: 40,
          backgroundColor: "#2E2E2E",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={ArrowIcon} alt="" />
      </div>
      <div
        style={{
          paddingRight: 150,
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            // marginBottom: 38,
          }}
        >
          {"Mood Check-In"}
        </p>
      </div>
    </div>
  );
};

export default Nav;
