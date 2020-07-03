import React from 'react'
import LatLongInputForm from './LatLongInputForm'

const LatLongContainer = props => {
  return(
    <div className='main-container'>
      <h3>
        Search for Capital Cities:
      </h3>
      <p>
        Enter maximum and minimum latitude and longitudes to find the capital cities that are within that range.
      </p>
      <LatLongInputForm ownProps={props.ownProps}/>
    </div>
  )
}

export default LatLongContainer
