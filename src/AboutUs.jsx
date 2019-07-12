import React from 'react';
import BodyContainer from './BodyContainer';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import TopBackground from './assets/ourstory-darker.jpg';

function AboutUs() {
  var myAboutUsStyles = {
    backgroundColor: '#fafafa',
    display: 'grid',
    gridTemplateColumns: '100vr',
  }
  var topStyles = {
    backgroundColor: '#fafafa',
    // backgroundImage: "url(" + TopBackground + ")",
    backgroudPosition: 'center',
    backgroundSize: 'contain',
    minHeight: '65vh',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  }
  var topText = {
    color: '#000000',
    position: 'absolute',
    top: '8px',
    left: '16px',
  }
  var containerStyle = {
    position: 'relative',
  }

  return (
    <div style={myAboutUsStyles}>
      <NavBar/>
        <div class="divider"></div>
          <div style={containerStyle}>
            <img style={topStyles} alt="flower" src={require('./assets/ourstory-darker.jpg')}/>
            <div style={topText}>AUTHENTIC KOMBUCHA FROM A TEA COMPANY</div>
        </div>
    </div>
  )
}

export default AboutUs;
