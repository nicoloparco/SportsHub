import React from "react" ;
import Score from "../Score";

function Scores () {
    return (
        <div className = "col-md-5 my-3">
                <div className = "container my-3">   
                    <div className = "container border 4px border-success my-5 rounded">
                        <h3 className = "text-center">SCORES</h3>
                            <Score />

                            <div className = "container border 4px border-success my-5 rounded">
                                <h5>BASKETBALL</h5>
                                    <div className = "container">
                                        <div className = "row">
                                            <div className = "col-md-4">Game 1</div>
                                            <div className = "col-md-4">Game 2</div>
                                            <div className = "col-md-4">Game 3</div>
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