import React from "react";

function Post () {
    return (
        <div className = "container border border-success my-3" id = "articles" >
                  <section id ="scrollArticle"></section>
                <a href = "/postExample" style={{textDecoration: "none"}}> <h3 className="mt-3" style = {{color:"black"}}>Post Title</h3></a>
                    <div className = "row mx-1">
                        <p className = "mr-3" >Author</p>
                        <p className = "postDate">Date</p>
                    </div>   
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <div className = "articleButtons my-1 text-right">
                    <div className = "articleComments d-inline">
                        <button className = "btn btn d-inline commentButton" style = {{backgroundColor: "#f0f1f5"}}>
                            <span className = "d-inlne mx-1">
                                <i class="fas fa-comments"></i>
                            </span>
                            Comment
                        </button>
                    </div>
                    <div className = "articleSave d-inline">
                        <button className = "btn btn d-inline saveButton" style = {{backgroundColor: "#f0f1f5"}}>
                            <span className = "d-inlne mx-1">
                                <i class="fas fa-bookmark"></i>
                            </span>
                            Save
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Post;