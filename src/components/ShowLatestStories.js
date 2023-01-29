import React, { useEffect } from 'react';
import Story from './Story';
import {GetLatestStories} from '../hooks/GetData';
import Header from './Header';

import { useState } from 'react';
import Footer from './Footer';






const ShowStories = () => {

  const [pageNum, setPageNum] = useState(0);
  const { isLoading, stories } = GetLatestStories(pageNum);
  console.log(stories)
  
  
  const increamentPageNum =()=>{
    setPageNum(pageNum+1);

  };
  const decrementPageNum =()=>{
    if (pageNum>0){
      setPageNum(pageNum-1);
    }
   
  }
  
  
  
  
  return (
    <React.Fragment>
      <Header />
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          
          {stories.map((story)=>{
            return(
              <Story key={story.objectID} story={story}/>
            )
          })  
        }
        <button onClick={increamentPageNum}>More</button>
        <button onClick={decrementPageNum}>Less</button>
        </React.Fragment>  
      )}
      <Footer/>
    </React.Fragment>
  );
};

export default ShowStories;