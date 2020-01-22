import React from "react"

function Article() {
    return(
           <div className = "container border 4px border-success my-3 rounded">
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
            </div>
    )
}

export default Article;