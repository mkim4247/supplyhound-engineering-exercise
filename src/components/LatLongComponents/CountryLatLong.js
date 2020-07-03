import React from 'react'
import { connect } from 'react-redux'
import CountryLatLongContainer from './CountryLatLongContainer'
import Nav from '../Nav'

const CountryLatLong = props => {
  return(
    <div>
      <Nav />
      <CountryLatLongContainer countries={props.countries} ownProps={props}/>
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    countries: state.countries
  }
}

export default connect(mapStatetoProps)(CountryLatLong)
