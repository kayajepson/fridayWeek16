import React from 'react';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css'

function ClearMind() {
  var myClearMindStyles = {
    backgroundColor: '#fafafa',
    display: 'grid',
    gridTemplateColumns: '100vr',
  }

  var contentStyles = {
    marginTop: '10%'
  }

  return (
      <div style={myClearMindStyles}>
        <NavBar/>
        <div class="divider"></div>
        <div style={contentStyles}>
        alsasdfjaslkdf
        </div>
      </div>
  )
}

export default ClearMind;
