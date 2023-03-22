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
      }}
    >
      <Lottie
        style={{
          position: "relative",
          zIndex: -3,
          width: "40%",
        }}
        options={defaultOptions}
        height={200}
        width="100%"
      />
    </div>
  );
};

export default Loading;
