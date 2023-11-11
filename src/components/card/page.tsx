import React from "react";
const dashed = "border-2 border-dashed";
export default function Card() {
  return (
    <div
      id="container"
      className={`${dashed} bg-gray-500 flex justify-center items-center flex-wrap w-screen h-screen shrink-0 lg:h-fit lg:w-fit`}
    >
      <div id="admi-face" className={`${dashed} h-40 w-40`}></div>
      <div
        id="brief"
        className={`${dashed} w-full h-full lg:w-96 lg:h-72`}
      ></div>
      {/* end of brief */}
    </div>
    //   end of container
  );
}
