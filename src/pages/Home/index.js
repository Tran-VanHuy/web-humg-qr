
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Home from "./Componets";
import FaInformation from "./Componets/facilitiesinformation";
import Video from "./Componets/video";

const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>Trang chủ</title>
    </Helmet>
    
      <div style={{ paddingBottom: "20px" }}>
        <Home />
        <Video />
        <FaInformation />
      </div>
    </>
  );
};

export default HomePage;
