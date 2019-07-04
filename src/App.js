import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import 'materialize-css/dist/css/materialize.min.css'
import { Switch, Route } from 'react-router-dom';
import ClearMind from './components/ClearMind';

function App() {
  var appStyles = {
    backgroundColor: '#fafafa',
  }

  return (
    <div style={appStyles}>
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route path='/clearmind' component={ClearMind} />
      </Switch>
    </div>
  );
}

export default App;
