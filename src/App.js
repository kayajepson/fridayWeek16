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

  handleCurrentKombucha() {
    var currentKombucha = this.state.currentKombucha;
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
    console.log(this.divId);
    return (
      <div>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={MainContainer} />
      <Route path='/clearmind' component={ClearMind} />
      <Route path='/aboutUs' component={AboutUs} />
      <Route path='/kombuchaDetails'render={()=><KombuchaDetails currentKombucha={this.state.currentKombucha}
      name={this.state.kombuchaName}
      description={this.state.description}
      availibility={this.state.availibility}
      quote={this.state.quote}
      rating={this.state.rating}/>}/>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
export default App;
