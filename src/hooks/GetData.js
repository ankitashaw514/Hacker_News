import { useState, useEffect } from 'react';
import { getStories } from '../utils/Api';

// custom hook for storing the data 

const GetData = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories()
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, stories };
};

export default GetData;