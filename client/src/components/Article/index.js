import React from "react"

function Article() {
    return(
        <div className = "container border 4px border-success my-3 rounded">
                    <h3>Titans to win Superbowl</h3>
                        <img className = "image-thumbnail float-left mx-3" src="https://img.bleacherreport.net/img/images/photos/003/773/333/hi-res-4889005dc0494cbcc4a697f7de2e0aee_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top" alt="football" height="100px" width="100px"></img>
                        <p className = "text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium, magna eget consequat aliquam, quam ligula feugiat libero, eget efficitur libero nibh ac dui. 
                        Proin a turpis at leo luctus venenatis et a mi. Vivamus rutrum nisl enim, sed feugiat quam feugiat in. Aenean non pulvinar metus, ut interdum nisl. 
                        Vivamus ultricies tincidunt orci in efficitur. Vestibulum aliquam facilisis libero id elementum. Integer a metus eget odio vulputate accumsan. 
                        Mauris lobortis a neque eu eleifend.</p>
                    </div>
    )
}

export default Article;