import { useState, useEffect } from "react";

import "../App.css";

const Main = ({ iconsArray }) => {
  const [index, setIndex] = useState(0);
  const lasItem = iconsArray.length - 1;
  const dragHandle = () => {
    if (index >= lasItem) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  return (
    <>
      <div style={styles.container}>
        <>
          <p
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
              marginBottom: 35,
            }}
          >
            {"How are you feeling today {Name }?"}
          </p>
          {iconsArray.map((item, iconIndex) => {
            return iconIndex === index ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 73,
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    width: "fit-content",
                    height: 31,
                    borderRadius: 24,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: 22,
                    paddingLeft: 22,
                    background:
                      "linear-gradient(#2E2E2E, #2E2E2E) padding-box,linear-gradient(to right, #16A9B1, #B5D654) border-box",
                    borderRadius: 24,
                    border: "2px solid transparent",
                  }}
                >
                  {item?.title}
                </span>
              </div>
            ) : null;
          })}
        </>
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "absolute",
            marginTop: 150,
            top: 0,
            left: index === 0 ? 120 : 45,
            transform: index >= lasItem ? "translateX(-25%)" : "translateX(0)",
          }}
        >
          {iconsArray.map((item, iconIndex) => {
            return (
              <div
                onDrag={dragHandle}
                onTouchMove={dragHandle}
                draggable="true"
                style={{
                  display: "flex",
                  overflow: "hidden",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={item?.image}
                  alt=""
                  style={{
                    height: iconIndex === index ? 197 : 83,
                    width: iconIndex === index ? 186 : 78,
                    pointerEvents: "none",
                    opacity: iconIndex === index ? 1 : 0.5,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="box"></div>
    </>
  );
};

export default Main;

const styles = {
  container: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: 380,
  },
};
