import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import npsIcon from './img/nps_icon.png'
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Park extends Component {

  state = {
    imgLoading: true,
    style: {
       width: '150px',
       height: '150px',
       margin: 'auto',
       display: 'none'
    }
  }

  componentDidMount() {
    this.props.getPark(this.props.match.params.parkcode);
    this.props.getParkAlerts(this.props.match.params.parkcode);
  }

  onLoadParkImg = () => {
    this.setState({
      imgLoading: false,
      style: {
         width: '150px',
         height: '150px',
         margin: 'auto',
         display: 'inline-block'
      }
    });
  }

  onLoadDefaultImg = () => {
    this.setState({ loading: false });
  }

  render() {

      const {
        description,
        directionsInfo,
        fullName,
        url,
        weatherInfo
      } = this.props.park;

      const { loading, parkCost, parkImgUrl } = this.props;

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
            {parkImgUrl ? <img src={parkImgUrl} className="round-img" alt="" style={this.state.style} onLoad={this.onLoadParkImg}/> :
            <img src={npsIcon} className="round-img" alt="" style={{ width: '150px', height: '150px' }} onLoad={this.onLoadDefaultImg}/>}
            {this.state.imgLoading && <Spinner />}
          </div>
        </Fragment>
      )
    }
}

export default Park;
