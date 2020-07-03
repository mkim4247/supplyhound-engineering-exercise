import React from 'react'
import { connect } from 'react-redux'
import { selectCountryISO } from '../../redux/actions'
import { Form, Input } from 'semantic-ui-react'

const ISOInputForm = props => {
  const handleChange = event => {
    props.selectCountryISO(event.target.value);
  }

  const handleSubmit = event => {
    let country = props.countries.find( country => {
      return country.id === props.countryISO
    })
    if(country){
      event.preventDefault();
      event.target.reset()
      props.ownProps.history.push(`/iso/${props.countryISO}`);
    }
    else {
      alert("Please enter a valid ISO code.")
    }
  }

  return(
    <Form
      onSubmit={handleSubmit}>
      <Input
        type='text'
        onChange={handleChange}
        placeholder='3-Letter ISO Code'
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
    countries: state.countries,
    countryISO: state.countryISO
  }
}

export default connect(mapStatetoProps, { selectCountryISO })(ISOInputForm)
