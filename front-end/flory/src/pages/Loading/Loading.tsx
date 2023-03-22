import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/lotties/sunshine.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        // zIndex: 1,
        backgroundColor: "#b01fbf",
      }}
    >
      {/* <Lottie
        style={{
          position: "relative",

          width: "40%",
        }}
        options={defaultOptions}
        height={200}
        width="100%"
      /> */}
      <h1 style={{ color: "white" }}>Loading</h1>
    </div>
  );
};

export default Loading;
