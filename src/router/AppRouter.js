import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home'

import ShowStories from '../components/ShowNewStories';
import { useEffect } from 'react';

const AppRouter = () => {
  
  

 
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/newStories" component={ShowStories} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;