import React from "react";
import { CircleLoader } from "react-spinners";
const Loading = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "auto",
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          left: 0,
          background: "#0F1624",
          margin: "0 auto",
        }}
      >
        <CircleLoader color="#36d7b7" loading size={99} />
      </div>
    </>
  );
};

export default Loading;
