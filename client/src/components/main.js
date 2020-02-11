import React from "react";
import Welcome from "./welcome";
import Scores from "./Scores"




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