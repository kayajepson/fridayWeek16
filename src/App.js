import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import 'materialize-css/dist/css/materialize.min.css'
import { Switch, Route } from 'react-router-dom';
import ClearMind from './ClearMind';
import AboutUs from './AboutUs';
import KombuchaDetails from './KombuchaDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKombucha: {},
    };

    this.handleUpdateKombucha = this.handleUpdateKombucha.bind(this);
  }

  handleUpdateKombucha(ck) {
     this.setState({currentKombucha: ck});
  }


  render() {
    return (
      <div>
      <Switch>
      <Route exact path='/' render={()=><MainContainer
        onCurrentKombucha={this.handleUpdateKombucha}/>}/>
      <Route path='/clearmind' component={ClearMind} />
      <Route path='/aboutUs' component={AboutUs} />
      <Route path='/kombuchaDetails/:id'  render={(props)=> <KombuchaDetails
      index={props.match.params.id}
      currentKombucha={this.state.currentKombucha}/>}/>
      </Switch>
      </div>
    );
  }
}
export default App;
