import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <Link  className="navbar-brand" to="/">Project One</Link >
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link  className="nav-link" to="/">Home</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/weatherForcast">Weather Forcast</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/user">User</Link >
      </li>
    </ul>
    <span className="navbar-text">
        <Link  className="nav-link" to="#">Log in</Link >
    </span>
    <span className="navbar-text">
        <Link  className="nav-link" to="#">Sign Up</Link >
    </span>
  </div>
</nav>
  );
};

export default Navbar;