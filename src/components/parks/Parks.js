import React, { useContext } from 'react';
import ParkItem from './ParkItem';
import Spinner from '../layout/Spinner';
import ParkContext from '../../context/park/parkContext';
//import PropTypes

const Parks = () => {
  const parkContext = useContext(ParkContext);
  const { parks, loading } = parkContext;

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={parkStyle}>
        {parks.map(park => (
          <ParkItem key={park.id} park={park}/>
        ))}
      </div>
    )
  }
}

const parkStyle = {
  display:'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '1rem'
}

export default Parks;
