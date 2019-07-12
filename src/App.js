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
      currentKombucha: null,
      name: "",
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


  handleCurrentKombucha = ev => {
    this.setState({
      divId : ev.currentTarget.dataset.div_id

      {(divId === "1") ? (this.currentKombucha: "Clear Mind"):
      (divId === "2") ? (this.currentKombucha: "Love"):
      (divId === "3") ? (this.currentKombucha: "Mint Lemonade"):
      (divId === "4") ? (this.currentKombucha: "Ginger Tumeric"):
      (divId === "5") ? (this.currentKombucha: "Strawberry Basil"):
      (divId === "6") ? (this.currentKombucha: "Power Flower"):
      (divId === "7") ? (this.currentKombucha: "Superberry"):
      (divId === "8") ? (this.currentKombucha: "Uplift"):
      (divId === "9") ? (this.currentKombucha: "Happiness"):
      (divId === "10") ? (this.currentKombucha: "Spiced Apple"):
      (divId === "11") ? (this.currentKombucha: "Citrus Hops"):
      (divId === "12") ? (this.currentKombucha: "Lemon Ginger Cayenne"): (this.currentKombucha: "Null")}
    });
  };

  render() {
    console.log(this.divId);
    return (
      <div>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={MainContainer} />
      <Route path='/clearmind' component={ClearMind} />
      <Route path='/aboutUs' component={AboutUs} />
      <Route path='/kombuchaDetails'render={()=><KombuchaDetails onHandleCurrentKombucha={this.handleCurrentKombucha}
      onKombuchaName={this.handleKombuchaName}
      onHandleDescription={this.handleDescription}
      onHandleAvailibility={this.handleAvailibility}
      onHandleQuote={this.handleQuote}
      onHandleRating={this.handleRating}/>}/>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
export default App;
