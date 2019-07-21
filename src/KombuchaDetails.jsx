import React from 'react';
import NavBar from './NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from "prop-types";
import { kombuchaDetails } from './Details';

class KombuchaDetails extends React.Component {
  constructor (props) {
    super(props)
    this.index = props.index;
    this.kombuchaDetails = kombuchaDetails[props.index];
    let color = this.kombuchaDetails.color;
    let background = this.kombuchaDetails.background_img;
    this._comment = null;
    this.myKombuchaDetailsStyles = {
      backgroundColor: '#fafafa',
      display: 'grid',
      gridTemplateColumns: '100vr',
    }

    this.contentStyles = {
      backgroundImage: "url(" + `${background}` + ")",
      backgroundSize: 'cover',
      minHeight: '95vh',
      backgroudPosition: 'fixed',
      backgroundRepeat: 'no repeat',
    }

    this.headerImgStyle = {
      marginTop: '10%',
      backgroundSize: 'cover',
      width: '75%',
      backgroudPosition: 'fixed',
      backgroundRepeat: 'no repeat',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }

    this.rectangleStyle = {
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

    this.nameStyle = {
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

    this.descriptionStyle = {
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

    this.availibilityStyle = {
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

    this.quoteStyle = {
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

    this.ratingStyle = {
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

    this.inputStyles = {
      // marginTop: '-5%',
      color: `${color}`,
      backgroundColor: '#ffffff',
      width: '75%',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }

    this.formStyle = {
      // marginTop: '-5%',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
    this.buttonStyles = {
      // marginTop: '-5%',
      width: '50%',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }

    this.updateQuotes = this.updateQuotes.bind(this)
  }

  updateQuotes(e) {
    e.preventDefault();
    let comments = this._comment.value;
    this.kombuchaDetails.quote.push(comments);
    this._comment.value = ''
    this.setState({kombuchaDetails: this.kombuchaDetails})
  }

  render() {
    return (
      <div style={this.myKombuchaDetailsStyles}>
      <NavBar/>
      <div class="divider"></div>
      <div style={this.contentStyles}>
      <img class="activator" alt="logo" style={this.headerImgStyle} src={this.kombuchaDetails.desktop_img}/>
      <div style={this.rectangleStyle}>
      <h2 style={this.nameStyle}>{this.kombuchaDetails.name}</h2>
      <br/><br/>
      <span style={this.descriptionStyle}>{this.kombuchaDetails.description}</span>
      <br/><br/>
      <span style={this.availibilityStyle}>{this.kombuchaDetails.availibility}</span>
      <br/><br/>
      <span style={this.ratingStyle}>
      {(parseFloat(this.kombuchaDetails.rating) < 5) ?
        (<div><img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-75-filled.png')}/><h6>{this.kombuchaDetails.rating}</h6></div>) :
        (<div><img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-100-filled.png')}/>
        <img alt="star" src={require('./assets/white-star-100-filled.png')}/><h6>{this.kombuchaDetails.rating}</h6></div>)}
        </span>

        <h4 style={this.availibilityStyle}>Your Comments:</h4>
        <span style={this.quoteStyle}>{this.kombuchaDetails.quote.map((quote, index) => <p>{quote}</p>)}
        </span>

        <div style={this.formStyle}>
        <form id="comment-form" onSubmit={e => this.updateQuotes(e)}>
        <input autoComplete="off" style={this.inputStyles} type="text" ref={(input) => {this._comment = input;}}/>
        <button style={this.buttonStyles} type="submit">Add Comment</button>
        </form>
        </div>

        </div>
        </div>
        </div>
      )
    }
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
