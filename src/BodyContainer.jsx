import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Kombucha from './Kombucha';
import { kombuchaDetails } from './Details.jsx';



class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKombucha: "",
    };
    this.handleCurrentKombucha = this.handleCurrentKombucha.bind(this);
  }

  handleCurrentKombucha() {
      // let divId = buch.id;
      // console.log("id", divId);
    }


  render() {
    let row1 = kombuchaDetails.slice(1,4);
    let row2 = kombuchaDetails.slice(3,7);

    var myBodyContainerStyles = {
      backgroundColor: '#fafafa',
      display: 'grid',
      gridTemplateColumns: '100vr',
    }

    return (

      <div style={myBodyContainerStyles}>
        <div class="row">
          {kombuchaDetails.map((buch, index) =>
            <div class="card-image waves-effect waves-block waves-light col s4" onClick={this.handleCurrentKombucha()}>
              <img class="activator" alt="{buch.name}" src={buch.sq_img}/>
              <Kombucha
                //name={buch.name}
                //description={buch.description}
                //availibility={buch.availibility}
                //quote={buch.quote}
                //rating={buch.rating}
                //color={buch.color}
              key={index}/>
            </div>
          )}
          </div>
        </div>
        )
      }
    }

    BodyContainer.propTypes = {
      onCurrentKombucha: PropTypes.func,
      currentKombucha: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      availibility: PropTypes.string,
      quote: PropTypes.string,
      rating: PropTypes.string,
      color: PropTypes.string,
      image: PropTypes.string
    };

    export default BodyContainer;
