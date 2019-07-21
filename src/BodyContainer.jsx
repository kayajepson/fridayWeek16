import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Kombucha from './Kombucha';
import { kombuchaDetails } from './Details.jsx';
import KombuchaDetails from './KombuchaDetails';


class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentKombucha: {},
    // };
    this.handleCurrentKombucha = this.handleCurrentKombucha.bind(this);
  }

  handleCurrentKombucha(index) {
      let localCK = kombuchaDetails[index];
      this.props.onCurrentKombucha(localCK);
      // this.setState(this.state.currentKombucha = kombuchaDetails[id]);
      // console.log("id", this.state.currentKombucha);
    }


  render() {
    var myBodyContainerStyles = {
      backgroundColor: '#fafafa',
      display: 'grid',
      gridTemplateColumns: '100vr',
    }

    return (

      <div style={myBodyContainerStyles}>
        <div class="row">
          {kombuchaDetails.map((buch, index) =>
            <Link to={`/KombuchaDetails/${index}`}><div class="card-image waves-effect waves-block waves-light col s4"
            onClick={() => this.handleCurrentKombucha(index)}>
              <img class="activator" alt="{buch.name}" src={buch.sq_img}/>
              <Kombucha
                //name={buch.name}
                //description={buch.description}
                //availibility={buch.availibility}
                //quote={buch.quote}
                //rating={buch.rating}
                //color={buch.color}
              key={index}/>
            </div></Link>
          )}
          </div>
        </div>
        )
      }
    }

    BodyContainer.propTypes = {
      handleUpdateKombucha: PropTypes.func,
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
