import React from 'react'
import EfficientRouteInfo from './EfficientRouteInfo'

const EfficientRouteContainer = props => {
  const findCountriesByCapital = () => {
    return props.countries.filter( country => {
      let cityParams = props.ownProps.match.params;

      for(let city in cityParams){
        if(country['capitalCity'] === cityParams[city]){
          return country
        }
      }
    })
  }

  const countries = findCountriesByCapital();

  return(
    <div className='main-container'>
      <h2>
        The Most Efficient Trip Including {props.ownProps.match.params.city1}, {props.ownProps.match.params.city2}, {props.ownProps.match.params.city3}, and {props.ownProps.match.params.city4} is:
      </h2>
      <EfficientRouteInfo countries={countries}/>
    </div>
  )
}

export default EfficientRouteContainer
