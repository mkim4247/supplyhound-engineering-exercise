import React from 'react'
import { connect } from 'react-redux'
import Nav from '../Nav'
import EfficientRouteContainer from './EfficientRouteContainer'

const EfficientRoute = props => {
  return(
    <div>
      <Nav />
      <EfficientRouteContainer countries={props.countries} ownProps={props}/>
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    countries: state.countries
  }
}

export default connect(mapStatetoProps)(EfficientRoute)
