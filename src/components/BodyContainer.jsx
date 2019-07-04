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
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-CM.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-LUV.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-ML.png')}/>
      </div>
    </div>

    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-GT.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-STB.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-PF2.png')}/>
      </div>
    </div>

    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-SB.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-UL.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-HAP.png')}/>
      </div>
    </div>

    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-SA.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-CH.png')}/>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <img class="activator" alt="logo" src={require('../assets/BrewDr-Web-Tiles-LGC.png')}/>
      </div>
    </div>
  </div>
  )
}

export default BodyContainer;
