import React from "react";

function Baseball () {
    return(
        <div className = "container border 4px border-success my-5 rounded">
        <h5>BASEBALL</h5>
            <div className = "container">
                <div className = "row">
                    <div className = "container border border-success rounded my-3">
                    <p className = "date">02/22/2020</p>
                        <div className = "container my-3">
                            <p className = "d-inline mx-1">Baltimore Orioles (BAL)</p><span className = "scoreWinner mx-3"></span>
                        </div>
                        <div className = "container my-3">
                            <p className="d-inline mx-1">Atlanta Braves (ATL)</p><span className = "scoreLoser mx-3"></span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Baseball;