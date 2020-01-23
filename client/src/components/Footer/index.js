import React from "react"

function Footer() {
    return(
        <footer className = "footer mt-auto py-3 bg-success">
            <div className = "container">
                <span className = "text-light float-left">
                    All Articles and Scores Belong to ESPN
                </span>
                <span className = "text-light float-right">
                    Powered by React<i class="fab fa-react fa-lg mx-1"></i>
                </span>
            </div>
        </footer>
    )
}

export default Footer;