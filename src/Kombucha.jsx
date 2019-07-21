import React from 'react';
import PropTypes from "prop-types";

function Kombucha(props) {
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
