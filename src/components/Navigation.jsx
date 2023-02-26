import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active " : "")}
        >
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/classrooms"
          className={(nav) => (nav.isActive ? "nav-active " : "")}
        >
          <li>Liste des classes</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
