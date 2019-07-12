import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import { BrowserRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import { Switch, Route } from 'react-router-dom';
import ClearMind from './ClearMind';
import AboutUs from './AboutUs';

function App() {
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
