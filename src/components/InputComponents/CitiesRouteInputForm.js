import React from 'react'
import { connect } from 'react-redux'
import { selectCities } from '../../redux/actions'
import { Form, Input } from 'semantic-ui-react'

const CitiesRouteInputForm = props => {
  const handleChange = event => {
    props.selectCities(event.target.value);
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

  return(
    <Form
      onSubmit={handleSubmit}>
      <Input
        type='text'
        onChange={handleChange}
        placeholder='City #1'
        style={{marginTop: '2vh', marginBottom: '2vh'}}/>
      <Input
        type='text'
        onChange={handleChange}
        placeholder='City #2'
        style={{marginTop: '2vh', marginBottom: '2vh'}}/>
      <Input
        type='text'
        onChange={handleChange}
        placeholder='City #3'
        style={{marginTop: '2vh', marginBottom: '2vh'}}/>
      <Input
        type='text'
        onChange={handleChange}
        placeholder='City #4'
        style={{marginTop: '2vh', marginBottom: '2vh'}}/>
      <br/>
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

export default connect(mapStatetoProps, { selectCities })(CitiesRouteInputForm)
