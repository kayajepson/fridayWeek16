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
      color: "",

    };
    this.handleCurrentKombucha = this.handleCurrentKombucha.bind(this);
  }

  handleCurrentKombucha = ev => {
    this.setState({
      currentKombucha: ev.currentTarget.dataset.div_id
    });
  };

  render() {
    return (
      <div>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={MainContainer} />
      <Route path='/clearmind' component={ClearMind} />
      <Route path='/aboutUs' component={AboutUs} />
      <Route path='/kombuchaDetails'render={()=><KombuchaDetails onHandleCurrentKombucha={this.handleCurrentKombucha}/>}/>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
export default App;
