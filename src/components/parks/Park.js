import React, { Fragment, useEffect, useState, useContext } from 'react';
import Spinner from '../layout/Spinner';
import npsIcon from './img/nps_icon.png'
import { Link } from 'react-router-dom';
import ParkContext from '../../context/park/parkContext';
// import PropTypes from 'prop-types';

const Park = ({ match }) => {
  const parkContext = useContext(ParkContext);
  const { getPark, getParkAlerts, park, loading, parkCost, parkImgUrl } = parkContext;

  const [imgLoading, setImgLoading] = useState(true);
  const [style, setStyle] = useState({
    width: '150px',
    height: '150px',
    margin: 'auto',
    display: 'none'
  });

  useEffect(() => {
    getPark(match.params.parkcode);
    getParkAlerts(match.params.parkcode);
    // eslint-disable-next-line
  }, []); // The empty brackets are used to mimic "componentDidMount()"


  const onLoadParkImg = () => {
    setImgLoading(false);
    setStyle({
      width: '150px',
      height: '150px',
      margin: 'auto',
      display: 'inline-block'
    });
  }

  const onLoadDefaultImg = () => {
    setImgLoading(false);
  }

  const {
    description,
    directionsInfo,
    fullName,
    url,
    weatherInfo
  } = park;


  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/">Back to search</Link>
      <div>
        <h2>{fullName}</h2>
        <a href={url} target="_blank">Visit park website</a>
        {parkCost && <p>Entrance fee: {parkCost}</p>}
        <p>Directions: {directionsInfo}</p>
        <p>Weather: {weatherInfo}</p>

        <p>{description}</p>
        {parkImgUrl ? <img src={parkImgUrl} className="round-img" alt="" style={style} onLoad={onLoadParkImg}/> :
        <img src={npsIcon} className="round-img" alt="" style={{ width: '150px', height: '150px' }} onLoad={onLoadDefaultImg}/>}
        {imgLoading && <Spinner />}
      </div>
    </Fragment>
  )
}

export default Park;
