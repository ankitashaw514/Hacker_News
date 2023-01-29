

import React, { useEffect } from 'react';

import 'react-dropdown/style.css';

import Story from './Story';
import {GetFilteredResults} from '../hooks/GetData';


import { useState } from 'react';
import SearchFooter from './SearchFooter';





const Search = () => {


  const searchOptions = [
    'all', 'story', 'comment'
  ];
  const byOptions = [
    'Popularity', 'Date'
  ];
  const timeOptions = [
    'All Time', 'Last 24h', 'Past Week','Past Month','Past Year','Custom Range'
  ];
  const [pageNum, setPageNum] = useState(0);
  const [search, setSearch] = useState(searchOptions[0]);
  const [by,setBy] = useState(byOptions[0]);
  const [query,setQuery] = useState("")
  const [timeRange, setTimeRange] = useState(timeOptions[0])
  const [startDate, setStartDate] = useState(0)
  const [endDate, setEndDate] = useState(0)
  
   const { isLoading, results } = GetFilteredResults(query,search,by,timeRange,pageNum,startDate,endDate);
  
  

 
 useEffect(() => {
  console.log(search)
  console.log(by)
  console.log(timeRange)
  console.log(query)
  console.log(pageNum)
  console.log(results)
    
 },[pageNum,search,by,timeRange,results]);
  
  const increamentPageNum =()=>{
    setPageNum(pageNum+1);

  };
  const decrementPageNum =()=>{
    if (pageNum>0){
      setPageNum(pageNum-1);
    }
   

  }

  const handleChangeSearch = (event) => {
    
    setSearch(event.target.value.toLowerCase());
    console.log(search)
  };
  const handleChangeBy = (event) => {
   
    setBy(event.target.value);
    console.log(by)
  };
  const handleChangeTimeRange = (event) => {
    
    setTimeRange(event.target.value);
    console.log(timeRange)
  };
  const handleChangeQuery = (event) => {
    
    setQuery(event.target.value);
    console.log(query)
  };

  
 
  return (
    <React.Fragment>
      <header >
            <div >
                <span >
                    <a href="/">
                        <div >Search Hacker News Clone</div>
                    </a>
                </span>
                    <div >
                        
                        
                        <input type="text" placeholder="Search here" onChange={e => setQuery(e.target.value)} value={query} />
                            
                    </div>
                    <div >
                        <a href="https://hn.algolia.com/settings"> 
                        <span>Settings</span>
                        </a>
                        
                    </div>
            </div>
        </header>
        <React.Fragment>
        
        <select
        value={search} 
        onChange={e => setSearch(e.target.value)}
        
        >
        {searchOptions.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      <select
      value={by} 
      onChange={e => setBy(e.target.value)}>
        {byOptions.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      <select
      value={timeRange} 
      onChange={e => {
        if (e.target.value=="Custom Range"){
          setTimeRange(e.target.value)
          return (
            <div><input type="date"  onChange={e => setStartDate(e.target.value)} value={startDate} />
            <input type="date"  onChange={e => setEndDate(e.target.value)} value={endDate} />
            </div>
            
          )
         

        } 
        else{
          setTimeRange(e.target.value)
        }
      }}>
        {timeOptions.map((value) => (
           <option value={value} key={value}>
           {value}
         </option>
          
        ))}
      </select>
        <button onClick={increamentPageNum}>More</button>
        <button onClick={decrementPageNum}>Less</button>
      </React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>) : 
        (
          results.map((result)=>{
            return(
              <Story key = {result.objectID} story={result} />
            )
          })
        )
      }
        
      <SearchFooter/>
    </React.Fragment>
  );
};

export default Search;


