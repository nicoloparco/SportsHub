import React from "react";
import Welcome from "./welcome";
import Scores from "./scores";
import { Link } from 'react-router-dom';



function Main() {
    return(
         <div>
        <div className = "row">
            <Welcome />
            <Scores />
        </div>
        </div>
        
    )
};

export default Main