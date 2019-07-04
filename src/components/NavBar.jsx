import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

function NavBar() {
  var myNavBarStyles = {
    backgroundColor: '#fafafa',
    width: '100%',
  }
  var logoStyles = {
    width: '150px',
    marginTop: '2%',
    marginLeft: '2%'
  }
  var barStyles = {
    minHeight: '150px',
  }
  var listStyles = {
    marginTop: '2%',
  }

  return (
    <div>
      <nav class ="grey lighten-5" style={barStyles}>
        <div class="nav-wrapper" style={myNavBarStyles}>
        <img style={logoStyles} width={150} alt="logo" src={require('../assets/logo-brew-dr_s.png')}/>
          <ul id="nav-mobile" style={listStyles} class="right hide-on-med-and-down">
            <li><a href="sass.html" class="blue-text text-darken-2">Sass</a></li>
            <li><a href="badges.html" class="blue-text text-darken-2">Components</a></li>
            <li><a href="collapsible.html" class="blue-text text-darken-2">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
