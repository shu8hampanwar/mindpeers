import React from "react";
import Icon from "../assets/Happy.svg";

const Footer = ({ moodsArray }) => {
  console.log(moodsArray);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        marginRight: 40,
        marginLeft: 40,
      }}
    >
      <p
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#fff",
          marginBottom: 35,
        }}
      >
        {"Are you also feeling?"}
      </p>
      <div style={styles.moodsContainer}>
        {moodsArray.map((item) => (
          <div
            style={{
              display: "flex",
              height: 35,
              paddingRight: 23,
              paddingLeft: 23,
              alignItems: "center",
              width: "fit-content",
              borderRadius: 24,
              backgroundColor: "#2E2E2E",
              fontSize: 12,
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <button
        style={{
          width: 348,
          height: 48,
          backgroundColor: "#3D3D3D",
          border: "1px solid #5A5A5A",
          borderRadius: "8px",
          marginTop: 42,
          color: "#A5A5A5",
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 35,
        }}
      >
        {"PROCEED"}
      </button>
    </div>
  );
};

export default Footer;

const styles = {
  moodsContainer: {
    width: "100%",
    flexBasis: "auto",
    alignContent: "center",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItmes: "center",
    gap: 17,
  },
};
