import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

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
    marginBottom: '5%'
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
        <Link to="/"><img style={logoStyles} width={150} alt="logo" src={require('./assets/logo-brew-dr_s.png')}/></Link>
          <ul id="nav-mobile" style={listStyles} class="right hide-on-med-and-down">
            <li><Link to="/whatIsKombucha" class="brown-text darken-4" style={textStyles}>WHAT IS KOMBUCHA?</Link></li>
            <li><Link to="/aboutUs" class="brown-text darken-4" style={textStyles}>ABOUT US</Link></li>
            <li><Link to="/" class="brown-text darken-4" style={textStyles}>OUR KOMBUCHA</Link></li>
            <li><Link to="/findUs" class="brown-text darken-4" style={textStyles}>FIND BREW DR.</Link></li>
            <li><Link to="/blog" class="brown-text darken-4" style={textStyles}>BLOG</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
