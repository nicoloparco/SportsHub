import React from "react";

function Nav() {
  return (
    <nav className = "navbar navbar-dark bg-success">
        <a className = "navbar-brand" href="/">
            <h5 className = "font-weight-bold">SportsHub</h5>
        </a>
        <div className = "text-right">
          <i class="fas fa-football-ball mx-3 fa-lg pb-1" style={{color: "white"}}></i>
          <i class="fas fa-basketball-ball mx-3 fa-lg pb-1" style={{color: "white"}}></i>
          <i class="fas fa-baseball-ball mx-3 fa-lg pb-1" style={{color: "white"}}></i>
          <i class="fas fa-futbol mx-3 fa-lg pb-1" style={{color: "white"}}></i>
        </div>
    </nav>
  );
}

export default Nav;