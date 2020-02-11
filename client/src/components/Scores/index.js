import React from "react" ;
import Score from "../score";

function Scores () {
    return (
        <div className = "col-md-5 my-3">
                <div className = "container my-3">   
                    <div className = "container border  my-5 rounded">
                        <h3 className = "text-center">SCORES</h3>
                            <Score />

                            <div className = "container border 4px border-success my-5 rounded">
                                <h5>BASKETBALL</h5>
                                    <div className = "container">
                                        <div className = "row">
                                            <div className = "container border border-success rounded my-3">
                                            <p className = "date">02/03/2020</p>
                                                <div className = "container my-3">
                                                    <img src="https://ssl.gstatic.com/onebox/media/sports/logos/0nQXN6OF7wnLY3hJz8lZJQ_48x48.png"></img>
                                                    <p className = "d-inline mx-1">Miami Heat (MIA)</p><span className = "scoreWinner mx-3">137</span>
                                                </div>
                                                <div className = "container my-3">
                                                    <img src="https://ssl.gstatic.com/onebox/media/sports/logos/US6KILZue2D5766trEf0Mg_48x48.png"></img>
                                                    <p className="d-inline mx-1">Philadelphia 76ers (PHI)</p><span className = "scoreLoser mx-3">106</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <div className = "container border 4px border-success my-5 rounded">
                                <h5>BASEBALL</h5>
                                    <div className = "container">
                                        <div className = "row">
                                            <div className = "col-md-4">Game 1</div>
                                            <div className = "col-md-4">Game 2</div>
                                            <div className = "col-md-4">Game 3</div>
                                        </div>
                                    </div>
                            </div>

                            <div className = "container border 4px border-success my-5 rounded">
                                <h5>SOCCER</h5>
                                    <div className = "container">
                                        <div className = "row">
                                            <div className = "col-md-4">Game 1</div>
                                            <div className = "col-md-4">Game 2</div>
                                            <div className = "col-md-4">Game 3</div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default Scores;