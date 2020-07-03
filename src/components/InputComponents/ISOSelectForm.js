import React from 'react'
import { connect } from 'react-redux'
import { selectCountryISO } from '../../redux/actions'
import { Form, Select } from 'semantic-ui-react'

const ISOSelectForm = props => {
  const handleChange = (event, data) => {
    props.selectCountryISO(data.value)
  }

  const countryOptions = props.countries.map( country => {
    return {
      key: country.id,
      value: country.id,
      text: `${country.name} (${country.id})`
    }
  })

  return(
    <Form>
      <Select
        style={{marginTop: '2vh', marginBottom: '2vh'}}
        placeholder="Select a country..."
        onChange={handleChange}
        options={countryOptions} />
    </Form>
  )
}

const mapStatetoProps = state => {
  return {
    countries: state.countries,
    countryISO: state.countryISO
  }
}

export default connect(mapStatetoProps, { selectCountryISO })(ISOSelectForm)
