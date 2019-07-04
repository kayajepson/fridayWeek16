import React from 'react';
import NavBar from './NavBar';
import HeaderTwo from './HeaderTwo';
import BodyContainer from './BodyContainer';
import 'materialize-css/dist/css/materialize.min.css'

function MainContainer() {
  var myMainContainerStyles = {
    backgroundColor: '#fafafa',
    display: 'grid',
    gridTemplateColumns: '100vr',
  }

  return (
      <div style={myMainContainerStyles}>
        <NavBar/>
        <div class="divider"></div>
        <HeaderTwo/>
        <br/>
        <BodyContainer/>
      </div>
  )
}

export default MainContainer;
