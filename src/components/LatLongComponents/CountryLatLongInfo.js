import React from 'react'
import { NavLink } from 'react-router-dom'

const CountryLatLongInfo = props => {
  return(
    <div style={{fontSize: '125%'}}>
      <NavLink to={`/iso/${props.country.id}`}>
        {props.country.capitalCity}
      </NavLink>
    </div>
  )
}

export default CountryLatLongInfo
