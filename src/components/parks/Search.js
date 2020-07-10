import React, { useContext } from 'react';
import ParkContext from '../../context/park/parkContext';
// import PropTypes from 'prop-types';

const Search = () => {
  const parkContext = useContext(ParkContext);

  const onSubmit = (e) => {
    e.preventDefault();
    parkContext.fetchState(parkContext.stateName);
  }

  const onChange = (e) => {
    parkContext.setState(e.target.value);
  }

  const { stateName } = parkContext;

  return (
    <div style={searchStyle}>
      <form onSubmit={onSubmit}>
        <select onChange={onChange} id="stateSelector">
          <option value="al" selected={stateName === "al"}>Alabama</option>
          <option value="ak" selected={stateName === "ak"}>Alaska</option>
          <option value="az" selected={stateName === "az"}>Arizona</option>
          <option value="ar" selected={stateName === "ar"}>Arkansas</option>
          <option value="ca" selected={stateName === "ca"}>California</option>
          <option value="co" selected={stateName === "co"}>Colorado</option>
          <option value="ct" selected={stateName === "ct"}>Connecticut</option>
          <option value="de" selected={stateName === "de"}>Delaware</option>
          <option value="dc" selected={stateName === "dc"}>District of Columbia</option>
          <option value="fl" selected={stateName === "fl"}>Florida</option>
          <option value="ga" selected={stateName === "ga"}>Georgia</option>
          <option value="hi" selected={stateName === "hi"}>Hawaii</option>
          <option value="id" selected={stateName === "id"}>Idaho</option>
          <option value="il" selected={stateName === "il"}>Illinois</option>
          <option value="in" selected={stateName === "in"}>Indiana</option>
          <option value="ia" selected={stateName === "ia"}>Iowa</option>
          <option value="ks" selected={stateName === "ks"}>Kansas</option>
          <option value="ky" selected={stateName === "ky"}>Kentucky</option>
          <option value="la" selected={stateName === "la"}>Louisiana</option>
          <option value="me" selected={stateName === "me"}>Maine</option>
          <option value="md" selected={stateName === "md"}>Maryland</option>
          <option value="ma" selected={stateName === "ma"}>Massachusetts</option>
          <option value="mi" selected={stateName === "mi"}>Michigan</option>
          <option value="mn" selected={stateName === "mn"}>Minnesota</option>
          <option value="ms" selected={stateName === "ms"}>Mississippi</option>
          <option value="mo" selected={stateName === "mo"}>Missouri</option>
          <option value="mt" selected={stateName === "mt"}>Montana</option>
          <option value="ne" selected={stateName === "ne"}>Nebraska</option>
          <option value="nv" selected={stateName === "nv"}>Nevada</option>
          <option value="nh" selected={stateName === "nh"}>New Hampshire</option>
          <option value="nj" selected={stateName === "nj"}>New Jersey</option>
          <option value="nm" selected={stateName === "nm"}>New Mexico</option>
          <option value="ny" selected={stateName === "ny"}>New York</option>
          <option value="nc" selected={stateName === "nc"}>North Carolina</option>
          <option value="nd" selected={stateName === "nd"}>North Dakota</option>
          <option value="oh" selected={stateName === "oh"}>Ohio</option>
          <option value="ok" selected={stateName === "ok"}>Oklahoma</option>
          <option value="or" selected={stateName === "or"}>Oregon</option>
          <option value="pa" selected={stateName === "pa"}>Pennsylvania</option>
          <option value="ri" selected={stateName === "ri"}>Rhode Island</option>
          <option value="sc" selected={stateName === "sc"}>South Carolina</option>
          <option value="sd" selected={stateName === "sd"}>South Dakota</option>
          <option value="tn" selected={stateName === "tn"}>Tennessee</option>
          <option value="tx" selected={stateName === "tx"}>Texas</option>
          <option value="ut" selected={stateName === "ut"}>Utah</option>
          <option value="vt" selected={stateName === "vt"}>Vermont</option>
          <option value="va" selected={stateName === "va"}>Virginia</option>
          <option value="wa" selected={stateName === "wa"}>Washington</option>
          <option value="wv" selected={stateName === "wv"}>West Virginia</option>
          <option value="wi" selected={stateName === "wi"}>Wisconsin</option>
          <option value="wy" selected={stateName === "wy"}>Wyoming</option>
        </select>
        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

const searchStyle = {
  width: '100px',
  margin: '50px auto'
}

export default Search;
