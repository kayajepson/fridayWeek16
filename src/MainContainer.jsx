import React from 'react';
import PropTypes from "prop-types";

import HeaderTwo from './HeaderTwo';
import BodyContainer from './BodyContainer';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css';

function MainContainer(props) {
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
        <BodyContainer currentKombucha={props.currentKombucha}
        name={props.kombuchaName}
        description={props.description}
        availibility={props.availibility}
        quote={props.quote}
        rating={props.rating}/>}/>
      </div>
  )
}

MainContainer.propTypes = {
  onHandleCurrentKombucha: PropTypes.func,
  currentKombucha: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  availibility: PropTypes.string,
  quote: PropTypes.string,
  rating: PropTypes.string,
  color: PropTypes.string,
};

export default MainContainer;
