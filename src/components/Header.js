import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  

  
  
  return (
    <React.Fragment>
      <h1>Hacker News Clone</h1>
      <div>
        <NavLink to="/newStories" activeClassName="active">
          New Stories
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Past
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Comments
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Ask
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Show
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Jobs
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Submit
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Login
        </NavLink>
        <NavLink to="/search" activeClassName="active">
          Search
        </NavLink>
        
        
        
      </div>
    </React.Fragment>
  );
};

export default Header;

