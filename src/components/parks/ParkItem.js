import React, { Component } from 'react';
import npsIcon from './img/nps_icon.png';
import Spinner from '../layout/Spinner';
// import PropTypes
import { Link } from 'react-router-dom';

class ParkItem extends Component {
  state = {
    loading: true,
    style: {
       width: '150px',
       height: '150px',
       margin: 'auto',
       display: 'none'
    }
  }

  onLoadDefaultImg = () => {
    this.setState({ loading: false });
  }

  onLoadParkImg = () => {
    this.setState({
      loading: false,
      style: {
         width: '150px',
         height: '150px',
         margin: 'auto',
         display: 'inline-block'
      }
    });
  }

  render() {
    const { images, name, parkCode } = this.props.park;

    return (
      <div className="card">
        {images.length > 0 ? <img src={images[0].url} className="round-img" alt="" style={this.state.style} onLoad={this.onLoadParkImg}/> :
        <img src={npsIcon} className="round-img" alt="" style={{ width: '150px', height: '150px' }} onLoad={this.onLoadDefaultImg}/>}
        {this.state.loading && <Spinner />}
        <p className="text-center">{name}</p>
        <div>
          <Link to={`/park/${parkCode}`}>More</Link>
        </div>
      </div>
    )
  }

}

export default ParkItem;
