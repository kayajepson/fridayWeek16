import React from 'react';
import PropTypes from "prop-types";

function Kombucha(props) {
  var rightContentStyle = {

  }
  var rightContentHeader = {
    padding: '1px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    backgroundColor: '#a08db5',
    color: 'white',
    fontSize: '10px'
  }


  return (
    <div>
    {props.name}
    {props.description}
    {props.availibility}
    {props.quote}
    {props.rating}
    {props.color}
    </div>
  )
}

Kombucha.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  availibility: PropTypes.string,
  quote: PropTypes.string,
  rating: PropTypes.string,
  color: PropTypes.string
};

export default Kombucha;
