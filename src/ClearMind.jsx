import React from 'react';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import Background from './assets/headers-bg-clear-mind.jpg';
import PropTypes from "prop-types";
import Details from './Details';
import Kombucha from './Kombucha';

function ClearMind(props) {
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
    backgroundColor: 'blue',
    width: '500px',
    height: '350px',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '10',
  }

  return (
      <div style={myClearMindStyles}>
        <NavBar/>
        <div class="divider"></div>
        <div style={contentStyles}>
        <img class="activator" alt="logo" style={headerImgStyle} src={require('./assets/CM-Desktop.png')}/>
        <div style={rectangleStyle}>
        <Kombucha/>
        </div>
        </div>
      </div>
  )
}

export default ClearMind;
