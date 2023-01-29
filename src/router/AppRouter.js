import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import { Redirect } from 'react-router';
import ShowStories from '../components/ShowLatestStories';
import Search from '../components/Search';


const AppRouter = () => {
  
  

 
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
        <Route path="/" render={() => <Redirect to="/newStories" />} exact={true}/>
        <Route path="/newStories" component={ShowStories} />
        <Route path="/search" component={Search} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;