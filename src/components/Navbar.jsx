import React from 'react';
function Navbar () {
  return (
    <nav className="navbar">
      <div className="logo">NoteX</div>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#card-container">Notes</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
