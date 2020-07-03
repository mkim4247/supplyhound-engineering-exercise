import React from 'react'
import { connect } from 'react-redux'
import CountryISOContainer from './CountryISOContainer'
import Nav from '../Nav'

const CountryISO = props => {
  return(
    <div>
      <Nav />
      <CountryISOContainer countries={props.countries} ownProps={props}/>
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    countries: state.countries
  }
}

export default connect(mapStatetoProps)(CountryISO)
