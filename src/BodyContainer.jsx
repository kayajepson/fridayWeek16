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

class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKombucha: "",
  };

  this.handleCurrentKombucha = this.handleCurrentKombucha.bind(this);

}
  handleCurrentKombucha( e) {
    e.preventDefault();
    let divId = e.id.value;
    console.log("id", divId);
    if (divId === 1) {
      (this.state.currentKombucha = "Clear Mind")
    } else if (divId === "2") {
      (this.state.currentKombucha = "Love")
    } else if (divId === "3") {
      (this.state.currentKombucha = "Mint Lemonade")
    } else if (divId === "4") {
      (this.state.currentKombucha = "Ginger Tumeric")
    } else if (divId === "5") {
      (this.state.currentKombucha = "Strawberry Basil")
    } else {
      (this.state.currentKombucha = "null")
    }
    // (divId === "6") ? (this.currentKombucha: "Power Flower"):
    // (divId === "7") ? (this.currentKombucha: "Superberry"):
    // (divId === "8") ? (this.currentKombucha: "Uplift"):
    // (divId === "9") ? (this.currentKombucha: "Happiness"):
    // (divId === "10") ? (this.currentKombucha: "Spiced Apple"):
    // (divId === "11") ? (this.currentKombucha: "Citrus Hops"):
    // (divId === "12") ? (this.currentKombucha: "Lemon Ginger Cayenne"): (this.currentKombucha: "Null")}
    // {(divId === "1") ? (this.currentKombucha: "Clear Mind"):
    // (divId === "2") ? (this.currentKombucha: "Love"):
    // (divId === "3") ? (this.currentKombucha: "Mint Lemonade"):
    // (divId === "4") ? (this.currentKombucha: "Ginger Tumeric"):
    // (divId === "5") ? (this.currentKombucha: "Strawberry Basil"):
    // (divId === "6") ? (this.currentKombucha: "Power Flower"):
    // (divId === "7") ? (this.currentKombucha: "Superberry"):
    // (divId === "8") ? (this.currentKombucha: "Uplift"):
    // (divId === "9") ? (this.currentKombucha: "Happiness"):
    // (divId === "10") ? (this.currentKombucha: "Spiced Apple"):
    // (divId === "11") ? (this.currentKombucha: "Citrus Hops"):
    // (divId === "12") ? (this.currentKombucha: "Lemon Ginger Cayenne"): (this.currentKombucha: "Null")}
    console.log("ck",this.state.currentKombucha);
    console.log(this.divId);
  }


  render() {
    var myBodyContainerStyles = {
      backgroundColor: '#fafafa',
      display: 'grid',
      gridTemplateColumns: '100vr',
    }
    return (
      <div style={myBodyContainerStyles}>
      <div class="row">
      <Link to="/kombuchaDetails"><div class="card-image waves-effect waves-block waves-light col s4" onClick={e => this.handleCurrentKombucha()} id="1"><img class="activator" alt="clear mind" src={ClearMindSmSq}/> </div>
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
}
BodyContainer.propTypes = {
  onCurrentKombucha: PropTypes.func,
  currentKombucha: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  availibility: PropTypes.string,
  quote: PropTypes.string,
  rating: PropTypes.string,
  color: PropTypes.string,
};

export default BodyContainer;
