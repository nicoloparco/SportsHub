import React from "react";
import Welcome from "./welcome";
import Scores from "./scores";

function Main() {
    return(
        <div className = "row">
            <Welcome />
            <Scores />
        </div>
        
    )
};

export default Main