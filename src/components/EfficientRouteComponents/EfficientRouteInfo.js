import React from 'react'
import { findMostEfficientRoute } from './helperMethods'
import CountryLatLongInfo from '../LatLongComponents/CountryLatLongInfo'

const EfficientRouteInfo = props => {
  const efficientRoute = props.countries.length > 0 ? findMostEfficientRoute(props.countries) : null

  return(
    <div>
      { efficientRoute ?

          <div>
            <h3>
              Starting City:
            </h3>
            <CountryLatLongInfo country={efficientRoute.route[0]}/>
            ({efficientRoute.route[0].name})
            <h3>
              Stop 1:
            </h3>
            <CountryLatLongInfo country={efficientRoute.route[1]}/> ({efficientRoute.route[1].name})
            <h3>
              Stop 2:
            </h3>
            <CountryLatLongInfo country={efficientRoute.route[2]}/> ({efficientRoute.route[2].name})
            <h3>
              Ending City:
            </h3>
            <CountryLatLongInfo country={efficientRoute.route[3]}/> ({efficientRoute.route[3].name})
            <h3>
              Total Distance: ~{Math.round(efficientRoute.distance/1000)} kms
            </h3>
            <div>

            </div>
          </div>
        : 
          null
      }
    </div>
  )
}


export default EfficientRouteInfo
