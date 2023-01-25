import axios from 'axios';
import { BASE_API_URL } from './Constants';


// fetching the all stories from the api page wise and storing it in an array

export const getStories = async () => {
  let stories = new Array()
  try {
    for(let pageNum=0;pageNum<1;pageNum++){
      const response = await axios.get(
        `${BASE_API_URL}&page=${pageNum}`
      );
      
      for(let ind =0;ind<20;ind++){
        
         stories.push(response.data.hits[ind])
        
      }
      
      
      
    }
    
    
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};