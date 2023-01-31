

import React, { useEffect } from 'react';
import DatePicker from "react-datepicker";  
import { useLocation } from "react-router";
import "react-datepicker/dist/react-datepicker.css";  


import Story from './Story';
import {GetFilteredResults} from '../hooks/GetData';


import { useState } from 'react';
import SearchFooter from './SearchFooter';
import Header from './Header';





const Search = () => {


  const searchOptions = [
    'All', 'Story', 'Comment'
  ];
  const byOptions = [
    'Popularity', 'Date'
  ];
  const timeOptions = [
    'All Time', 'Last 24h', 'Past Week','Past Month','Past Year','Custom Range'
  ];

  let queryText = new URLSearchParams(useLocation().search);
  queryText = queryText.get("q")

  const [pageNum, setPageNum] = useState(0);
  const [search, setSearch] = useState(searchOptions[0]);
  const [by,setBy] = useState(byOptions[0]);
  const [input,setInput] = useState(queryText)
  const [query,setQuery] = useState(queryText)
  const [timeRange, setTimeRange] = useState(timeOptions[0])
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  
   const {isLoading,results}  = GetFilteredResults(query,search.toLowerCase(),by,timeRange,pageNum,startDate,endDate);
  
 
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
        <Header/>
          <div className="filter">
              <div className="left">
                Search:&#160;
                <input id="searchBar" type="text" placeholder="Search here" onChange={e => setInput(e.target.value)} value={input} onKeyDown={(e)=>{
                  if (e.key === 'Enter') {
                    setQuery(input)
                  }}}/>             
              </div>
              <div className="right">
              <select value={search} onChange={e => setSearch(e.target.value)}>
                  {searchOptions.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
                <select value={by} onChange={e => setBy(e.target.value)}>
                  {byOptions.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
                <select value={timeRange} onChange={e => setTimeRange(e.target.value)}>
                  {timeOptions.map((value) => (
                    <option value={value} key={value}>
                    {value}
                  </option> 
                  ))}
                </select>  
                <b/>
                {timeRange === 'Custom Range'?(
        
                  <div className="calenderWrapper">
                    <li>
                      From 
                      <DatePicker
                      className="calendar-input"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy "
                    />
                    </li>
                    <li>
                      To 
                    <DatePicker
                    className="calendar-input"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd/MM/yyyy "
                    />
                    </li>
                  </div>): null}    
              </div>  
            </div>
            {isLoading? (<p className="loading">Loading...</p>) : 
              (
                <React.Fragment>
                  {results.map((result)=>{
                    return(
                      <div key = {Math.random()}>
                      {result?(<Story key = {result.objectID} story={result} />):
                        (null)

                      }
                      </div>
                    )})}
                  <div className="buttonBox">
                    <button className="Button" onClick={decrementPageNum}>&#8249; Privious</button>
                    <button className="Button" onClick={increamentPageNum}>Next &#8250;</button>
                  </div>
                </React.Fragment>
        
              )
            }
        <SearchFooter/>
      
      </React.Fragment>
      
    
  );
};

export default Search;


