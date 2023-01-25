import React from 'react';
import Story from './Story';
import GetData from '../hooks/GetData';

const Link = ({ url, title }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
     {title}
    </a>
  );
}


const ShowStories = () => {
  
  const { isLoading, stories } = GetData();
  
  
  
  
  
  return (
    <React.Fragment>
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
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ShowStories;