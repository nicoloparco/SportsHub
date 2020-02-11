import React from "react";
import Score from "../../API"

function Display() {
    return(
        <div className = "container football border 4px border-success rounded">
                                <h5>FOOTBALL</h5>
                                    <div className = "container">
                                        <div className = "row">
                                            <Score />
                                            <div className = "col-md-4">Game 2</div>
                                            <div className = "col-md-4">Game 3</div>
                                        </div>
                                    </div>
                            </div>
    )
}

export default Display;