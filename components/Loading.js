import React from "react";
import { Circle } from "better-react-spinkit";
// import Image from "next/image";
function Loading() {
  return (
    <center style={{ display: "grid", placeitems: "center", height: "100vh" }}>
      <div>
        <h1>Loading...</h1>
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
          height={200}
          style={{ marginBottom: 10 }}
        ></img>

        <Circle color="#3cbc28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
