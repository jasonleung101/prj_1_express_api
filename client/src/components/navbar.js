import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <Link  class="navbar-brand" to="/">Project One</Link >
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link  class="nav-link" to="/">Home</Link >
      </li>
      <li class="nav-item">
        <Link  class="nav-link" to="/weatherForcast">Weather Forcast</Link >
      </li>
    </ul>
    <span class="navbar-text">
        <Link  class="nav-link" to="#">Log in</Link >
    </span>
    <span class="navbar-text">
        <Link  class="nav-link" to="#">Sign Up</Link >
    </span>
  </div>
</nav>
  );
};

export default Navbar;