import axios from 'axios';
import { TIME_BASED_STORY_SEARCH_URL,QUERY_BASED_SEARCH_URL_BY_POPULARITY,QUERY_BASED_SEARCH_URL_BY_DATE} from './Constants';




// fetching the all stories from the api page wise and storing it in an array

const getLatestStories = async (pageNum) => {
  let stories = []
  try {
      const response = await axios.get(`${TIME_BASED_STORY_SEARCH_URL}&page=${pageNum}`,{mode: "cors"});
      //Extracting the number of stories per page
      
      let len = response.data.hitsPerPage;
      for(let ind =0;ind<len;ind++){
         stories.push(response.data.hits[ind]) 
         
      } 
      
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};

const getResultForSpecificTagForTimeRange = async (query,search,timeRange,pageNum,startDate,endDate,url)=>{
  const timestampToday = Math.round(new Date().getTime() / 1000)
  const timestampYesterday = timestampToday - 24 * 3600
  const timestampAWeekAgo = timestampToday - 7 * 24 * 3600
  const timestampAMonthAgo = timestampToday - 30 * 24 * 3600
  const timestampAYearAgo = timestampToday - 365 * 24 * 3600
  const timestampStartDate = Math.round(startDate.getTime()/1000)
  const timestampEndtDate = Math.round(endDate.getTime()/1000)
  let response;
   
  switch (timeRange) {
    case "All Time":
      response = await axios.get(`${url}${query}&tags=${search}&page=${pageNum}`,{mode: "cors"});
      break;
    case "Last 24h":
      response = await axios.get(`${url}${query}&tags=${search}&page=${pageNum}&numericFilters=created_at_i>${timestampYesterday}`,{mode: "cors"});
      break;
    case "Past Week":
      response = await axios.get(`${url}${query}&tags=${search}&page=${pageNum}&numericFilters=created_at_i>${timestampAWeekAgo}`,{mode: "cors"});
      break;
    case "Past Month":
      response = await axios.get(`${url}${query}&tags=${search}&page=${pageNum}&numericFilters=created_at_i>${timestampAMonthAgo}`,{mode: "cors"});
      break;
    case "Past Year":
      response = await axios.get(`${url}${query}&tags=${search}&page=${pageNum}&numericFilters=created_at_i>${timestampAYearAgo}`,{mode: "cors"});
      break;
    case "Custom_Range":
      response = await axios.get(`${url}${query}&tags=${search}&page=${pageNum}&numericFilters=created_at_i>${timestampStartDate},created_at_i<${timestampEndtDate}`,{mode: "cors"});
      break;
    default:
      response = response = await axios.get(`${url}${query}&tags=${search}&page=${pageNum}`,{mode: "cors"});

  
}
return response;

}

const getResultOfAllTagsForTimeRange = async (query,timeRange,pageNum,startDate,endDate,url)=>{

  const timestampToday = Math.round(new Date().getTime() / 1000)
  const timestampYesterday = timestampToday - 24 * 3600
  const timestampAWeekAgo = timestampToday - 7 * 24 * 3600
  const timestampAMonthAgo = timestampToday - 30 * 24 * 3600
  const timestampAYearAgo = timestampToday - 365 * 24 * 3600
  const timestampStartDate = Math.round(startDate.getTime()/1000)
  const timestampEndtDate = Math.round(endDate.getTime()/1000)
  let response;
     
  switch (timeRange) {
    case "All Time":
      
      response = await axios.get(`${url}${query}&page=${pageNum}`,{mode: "cors"}

      );
      
      break;
    case "Last 24h":
      response = await axios.get(`${url}${query}&page=${pageNum}&numericFilters=created_at_i>${timestampYesterday}`,{mode: "cors"});
      break;
    case "Past Week":
      response = await axios.get(`${url}${query}&page=${pageNum}&numericFilters=created_at_i>${timestampAWeekAgo}`,{mode: "cors"});
      break;
    case "Past Month":
      response = await axios.get(`${url}${query}&page=${pageNum}&numericFilters=created_at_i>${timestampAMonthAgo}`,{mode: "cors"});
      break;
    case "Past Year":
      response = await axios.get(`${url}${query}&page=${pageNum}&numericFilters=created_at_i>${timestampAYearAgo}`,{mode: "cors"});
      break;
    case "Custom Range":
      response = await axios.get(`${url}${query}&page=${pageNum}&numericFilters=created_at_i>${timestampStartDate},created_at_i<${timestampEndtDate}`,{mode: "cors"});
      break;
    default:
      response = response = await axios.get(`${url}${query}&page=${pageNum}`,{mode: "cors"});
  }
  
  return response;


}


const insertResult = (result,results)=>{
  
   //Extracting the number of stories per page
  let len = result.data.hitsPerPage;
  for(let ind =0;ind<len;ind++){
    results.push(result.data.hits[ind]) 
    
  } 

}



const getFilteredResults = async (query,search,by,timeRange,pageNum,startDate,endDate) => {
  let results = [];
  try {
    if(search == "all"){
      if(by == "Popularity"){
          const result = await getResultOfAllTagsForTimeRange(query,timeRange,pageNum,startDate,endDate,QUERY_BASED_SEARCH_URL_BY_POPULARITY)
          console.log(result)
            insertResult(result,results); 
            
            //  console.log(results);
            
         
      }
      else{
        
        const result = await getResultOfAllTagsForTimeRange(query,timeRange,pageNum,startDate,endDate,QUERY_BASED_SEARCH_URL_BY_DATE)
       
          insertResult(result,results); 
            
          
          
        
      }
    }
    else{
      if(by == "Popularity"){
        const result = await getResultForSpecificTagForTimeRange(query,search,timeRange,pageNum,startDate,endDate,QUERY_BASED_SEARCH_URL_BY_POPULARITY)
        insertResult(result,results); 
      }
      else{
        const result = await getResultForSpecificTagForTimeRange(query,search,timeRange,pageNum,startDate,endDate,QUERY_BASED_SEARCH_URL_BY_DATE)
        
          insertResult(result,results); 
            
        
      }

    }
    console.log(results)
   return results;
  
} catch (error) {
  console.log('Error while getting list of Filtered Results.');
}
};

export  {getLatestStories, getFilteredResults};


















    