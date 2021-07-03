import React, { useEffect, useState } from "react";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-contents">
        <img
          className="nav-logo"
          src={require("../assets/netflix-logo.png").default}
          alt=""
        />
        <img
          className="nav-avatar"
          src={require("../assets/netflix-avatar.png").default}
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
