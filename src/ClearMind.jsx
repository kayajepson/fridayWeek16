import React from 'react';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import Background from './assets/headers-bg-clear-mind.jpg';
import PropTypes from "prop-types";


function ClearMind() {
  var myClearMindStyles = {
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
    backgroundColor: '{props.color}',
    width: '500px',
    height: '350px',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '100',
  }

  return (
      <div style={myClearMindStyles}>
        <NavBar/>
        <div class="divider"></div>
        <div style={contentStyles}>
        {props.name}
        <img class="activator" alt="logo" style={headerImgStyle} src={require('./assets/CM-Desktop.png')}/>
        <div style={rectangleStyle}></div>
        </div>
      </div>
  )
}

ClearMind.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  availibility: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default ClearMind;
