import React from "react" ;
import Football from "./football"
import Basketball from "./basketball";
import Baseball from "./baseball";
import Soccer from "./soccer";

function Scores () {
    return (
        <div className = "col-md-5 my-3" style={{overflow:"scroll", height:"750px"}}>
                <div className = "container my-3">   
                    <div className = "container border  my-5 rounded">
                        <h3 className = "text-center">SCORES</h3>
                            <Football />
                            <Basketball />
                            <Baseball />
                            <Soccer />
                    </div>
                </div>
            </div>
    )
}

export default Scores;