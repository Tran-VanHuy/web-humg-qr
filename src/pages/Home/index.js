import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from './Componets';
import FaInformation from './Componets/facilitiesinformation';
import Video from './Componets/video';

const HomePage = () => {
    
      return (
            <div style = {{marginBottom: "20px"}}>
                 <Home /> 
                 <Video />
                 <FaInformation />
            </div>
      );
};

export default HomePage;