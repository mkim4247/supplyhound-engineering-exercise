import React from 'react'
import CitiesRouteInputForm from './CitiesRouteInputForm'
import CitiesRouteSelectForm from './CitiesRouteSelectForm'

const CitiesRouteContainer = props => {
  return(
    <div className='main-container'>
      <h3>
        Search for capital cities:
      </h3>
      <p>
        Select four cities from the list or enter their names below.
      </p>
      <CitiesRouteSelectForm ownProps={props.ownProps}/>
      {/*<CitiesRouteInputForm ownProps={props.ownProps}/>*/}
    </div>
  )
}

export default CitiesRouteContainer
