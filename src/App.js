import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Search from './components/parks/Search';
import Parks from './components/parks/Parks';
import Park from './components/parks/Park';
import ParkState from './context/park/ParkState';

const App = () => {

  return (
    <ParkState>
      <Router>
        <div className="center-container">
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search />
                <Parks />
              </Fragment>
            )}/>
            <Route exact path='/park/:parkcode' component={Park}/>
          </Switch>
        </div>
      </Router>
    </ParkState>
  )
}

export default App;
