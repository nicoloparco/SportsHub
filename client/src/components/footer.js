import React from "react"

function Footer() {
    return(
        <footer className = "footer fixed-bottom mt-auto py-2 bg-success">
            <div className = "container">
                <span className = "text-light float-left">
                    All Articles Belong to US Sports News API
                </span>
                <span className = "text-light float-right">
                    Powered by React<i class="fab fa-react fa-lg mx-1"></i>
                </span>
            </div>
        </footer>
    )
}

export default Footer;