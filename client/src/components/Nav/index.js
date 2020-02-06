import React from "react";

function Nav() {
  return (
    <nav className = "navbar navbar-dark bg-success py-0">
        <a className = "navbar-brand" href="/">
            <h3 className = "font-weight-bold">SportsHub</h3>
        </a>
        <div className = "text-right">
          <p className="text-light">Sort Articles and Posts by Sport</p>
          <a href="/football"><i class="fas fa-football-ball mx-3 fa-2x pb-1" style={{color: "white"}}></i></a>
          <a href="/basketball"><i class="fas fa-basketball-ball mx-3 fa-2x pb-1" style={{color: "white"}}></i></a>
          <a href="/baseball"><i class="fas fa-baseball-ball mx-3 fa-2x pb-1" style={{color: "white"}}></i></a>
          <a href="/soccer"><i class="fas fa-futbol mx-3 fa-2x pb-1" style={{color: "white"}}></i></a>
        </div>
    </nav>
  );
}

export default Nav;