import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

function HeaderTwo() {
  var headerTwoStyles = {
    backgroundColor: '#fafafa',
    textAlign: 'center'
  }

  return (
      <div style={headerTwoStyles}>
        <img width={750} alt="Raw Real Img" src={require('./assets/RawReal.png')}/>
      </div>
  )
}

export default HeaderTwo;
