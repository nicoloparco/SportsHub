import React from "react";
import Articles from "../Articles";
import Scores from "../Scores";

function Main() {
    return(
        <div>
        <button className = "btn btn-outline-success mt-3 mx-5"><i class="fas fa-plus mr-1"></i>Create New Post</button>
        <div className = "row">
            <Articles />
            <Scores />
        </div>
        </div>
        
    )
};

export default Main