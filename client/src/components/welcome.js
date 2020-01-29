import React from 'react';
import { Link } from 'react-router-dom';

export default () => (

  <div class = "container border 4px border-success my-3 rounded">
                <div className = "articleContent">
                    <h3>Titans to win Superbowl</h3>
                        <img className = "image-thumbnail float-left mx-3" src="https://img.bleacherreport.net/img/images/photos/003/773/333/hi-res-4889005dc0494cbcc4a697f7de2e0aee_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top" alt="football" height="100px" width="100px"></img>
                        <p className = "text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium, magna eget consequat aliquam, quam ligula feugiat libero, eget efficitur libero nibh ac dui. 
                        Proin a turpis at leo luctus venenatis et a mi. Vivamus rutrum nisl enim, sed feugiat quam feugiat in. Aenean non pulvinar metus, ut interdum nisl. 
                        Vivamus ultricies tincidunt orci in efficitur. Vestibulum aliquam facilisis libero id elementum. Integer a metus eget odio vulputate accumsan. 
                        Mauris lobortis a neque eu eleifend.</p>
                </div>
                    
                <div className = "articleButtons my-1">
                    <div className = "articleComments d-inline">
                        <button className = "btn btn outline-success d-inline commentButton">
                            <span className = "d-inlne mx-1">
                                <i class="fas fa-comments"></i>
                            </span>
                            Comment
                        </button>
                    </div>
                    <div className = "articleSave d-inline">
                        <button className = "btn btn outline-success d-inline saveButton">
                            <span className = "d-inlne mx-1">
                                <i class="fas fa-bookmark"></i>
                            </span>
                            Save
                        </button>
                    </div>
                    <div className = "articleShare d-inline">
                        <button className = "btn btn outline-success d-inline shareButton">
                            <span className = "d-inlne mx-1">
                                <i class="fas fa-retweet"></i>
                            </span>
                            Share
                        </button>
                    </div>
                </div>
               

                <div class = "row">
                <div className = "col-md-7 my-3">
                <div className = "container my-3 mx-1">
                    {/* <Article /> */}
                    <div className = "container border 4px border-success my-3 rounded">
                        <h3>Dwyane Wade jersey retirement ceremony set for Februrary</h3>
                        <img className = "image-thumbnail float-left mx-3" src="https://cdn.vox-cdn.com/thumbor/DWc2iBrZaE-TZWAYGHe6vHjChxc=/0x0:1924x2717/1200x800/filters:focal(757x602:1063x908)/cdn.vox-cdn.com/uploads/chorus_image/image/62833079/usa_today_11974165.0.jpg" alt="football" height="100px" width="100px"></img>
                        <p className = "text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium, magna eget consequat aliquam, quam ligula feugiat libero, eget efficitur libero nibh ac dui. 
                        Proin a turpis at leo luctus venenatis et a mi. Vivamus rutrum nisl enim, sed feugiat quam feugiat in. Aenean non pulvinar metus, ut interdum nisl. 
                        Vivamus ultricies tincidunt orci in efficitur. Vestibulum aliquam facilisis libero id elementum. Integer a metus eget odio vulputate accumsan. 
                        Mauris lobortis a neque eu eleifend.</p>
                    </div>
                    <div className = "container border 4px border-success my-3 rounded">
                        <h3>Astros found guilty of cheating</h3>
                        <img className = "image-thumbnail float-left mx-3" src="https://static01.nyt.com/images/2020/01/13/sports/13xp-astros-explainer/13xp-astros-explainer-superJumbo.jpg" alt="football" height="100px" width="100px"></img>
                        <p className = "text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium, magna eget consequat aliquam, quam ligula feugiat libero, eget efficitur libero nibh ac dui. 
                        Proin a turpis at leo luctus venenatis et a mi. Vivamus rutrum nisl enim, sed feugiat quam feugiat in. Aenean non pulvinar metus, ut interdum nisl. 
                        Vivamus ultricies tincidunt orci in efficitur. Vestibulum aliquam facilisis libero id elementum. Integer a metus eget odio vulputate accumsan. 
                        Mauris lobortis a neque eu eleifend.</p>
                    </div>
                </div>
            </div>
            </div>
            

        <div className = "col-md-5 my-3">
                <div className = "container my-3">   
                    <div className = "container border 4px border-success my-5 rounded">
                        <h3 className = "text-center">SCORES</h3>
                            <div className = "container football border 4px border-success rounded">
                                <h5>FOOTBALL</h5>
                                    <div className = "container">
                                        <div className = "row">
                                            <div className = "col-md-4">Game 1</div>
                                            <div className = "col-md-4">Game 2</div>
                                            <div className = "col-md-4">Game 3</div>
                                        </div>
                                    </div>
                            </div>

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
  </div>

);