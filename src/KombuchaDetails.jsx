import React from 'react';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import Background from './assets/headers-bg-clear-mind.jpg';
import PropTypes from "prop-types";
import { kombuchaDetails } from './Details';
import Kombucha from './Kombucha';
import { withRouter } from 'react-router-dom';

  function KombuchaDetails (props){
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

console.log('props', props)
  const currentKombuchaDetails = kombuchaDetails[props.index]
  console.log('kom', currentKombuchaDetails)
  return (
    <div style={myKombuchaDetailsStyles}>
    <NavBar/>
    <div class="divider"></div>
    <div style={contentStyles}>
    <img class="activator" alt="logo" style={headerImgStyle} src={currentKombuchaDetails.sq_img}/>
    {/*<Kombucha/>*/}
    <div style={rectangleStyle}>
    <h2 style={nameStyle}>{currentKombuchaDetails.name}</h2>
    <br/><br/>
    <span style={descriptionStyle}>{currentKombuchaDetails.description}</span>
    <br/><br/>
    <span style={availibilityStyle}>{currentKombuchaDetails.availibility}</span>
    <br/><br/>
    <h4 style={availibilityStyle}> Your Comments:</h4>
    <span style={quoteStyle}>{currentKombuchaDetails.quote.map((quote, index) => <p>{quote}</p>)}</span>
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
