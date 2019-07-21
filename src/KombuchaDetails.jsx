import React from 'react';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from "prop-types";
import { kombuchaDetails } from './Details';
import Kombucha from './Kombucha';
import { withRouter } from 'react-router-dom';

function KombuchaDetails (props){
  let _comment = null;
  const currentKombuchaDetails = kombuchaDetails[props.index];
  let color = currentKombuchaDetails.color;
  let background = currentKombuchaDetails.background_img;
  console.log(background);
  var myKombuchaDetailsStyles = {
    backgroundColor: '#fafafa',
    display: 'grid',
    gridTemplateColumns: '100vr',
  }

  var contentStyles = {
    // marginTop: '10%',
    backgroundImage: "url(" + `${background}` + ")",
    backgroundSize: 'cover',
    minHeight: '95vh',
    backgroudPosition: 'fixed',
    backgroundRepeat: 'no repeat',
  }

  var headerImgStyle = {
    marginTop: '10%',
    backgroundSize: 'cover',
    width: '75%',
    backgroudPosition: 'fixed',
    backgroundRepeat: 'no repeat',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  var rectangleStyle = {
    marginTop: '3%',
    backgroundColor: `${color}`,
    width: '75%',
    padding: '3%',
    height: '100vh',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '5',
  }

  var nameStyle = {
    color: "#ffffff",
    fontSize: '75px',
    position: 'sticky',
    lineHeight: '45px',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Oswald, sans-serif',
    fontStretch: 'ultra-condensed',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginTop: '-37px',
    marginRight: 'auto',
    zIndex: '10',
  }

  var descriptionStyle = {
    // marginTop: '-5%',
    color: "#ffffff",
    fontSize: '25px',
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontStretch: 'ultra-condensed',
    fontStyle: 'italic',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '10',
  }

  var availibilityStyle = {
    // marginTop: '-5%',
    color: "#ffffff",
    fontSize: '20px',
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontStretch: 'ultra-condensed',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '10',
  }

  var quoteStyle = {
    // marginTop: '-5%',
    color: "#ffffff",
    fontSize: '25px',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontStretch: 'ultra-expanded',
    fontStyle: 'italic',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '10',
  }

  var ratingStyle = {
    // marginTop: '-5%',
    color: "#ffffff",
    fontSize: '15px',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Oswald, sans-serif',
    fontStretch: 'ultra-condensed',
    backgroudPosition: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '10',
  }

  var inputStyles = {
    // marginTop: '-5%',
    color: `${color}`,
    backgroundColor: '#ffffff',
    width: '75%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  var formStyle = {
    // marginTop: '-5%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  var buttonStyles = {
    // marginTop: '-5%',
    width: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  function updateQuotes(e) {
    e.preventDefault();
    let comments = _comment.value;
    currentKombuchaDetails.quote.push(comments);
    _comment.value = ''
    currentKombuchaDetails.quote = currentKombuchaDetails.quote;
    console.log("quotes", currentKombuchaDetails.quote);
  }
  return (
    <div style={myKombuchaDetailsStyles}>
      <NavBar/>
      <div class="divider"></div>
        <div style={contentStyles}>
          <img class="activator" alt="logo" style={headerImgStyle} src={currentKombuchaDetails.desktop_img}/>
          <div style={{backgroundColor: currentKombuchaDetails.color}, rectangleStyle}>
          <h2 style={nameStyle}>{currentKombuchaDetails.name}</h2>
          <br/><br/>
          <span style={descriptionStyle}>{currentKombuchaDetails.description}</span>
          <br/><br/>
          <span style={availibilityStyle}>{currentKombuchaDetails.availibility}</span>
          <br/><br/>
          <span style={ratingStyle}>
          {(parseFloat(currentKombuchaDetails.rating) < 5) ?
            (<div><img alt="star" src={require('./assets/white-star-100-filled.png')}/>
            <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
            <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
            <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
            <img alt="star" src={require('./assets/white-star-75-filled.png')}/><h6>{currentKombuchaDetails.rating}</h6></div>) :
            (<div><img alt="star" src={require('./assets/white-star-100-filled.png')}/>
            <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
            <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
            <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
            <img alt="star" src={require('./assets/white-star-100-filled.png')}/><h6>{currentKombuchaDetails.rating}</h6></div>)}
            </span>

          <h4 style={availibilityStyle}>Your Comments:</h4>
          <span style={quoteStyle}>{currentKombuchaDetails.quote.map((quote, index) => <p>{quote}</p>)}
          </span>

          <div style={formStyle}>
          <form id="comment-form" onSubmit={e => updateQuotes(e)}>
          <input autoComplete="off" style={inputStyles} type="text" ref={(input) => {_comment = input;}}/>
          <button style={buttonStyles} type="submit">Add Comment</button>
          </form>
          </div>

          </div>
        </div>
      </div>
    )
  }

  KombuchaDetails.propTypes = {
    currentKombucha: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    availibility: PropTypes.string,
    quote: PropTypes.string,
    rating: PropTypes.string,
    color: PropTypes.string,
  };

  export default KombuchaDetails;
