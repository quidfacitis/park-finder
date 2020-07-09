import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Search from './components/parks/Search';
import Parks from './components/parks/Parks';
import Park from './components/parks/Park';


class App extends Component {
  state = {
    loading: false,
    park: {},
    parkAlerts: [],
    parkCost: '',
    parkImgUrl: '',
    parks: [],
    stateName: 'al'
  }

  fetchState = async stateName => {
    this.setState({ loading: true, parks: [] });
    const res = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateName}&api_key=${process.env.REACT_APP_NPS_API_KEY}`);
    this.setState({ parks: res.data.data, loading: false, stateName });
  }

  getPark = async parkCode => {
    this.setState({ loading: true });
    const res = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${process.env.REACT_APP_NPS_API_KEY}`);
    this.setState({
      park: res.data.data[0],
      parkImgUrl: res.data.data[0].images[0].url,
      parkCost: res.data.data[0].entranceFees[0].cost,
      loading: false
    });
    console.log(this.state.park);
  }

  getParkAlerts = async parkCode => {
    this.setState({ loading: true });
    const res = await axios.get(`https://developer.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key=${process.env.REACT_APP_NPS_API_KEY}`);
    this.setState({
      parkAlerts: res.data.data,
      loading: false
    });
    console.log(this.state.parkAlerts);
  }

  render() {
    const { loading, park, parkAlerts, parkCost, parkImgUrl, parks, stateName } = this.state;
    return (
      <Router>
        <div className="center-container">
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search fetchState={this.fetchState} stateName={stateName}/>
                <Parks parks={parks} loading={loading}/>
              </Fragment>
            )}/>
            <Route exact path='/park/:parkcode' render={props => (
              <Park
                { ...props }
                getPark={this.getPark}
                getParkAlerts={this.getParkAlerts}
                park={park}
                parkAlerts={parkAlerts}
                parkImgUrl={parkImgUrl}
                parkCost={parkCost}
                loading={loading}/>
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
