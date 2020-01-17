import React from "react";

function Nav() {
  return (
    <nav className = "navbar navbar-dark bg-success">
        <a className = "navbar-brand" href="#">
            <h3 className = "font-weight-bold">SportsHub</h3>
        </a>
        <div className = "text-right">
            <button className = "btn btn-light mr-1">Football<i class="fa fa-football-ball"></i></button>
            <button className = "btn btn-light mr-1">Basketball</button>
            <button className = "btn btn-light mr-1">Baseball</button>
            <button className = "btn btn-light mr-1">Soccer</button>
        </div>
    </nav>
  );
}

export default Nav;