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
    <p>{props.description}</p>
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
