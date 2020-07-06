import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchingCountries } from './redux/actions'
import Home from './components/Home'
import CountryISO from './components/ISOComponents/CountryISO'
import CountryLatLong from './components/LatLongComponents/CountryLatLong'
import EfficientRoute from './components/EfficientRouteComponents/EfficientRoute'

class App extends React.Component {
  componentDidMount(){
    this.props.fetchingCountries()
  }

  render(){
    return(
      <div className='app'>
        <Switch>
          <Route exact path='/' render={ ownProps => <Home {...ownProps}/> }/>
          <Route exact path='/iso/:id' render={ ownProps => <CountryISO {...ownProps}/> }/>
          <Route exact path='/lat/:lat_min-:lat_max/long/:long_min-:long_max' render={ ownProps => <CountryLatLong {...ownProps}/> }/>
          <Route exact path='/eff_route/:city1-:city2-:city3-:city4' render={ ownProps => <EfficientRoute {...ownProps}/> }/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect(null, { fetchingCountries })(App));
