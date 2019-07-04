import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

function BodyContainer() {
  var myBodyContainerStyles = {
    backgroundColor: '#fafafa',
    display: 'grid',
    gridTemplateColumns: '100vr',
  }

  return (
  <div style={myBodyContainerStyles}>
    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-CH.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-CH.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-CH.png')}/>
      </div>
    </div>

    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-CH.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-CH.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-CH.png')}/>
      </div>
    </div>

    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-CH.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-CH.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-CH.png')}/>
      </div>
    </div>
  </div>
  )
}

export default BodyContainer;
