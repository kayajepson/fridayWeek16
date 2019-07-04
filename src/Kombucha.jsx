import React from 'react';
import PropTypes from "prop-types";

function Kombucha(props) {
  var rightContentStyle = {
    minHeight: '150px',
    borderRadius: '5px',
    backgroundColor: '#edeff1',
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
    <div style={rightContentStyle}>
    {props.name}asdf
      {props.description}
      {props.availibility}
    {props.quote}
    {props.rating}
    {props.color}
 </div>
  )
}

Kombucha.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  availibility: PropTypes.string.isRequired,
  quote: PropTypes.string,
  rating: PropTypes.string,
  color: PropTypes.string,
};

export default Kombucha;
