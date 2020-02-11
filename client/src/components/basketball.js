import React from "react";

function Basketball () {
    return(
        <div className = "container border 4px border-success my-5 rounded">
            <h5>BASKETBALL</h5>
                <div className = "container">
                    <div className = "row">
                        <div className = "container border border-success rounded my-3">
                        <p className = "date">02/11/2020</p>
                            <div className = "container my-3">
                                <p className = "d-inline mx-1">Miami Heat (MIA)</p><span className = "scoreWinner mx-3 font-weight-bold">113</span>
                            </div>
                            <div className = "container my-3">
                                <p className="d-inline mx-1">Golden State Warriors(GS)</p><span className = "scoreLoser mx-3">101</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "row">
                        <div className = "container border border-success rounded my-3">
                        <p className = "date">02/11/2020</p>
                            <div className = "container my-3">
                                <p className = "d-inline mx-1">Los Angeles Lakers(LAL)</p><span className = "scoreWinner mx-3 font-weight-bold">125</span>
                            </div>
                            <div className = "container my-3">
                                <p className="d-inline mx-1">Phoenix Suns(PHO)</p><span className = "scoreLoser mx-3">100</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Basketball;