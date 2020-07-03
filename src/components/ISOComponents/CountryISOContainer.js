import React from 'react'
import { connect } from 'react-redux'
import { selectCountryISO } from '../../redux/actions'
import CountryISOInfo from './CountryISOInfo'
import ISOContainer from '../InputComponents/ISOContainer'

const CountryISOContainer = props => {
  const findCountryByISO = () => {
    return props.countries.find( country => {
      return country['id'] === props.ownProps.match.params.id
    });
  }

  return(
    <div className='main-container'>
      <CountryISOInfo country={findCountryByISO()}/>
      <ISOContainer ownProps={props.ownProps}/>
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    countryISO: state.countryISO
  }
}

export default connect(mapStatetoProps, { selectCountryISO })(CountryISOContainer)
