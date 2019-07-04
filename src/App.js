import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import 'materialize-css/dist/css/materialize.min.css'
import { Switch, Route } from 'react-router-dom';
import ClearMind from './components/ClearMind';
import { BrowserRouter } from 'react-router-dom';

function App() {
  var appStyles = {
    backgroundColor: '#fafafa',
  }

  return (
    <div className="App" style={appStyles}>
    <MainContainer />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route path='/clearmind' component={ClearMind} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
