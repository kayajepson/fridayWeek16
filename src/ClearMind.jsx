import React from 'react';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import Background from './assets/headers-bg-clear-mind.jpg';


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

  return (
      <div style={myClearMindStyles}>
        <NavBar/>
        <div class="divider"></div>
        <div style={contentStyles}>
        <img class="activator" alt="logo" style={headerImgStyle} src={require('./assets/CM-Desktop.png')}/>
        </div>
      </div>
  )
}

export default ClearMind;
