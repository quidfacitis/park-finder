import React from 'react';
import ParkItem from './ParkItem';
import Spinner from '../layout/Spinner';
//import PropTypes

const Parks = ({ parks, loading }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {parks.map(park => (
          <ParkItem key={park.id} park={park}/>
        ))}
      </div>
    )
  }

}

const userStyle = {
  display:'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '1rem'
}

export default Parks;
