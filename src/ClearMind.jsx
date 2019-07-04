import React from 'react';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css'

function ClearMind() {
  var myClearMindStyles = {
    backgroundColor: '#fafafa',
    display: 'grid',
    gridTemplateColumns: '100vr',
  }

  return (
      <div style={myClearMindStyles}>
        <NavBar/>
        <div class="divider"></div>
        <p>here is some content</p>
      </div>
  )
}

export default ClearMind;
