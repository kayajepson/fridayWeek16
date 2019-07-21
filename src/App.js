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
      currentKombucha: {},
    };

    this.handleUpdateKombucha = this.handleUpdateKombucha.bind(this);
    this.handleKombuchaName = this.handleKombuchaName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleAvailibility = this.handleAvailibility.bind(this);
    this.handleQuote = this.handleQuote.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  handleUpdateKombucha(ck) {
     this.setState({currentKombucha: ck});
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
        onCurrentKombucha={this.handleUpdateKombucha}
        name={this.state.kombuchaName}
        description={this.state.description}
        availibility={this.state.availibility}
        quote={this.state.quote}
        rating={this.state.rating}/>}/>
      <Route path='/clearmind' component={ClearMind} />
      <Route path='/aboutUs' component={AboutUs} />
      <Route path='/kombuchaDetails/:id'  render={(props)=> <KombuchaDetails
      index={props.match.params.id}
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
