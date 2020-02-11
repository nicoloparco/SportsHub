import React from "react";

function Soccer () {
    return(
        <div className = "container border 4px border-success my-5 rounded">
        <h5>SOCCER</h5>
            <div className = "container">
                <div className = "row">
                    <div className = "container border border-success rounded my-3">
                    <p className = "date">02/18/2020</p>
                        <div className = "container my-3">
                            <p className = "d-inline mx-1">Atlanta United (ATL)</p><span className = "scoreWinner mx-3"></span>
                        </div>
                        <div className = "container my-3">
                            <p className="d-inline mx-1">CD Motagua</p><span className = "scoreLoser mx-3"></span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Soccer;