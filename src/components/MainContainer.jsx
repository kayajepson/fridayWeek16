import React from 'react';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css'

function MainContainer() {
  var myMainContainerStyles = {
    backgroundColor: '#fafafa',
    display: 'grid',
    gridTemplateColumns: '100hr',
    gridTemplateArea: 'left right',
    paddingRight: '5%',
    paddingLeft: '2%',
    paddingTop: '2%',
    height: '100vh',
  }

  return (
      <div style={myMainContainerStyles}>
        <NavBar/>
      </div>
  )
}

export default MainContainer;
