import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  var appStyles = {
    backgroundColor: '#fafafa',
  }

  return (
    <div style={appStyles} className="App">

    <MainContainer />
    </div>
  );
}

export default App;
