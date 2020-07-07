import React from 'react'
import EfficientRouteInfo from './EfficientRouteInfo'
import { findMostEfficientRoute, countries } from './helperMethods'

const EfficientRouteContainer = props => {
  console.log(findMostEfficientRoute(countries))

  return(
    <div>
      <EfficientRouteInfo />
    </div>
  )
}

export default EfficientRouteContainer
