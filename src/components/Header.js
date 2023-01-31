import React from 'react';



const Header = () => {
  

  
  return (
    
    <div className="navbar">
      <ul className="navbar-links">
        <div className="left">
          <li><a href="/"><h3>Hacker News</h3></a></li>
        </div>
        <div className="right">
          <li><a href="/newStories">New Stories</a></li>  
          <li><a href="https://news.ycombinator.com/front">Past</a></li> 
          <li><a href="https://news.ycombinator.com/newcomments">Comments</a></li> 
          <li><a href="https://news.ycombinator.com/ask">Ask</a></li> 
          <li><a href="https://news.ycombinator.com/show">Show</a></li> 
          <li><a href="https://news.ycombinator.com/jobs">Jobs</a></li> 
        </div>  
      </ul>
    </div>
    
  );
};

export default Header;

