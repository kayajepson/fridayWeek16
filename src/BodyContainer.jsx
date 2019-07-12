import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//images
import ClearMindSmSq from './assets/BrewDr-Web-Tiles-CM.png';
import LoveSmSq from './assets/BrewDr-Web-Tiles-LUV.png';
import MintLemonadeSmSq from './assets/BrewDr-Web-Tiles-ML.png';
import GingerTumericSmSq from './assets/BrewDr-Web-Tiles-GT.png';
import StrawberryBasilSmSq from './assets/BrewDr-Web-Tiles-STB.png';
import PowerFlowerSmSq from './assets/BrewDr-Web-Tiles-PF2.png';
import SuperBerrySmSq from './assets/BrewDr-Web-Tiles-SB.png';
import UpLiftSmSq from './assets/BrewDr-Web-Tiles-UL.png';
import HappinessSmSq from './assets/BrewDr-Web-Tiles-HAP.png';
import SpicedAppleSmSq from './assets/BrewDr-Web-Tiles-SA.png';
import CitrusHopsSmSq from './assets/BrewDr-Web-Tiles-CH.png';
import LemonGingerCayenneSmSq from './assets/BrewDr-Web-Tiles-LGC.png';

function BodyContainer(props) {
  var myBodyContainerStyles = {
    backgroundColor: '#fafafa',
    display: 'grid',
    gridTemplateColumns: '100vr',
  }

  return (
  <div style={myBodyContainerStyles}>
    <div class="row">
      <Link to="/kombuchaDetails"><div class="card-image waves-effect waves-block waves-light col s4" onClick={props.onCurrentKombucha} value="1"><img class="activator" alt="clear mind" src={ClearMindSmSq}/> </div>
      </Link>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/love"><img class="activator" alt="love" src={LoveSmSq}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/mintLemonade"><img class="activator" alt="mint lemonade" src={MintLemonadeSmSq}/></a>
      </div>
    </div>

    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/gingerTumeric"><img class="activator" alt="ginger tumeric" src={GingerTumericSmSq}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/strawberryBasil"><img class="activator" alt="strawberry basil" src={StrawberryBasilSmSq}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/powerFlower"><img class="activator" alt="power flower" src={PowerFlowerSmSq}/></a>
      </div>
    </div>

    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/superberry"><img class="activator" alt="superberry" src={SuperBerrySmSq}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/uplift"><img class="activator" alt="uplift" src={UpLiftSmSq}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/happiness"><img class="activator" alt="happiness" src={HappinessSmSq}/></a>
      </div>
    </div>

    <div class="row">
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/spicedApple"><img class="activator" alt="spiced apple" src={SpicedAppleSmSq}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/citrusHops"><img class="activator" alt="citrus hops" src={CitrusHopsSmSq}/></a>
      </div>
      <div class="card-image waves-effect waves-block waves-light col s4">
        <a href="/lemonGingerCayenne"><img class="activator" alt="lemon ginger cayenne" src={LemonGingerCayenneSmSq}/></a>
      </div>
    </div>
  </div>
  )
}

BodyContainer.propTypes = {
    currentKombucha: PropTypes.string,
};

export default BodyContainer;
