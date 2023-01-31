
import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router';


const Footer = () => {
  const [queryText,setQueryText] = useState("");
  const [inputText,setInputText] = useState("");

  const history = useHistory()

useEffect(()=>{
  if(queryText!== ""){
    history.push(`/search?q=${queryText}`)
  }
 
},[queryText])
  
  return (
      <div className="footer">
    
        <ul className="footer-links">
          
            <li><a href="https://news.ycombinator.com/newsguidelines.html">Guidelines</a></li>
            <li><a href="/https://news.ycombinator.com/newsfaq.html">FAQ</a></li>
            <li><a href="https://github.com/HackerNews/API">API</a></li>
            <li><a href="/https://news.ycombinator.com/security.html">Security</a></li>
            <li><a href="/https://news.ycombinator.com/lists">Lists</a></li>
           
            <li><a href="http://www.ycombinator.com/apply/">Apply to YC</a></li>
            <li><a href="/">Contact</a></li>
          
        </ul>
        <div className="search">
          Search:&#160;
          <input id="searchBar" name="search" type="text" placeholder="Search Here" 
          onKeyDown={(e)=>{
            if (e.key === 'Enter') {
              setQueryText(inputText)}  
              }} onChange={(e) =>(setInputText(e.target.value))} />
        </div>   
      </div>
  );
}


export default Footer;