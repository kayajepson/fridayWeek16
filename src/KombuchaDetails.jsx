import React from 'react';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import Background from './assets/headers-bg-clear-mind.jpg';
import PropTypes from "prop-types";
import Details from './Details';
import Kombucha from './Kombucha';
import { withRouter } from 'react-router-dom';

function KombuchaDetails (props){
console.log(props);
  var myKombuchaDetailsStyles = {
    backgroundColor: '#fafafa',
    display: 'grid',
    gridTemplateColumns: '100vr',
  }

  var contentStyles = {
    // marginTop: '10%',
    backgroundImage: "url(" + Background + ")",
    backgroundSize: 'cover',
    minHeight: '95vh',
    backgroudPosition: 'fixed',
    backgroundRepeat: 'no repeat',
  }

  var headerImgStyle = {
    marginTop: '10%',
    backgroundSize: 'cover',
    width: '75%',
    backgroudPosition: 'fixed',
    backgroundRepeat: 'no repeat',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  var rectangleStyle = {
    marginTop: '3%',
    backgroundColor: '#7ca7ad',
    width: '75%',
    height: '550px',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '5',
  }

  var nameStyle = {
    color: "#ffffff",
    fontSize: '75px',
    position: 'sticky',
    lineHeight: '45px',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Oswald, sans-serif',
    fontStretch: 'ultra-condensed',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginTop: '-37px',
    marginRight: 'auto',
    zIndex: '10',
  }

  var descriptionStyle = {
    // marginTop: '-5%',
    color: "#ffffff",
    fontSize: '25px',
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontStretch: 'ultra-condensed',
    fontStyle: 'italic',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '10',
  }

  var availibilityStyle = {
    // marginTop: '-5%',
    color: "#ffffff",
    fontSize: '20px',
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontStretch: 'ultra-condensed',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '10',
  }

  var quoteStyle = {
    // marginTop: '-5%',
    color: "#ffffff",
    fontSize: '25px',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontStretch: 'ultra-expanded',
    fontStyle: 'italic',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '10',
  }

  var ratingStyle = {
    // marginTop: '-5%',
    color: "#ffffff",
    fontSize: '15px',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Oswald, sans-serif',
    fontStretch: 'ultra-condensed',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '10',
  }

  return (
    <div style={myKombuchaDetailsStyles}>
    <NavBar/>
    <div class="divider"></div>
    <div style={contentStyles}>
    <img class="activator" alt="logo" style={headerImgStyle} src={require('./assets/CM-Desktop.png')}/>
    {/*<Kombucha/>*/}
    <div style={rectangleStyle}>
    <h2 style={nameStyle}>{props.name}</h2>
    <br/><br/>
    <span style={descriptionStyle}>{props.description}A fan favorite, this brilliant blend of rosemary, mint, sage and green tea is <br/> bright and invigorating.</span>
    <br/><br/>
    <span style={availibilityStyle}>{props.availibility}Available in: 14oz bottles, 32oz bottles, 12oz cans & kegs.</span>
    <br/><br/>
    <span style={quoteStyle}>{props.quote}"My favorite kombucha flavor out there!"</span>
    <br/><br/>
    <span style={ratingStyle}>
    {/* if (parseFloat({props.rating}) < 5) {
      return (
        <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-75-filled.png')}/><h6>{props.rating}</h6>
      ) else (
        return (
          <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
          <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
          <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
          <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
          <img alt="star" src={require('./assets/white-star-100-filled.png')}/><h6>{props.rating}</h6>
        )
      )
    };*/}
    <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
    <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
    <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
    <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
    <img alt="star" src={require('./assets/white-star-75-filled.png')}/><h6>4.7</h6>
    </span>
    </div>
    </div>
    </div>
  )
}

KombuchaDetails.propTypes = {
  currentKombucha: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  availibility: PropTypes.string,
  quote: PropTypes.string,
  rating: PropTypes.string,
  color: PropTypes.string,
};

export default KombuchaDetails;
