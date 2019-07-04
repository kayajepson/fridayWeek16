import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

function NavBar() {
  var myNavBarStyles = {
    backgroundColor: '#fafafa',
    width: '100%',
  }
  var logoStyles = {
    width: '150px',
    marginTop: '2%',
    marginLeft: '1%'
  }
  var barStyles = {
    minHeight: '150px',
  }
  var listStyles = {
    marginTop: '2%',
    color: '#422a17',
  }

  var textStyles = {
    fontSize: '20px',
    fontWeight: '500',
    color: '#422a17',
  }

  return (
    <div class="navbar-fixed">
      <nav class ="grey lighten-5" style={barStyles}>
        <div class="nav-wrapper" style={myNavBarStyles}>
        <img style={logoStyles} width={150} alt="logo" src={require('./assets/logo-brew-dr_s.png')}/>
          <ul id="nav-mobile" style={listStyles} class="right hide-on-med-and-down">
            <li><a href="sass.html" class="brown-text darken-4" style={textStyles}>WHAT IS KOMBUCHA?</a></li>
            <li><a href="badges.html" class="brown-text darken-4" style={textStyles}>ABOUT US</a></li>
            <li><a href="collapsible.html" class="brown-text darken-4" style={textStyles}>OUR KOMBUCHA</a></li>
            <li><a href="badges.html" class="brown-text darken-4" style={textStyles}>FIND BREW DR.</a></li>
            <li><a href="collapsible.html" class="brown-text darken-4" style={textStyles}>BLOG</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
