import React from "react";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">MOREAU Jonas</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Experience</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <button className="n-contact">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
