import React, { useReducer } from 'react';
import axios from 'axios';
import ParkContext from './parkContext';
import ParkReducer from './parkReducer';
import {
  SET_PARKS,
  SET_PARK,
  SET_STATE,
  SET_ALERTS,
  SET_LOADING
} from '../types';

let npsApiKey;

if (process.env.NODE_ENV !== 'production') {
  npsApiKey = process.env.REACT_APP_NPS_API_KEY;
} else {
  npsApiKey = process.env.NPS_API_KEY;
}

const ParkState = (props) => {
  const initialState = {
    loading: false,
    park: {},
    parkAlerts: [],
    parkCost: '',
    parkImgUrl: '',
    parks: [],
    stateName: 'al'
  }

  const [state, dispatch] = useReducer(ParkReducer, initialState);

  // Fetch the parks for a given state
  const fetchState = async stateName => {
    setLoading();
    const res = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateName}&api_key=${npsApiKey}`);
    setState(stateName);
    dispatch({
      type: SET_PARKS,
      payload: res.data.data
    });
  }

  // Get park
  const getPark = async parkCode => {
    setLoading();
    const res = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${npsApiKey}`);
    dispatch({
      type: SET_PARK,
      payload: res.data.data[0]
    });
    // console.log(state.park);
  }

  // Get park alerts
  const getParkAlerts = async parkCode => {
    setLoading();
    const res = await axios.get(`https://developer.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key=${npsApiKey}`);
    dispatch({
      type: SET_ALERTS,
      payload: res.data.data
    });
    // console.log(state.parkAlerts);
  }

  // Set state
  const setState = (stateName) => dispatch({
    type: SET_STATE,
    payload: stateName
  });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });


  return <ParkContext.Provider
    value={{
      loading: state.loading,
      park: state.park,
      parkAlerts: state.parkAlerts,
      parkCost: state.parkCost,
      parkImgUrl: state.parkImgUrl,
      parks: state.parks,
      stateName: state.stateName,
      fetchState,
      getPark,
      getParkAlerts,
      setState
    }}
    >
    {props.children}
  </ParkContext.Provider>
}

export default ParkState;
