import React from "react";
import gifLoading from "../images/loadingGif.gif";
import styleLoading from "../components/Loading.module.css";

const Loading = () => {
  return (
    <div className={styleLoading.gifLoading}>
      <img src={gifLoading}></img>
    </div>
  );
};

export default Loading;
