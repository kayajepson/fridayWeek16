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
        <a href="/clearmind"><img class="activator" alt="clear mind" src={require('./assets/BrewDr-Web-Tiles-CM.png')}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/love"><img class="activator" alt="love" src={require('./assets/BrewDr-Web-Tiles-LUV.png')}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/mintLemonade"><img class="activator" alt="mint lemonade" src={require('./assets/BrewDr-Web-Tiles-ML.png')}/></a>
      </div>
    </div>

    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/gingerTumeric"><img class="activator" alt="ginger tumeric" src={require('./assets/BrewDr-Web-Tiles-GT.png')}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/strawberryBasil"><img class="activator" alt="strawberry basil" src={require('./assets/BrewDr-Web-Tiles-STB.png')}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/powerFlower"><img class="activator" alt="power flower" src={require('./assets/BrewDr-Web-Tiles-PF2.png')}/></a>
      </div>
    </div>

    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/superberry"><img class="activator" alt="superberry" src={require('./assets/BrewDr-Web-Tiles-SB.png')}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/uplift"><img class="activator" alt="uplift" src={require('./assets/BrewDr-Web-Tiles-UL.png')}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/happiness"><img class="activator" alt="happiness" src={require('./assets/BrewDr-Web-Tiles-HAP.png')}/></a>
      </div>
    </div>

    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/spicedApple"><img class="activator" alt="spiced apple" src={require('./assets/BrewDr-Web-Tiles-SA.png')}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/citrusHops"><img class="activator" alt="citrus hops" src={require('./assets/BrewDr-Web-Tiles-CH.png')}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/lemonGingerCayenne"><img class="activator" alt="lemon ginger cayenne" src={require('./assets/BrewDr-Web-Tiles-LGC.png')}/></a>
      </div>
    </div>
  </div>
  )
}

export default BodyContainer;
