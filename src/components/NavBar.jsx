import React, { useEffect, useState } from "react";
import "./styles/NavBar.css";

function NavBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className={`navbar ${show && "navbar--black"}`}>
      <img
        className="navbar-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix logo"
      />
      <img
        className="navbar-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </div>
  );
}

export default NavBar;
