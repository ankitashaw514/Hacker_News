import { useState, useEffect } from 'react';
import { getLatestStories,getFilteredResults } from '../utils/Api';

// custom hook for storing the latest stories 

const GetLatestStories = (pageNum) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getLatestStories(pageNum)
      .then((storie) => {
        setStories(storie);
         
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  },[pageNum]);
  
  return { isLoading, stories };
};




// custom hook for storing the filtered results got based on filters chosen by the user

const GetFilteredResults = (query,search,by,timeRange,pageNum,startDate,endDate) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  
    useEffect(() => {
      setIsLoading(true);
      getFilteredResults(query,search,by,timeRange,pageNum,startDate,endDate)
        .then((result) => {
          
          setResults(result)
          setIsLoading(false);
          
        })
        .catch(() => {
          setIsLoading(false);
        });
        
    },[query,search,by,timeRange,pageNum,startDate,endDate]);
  
    
    
    return { isLoading, results };
  };
  
  

export  {GetLatestStories,GetFilteredResults};

