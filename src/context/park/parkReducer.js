import {
  SET_PARKS,
  SET_PARK,
  SET_STATE,
  SET_ALERTS,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case SET_PARKS:
      return {
        ...state,
        parks: action.payload,
        loading: false
      };
    case SET_PARK:
      return {
        ...state,
        park: action.payload,
        parkImgUrl: action.payload.images[0].url,
        parkCost: action.payload.entranceFees[0].cost,
        loading: false
      }
    case SET_STATE:
      return {
        ...state,
        stateName: action.payload
      }
    case SET_ALERTS:
      return {
        ...state,
        parkAlerts: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
