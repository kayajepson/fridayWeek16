import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import { BrowserRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import { Switch, Route } from 'react-router-dom';
import ClearMind from './ClearMind';
import AboutUs from './AboutUs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKombucha: null
    };
    this.handleCurrentKombucha = this.handleCurrentKombucha.bind(this);
  }

  handleCurrentKombucha() {
    var newSelectedKombucha = this.state.selectedKombucha;
    this.setState({selectedKombucha: newSelectedKombucha});
    console.log(this.state.selectedKombucha);
  }
  var appStyles = {
    backgroundColor: '#fafafa',
  }

  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/clearmind' component={ClearMind} />
        <Route exact path='/aboutUs' component={AboutUs} />
      </Switch>
    </BrowserRouter>
    </div>


  );
}

export default App;
