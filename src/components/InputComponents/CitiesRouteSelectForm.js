import React from 'react'
import { connect } from 'react-redux'
import { selectCities } from '../../redux/actions'
import { Form, Select, Input } from 'semantic-ui-react'

const CitiesRouteSelectForm = props => {
  const handleChange = (event, data) => {
    props.selectCities(data.value)
  }

  const handleSubmit = event => {
    let cities = props.countries.filter( country => {
      return props.cities.includes(country.capitalCity)
    })
    if(cities.length === 4){
      event.preventDefault();
      event.target.reset()
      props.ownProps.history.push(`/eff_route/${props.cities[0]}-${props.cities[1]}-${props.cities[2]}-${props.cities[3]}`);
    }
    else {
      alert("Please enter four valid capital cities.")
    }
  }

  const countries = props.countries.filter( country => {
    return country.capitalCity !== ""
  })

  const countryOptions = countries.map( country => {
    return {
      key: country.id,
      value: country.capitalCity,
      text: `${country.capitalCity} (${country.name})`
    }
  })

  return(
    <Form
      onSubmit={handleSubmit}>
      <Select
        style={{marginTop: '2vh', marginBottom: '2vh'}}
        placeholder="Select capital cities..."
        multiple
        onChange={handleChange}
        options={countryOptions} />
      <Input
        type='submit'
        value="SUBMIT"
        style={{marginTop: '2vh', marginBottom: '2vh'}}/>
    </Form>
  )
}

const mapStatetoProps = state => {
  return {
    cities: state.cities,
    countries: state.countries
  }
}

export default connect(mapStatetoProps, { selectCities })(CitiesRouteSelectForm)
