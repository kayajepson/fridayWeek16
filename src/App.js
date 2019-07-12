import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import { BrowserRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import { Switch, Route } from 'react-router-dom';
import ClearMind from './ClearMind';
import AboutUs from './AboutUs';
import KombuchaDetails from './KombuchaDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKombucha: "asdf",
      name: "test",
      description: "",
      availibility: "",
      quote: "",
      rating: "",
    };

    this.handleCurrentKombucha = this.handleCurrentKombucha.bind(this);
    this.handleKombuchaName = this.handleKombuchaName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleAvailibility = this.handleAvailibility.bind(this);
    this.handleQuote = this.handleQuote.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  handleCurrentKombucha(e) {
    let divId = e.currentTarget.dataset.id;
    console.log("id", divId);
      if (divId === "1") {
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

  handleKombuchaName(){
    var kombuchaName = this.state.name;
  }

  handleDescription(){
    var kombuchaDescription = this.state.description;
  }

  handleAvailibility(){
    var kombuchaAvailibility = this.state.availibility;
  }

  handleQuote(){
    var kombuchaQuote = this.state.quote;
  }

  handleRating(){
    var kombuchaRating = this.state.rating;
  }



  render() {
    return (
      <div>
      <Switch>
      <Route exact path='/' render={()=><MainContainer
        onCurrentKombucha={this.handleCurrentKombucha}
        currentKombucha={this.state.currentKombucha}
        name={this.state.kombuchaName}
        description={this.state.description}
        availibility={this.state.availibility}
        quote={this.state.quote}
        rating={this.state.rating}/>}/>
      <Route path='/clearmind' component={ClearMind} />
      <Route path='/aboutUs' component={AboutUs} />
      <Route path='/kombuchaDetails'render={()=><KombuchaDetails
      currentKombucha={this.state.currentKombucha}
      name={this.state.kombuchaName}
      description={this.state.description}
      availibility={this.state.availibility}
      quote={this.state.quote}
      rating={this.state.rating}/>}/>
      </Switch>
      </div>
    );
  }
}
export default App;
