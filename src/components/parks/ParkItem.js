import React, { useState } from 'react';
import npsIcon from './img/nps_icon.png';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
// import PropTypes

const ParkItem = ({ park: { images, name, parkCode }}) => {
  const [loading, setLoading] = useState(true);
  const [style, setStyle] = useState({
    width: '150px',
    height: '150px',
    margin: 'auto',
    display: 'none'
  });

  const onLoadDefaultImg = () => {
    setLoading(false);
  }

  const onLoadParkImg = () => {
    setStyle({
      width: '150px',
      height: '150px',
      margin: 'auto',
      display: 'inline-block'
    });
    setLoading(false);
  }

  return (
    <div className="card">
      {images.length > 0 ? <img src={images[0].url} className="round-img" alt="" style={style} onLoad={onLoadParkImg}/> :
      <img src={npsIcon} className="round-img" alt="" style={{ width: '150px', height: '150px' }} onLoad={onLoadDefaultImg}/>}
      {loading && <Spinner />}
      <p className="text-center">{name}</p>
      <div>
        <Link to={`/park/${parkCode}`}>More</Link>
      </div>
    </div>
  )
}

export default ParkItem;
