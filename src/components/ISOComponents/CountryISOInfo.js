import React from 'react'
import PropTypes from 'prop-types'

const CountryISOInfo = props => {
  return(
    <div>
      <h1>
        {props.country.name}
      </h1>
      <div style={{fontSize: '125%'}}>
        Capital City: {props.country.capitalCity}
        <br/>
        <br/>
        ISO Code: {props.country.id}
      </div>
    </div>
  )
}

export default CountryISOInfo

CountryISOInfo.defaultProps = {
  country: {id: '', name: '', capitalCity: ''}
}

CountryISOInfo.propTypes = {
  country: PropTypes.object.isRequired
}
