import React from "react";

function Navbar({setCategory}) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div onClick={()=>setCategory("technology")} className="nav-link">
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div onClick={()=>setCategory("business")}  className="nav-link">
                Buisness
              </div>
            </li>
            <li className="nav-item">
              <div onClick={()=>setCategory("health")}  className="nav-link">
                Health
              </div>
            </li>
            <li className="nav-item">
              <div onClick={()=>setCategory("sports")}  className="nav-link">
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div onClick={()=>setCategory("entertainment")}  className="nav-link">
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
