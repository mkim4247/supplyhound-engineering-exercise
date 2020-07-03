import React from 'react'
import CountryLatLongInfo from './CountryLatLongInfo'

const CountryLatLongContainer = props => {
  const findCountriesByGeo = () => {
    return props.countries.filter( country => {
      let countryLat = parseInt(country['latitude'])
      let countryLong = parseInt(country['longitude'])

      let paramsLatMin = parseInt(props.ownProps.match.params.lat_min)
      let paramsLatMax = parseInt(props.ownProps.match.params.lat_max)
      let paramsLongMin = parseInt(props.ownProps.match.params.long_min)
      let paramsLongMax = parseInt(props.ownProps.match.params.long_max)

      return countryLat >= paramsLatMin && countryLat <= paramsLatMax && countryLong >= paramsLongMin && countryLong <= paramsLongMax
    })
  }

  const countries = findCountriesByGeo();

  return(
    <div className='main-container'>
      <h2>
        Capital Cities Found Between {props.ownProps.match.params.lat_min} - {props.ownProps.match.params.lat_max} Degrees Latitude and {props.ownProps.match.params.long_min} - {props.ownProps.match.params.long_max} Degrees Longitude.
      </h2>
      <h3>
        {countries.length} Results...
      </h3>
      {countries.map( country => {
        return <CountryLatLongInfo country={country} key={`${country.name}-${country.id}`}/>
      })}
    </div>
  )
}

export default CountryLatLongContainer
