import { useState, useEffect } from "react";
import Icon from "../assets/Happy.svg";

const Main = ({ iconsArray }) => {
  const [index, setIndex] = useState(0);

  const dragHandle = () => {
    const lasItem = iconsArray.length - 1;
    if (index >= lasItem) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  return (
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
          left: index === 0 ? 110 : 45,
          transform: "translateX(0)",
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

      <div style={styles.border}></div>
    </div>
  );
};

export default Main;

const styles = {
  container: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: 450,
  },
  imgConatiner: {
    height: "40vmin",
    pointerEvents: "none",
  },
  border: {
    width: "100%",
    height: "100px",
    border: "dashed 1spx #000",
    borderColor: "#000 transparent transparent transparent",
    borderRadius: "50%/100px 100px 0 0",
  },
};
