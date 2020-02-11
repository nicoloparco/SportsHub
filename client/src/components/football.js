import React from "react";

function Football() {
    return(
        <div className = "container football border 4px border-success rounded">
            <h5>FOOTBALL</h5>
            <div className = "container">
                <div className = "row">
                    <div className = "container border border-success rounded my-3">
                    <p className = "date">02/02/2020</p>
                        <div className = "container my-3">
                            <p className = "d-inline mx-1">Kansas City Chiefs (KC)</p><span className = "scoreWinner mx-3 font-weight-bold">31</span>
                        </div>
                        <div className = "container my-3">
                            <p className="d-inline mx-1">San Francisco 49'ers (SF)</p><span className = "scoreLoser mx-3">20</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Football;