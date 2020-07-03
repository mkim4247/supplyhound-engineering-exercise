import React from 'react'
import { connect } from 'react-redux'
import { selectingCoordinates } from '../../redux/actions'
import { Form, Input } from 'semantic-ui-react'

const LatLongInputForm = props => {
  const handleChange = event => {
    props.selectingCoordinates(event.target.name, event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.ownProps.history.push(`/lat/${props.coordinates['lat-min']}-${props.coordinates['lat-max']}/long/${props.coordinates['long-min']}-${props.coordinates['long-max']}`);
  }

  return(
    <div>
      <Form
        onSubmit={handleSubmit}>
        <Input
          type='number'
          name='lat-min'
          onChange={handleChange}
          value={props.coordinates['lat-min']} min={-90}
          required
          placeholder='Minimum Latitude'
          style={{marginTop: '2vh', marginBottom: '2vh'}}/>
        <br/>
        <Input
          type='number'
          name='lat-max'
          onChange={handleChange}
          value={props.coordinates['lat-max']}
          max={90}
          required
          placeholder='Maximum Latitude'
          style={{marginTop: '2vh', marginBottom: '2vh'}}/>
        <br/>
        <Input
          type='number'
          name='long-min'
          onChange={handleChange}
          value={props.coordinates['long-min']}
          min={-180}
          required
          placeholder='Minimum Longitude'
          style={{marginTop: '2vh', marginBottom: '2vh'}}/>
        <br/>
        <Input
          type='number'
          name='long-max'
          onChange={handleChange}
          value={props.coordinates['long-max']}
          max={180}
          required
          placeholder='Maximum Longitude'
          style={{marginTop: '2vh', marginBottom: '2vh'}}/>
        <br/>
        <Input
          type='submit'
          value="SUBMIT"
          style={{marginTop: '2vh', marginBottom: '2vh'}}/>
      </Form>
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    coordinates: state.coordinates
  }
}

export default connect(mapStatetoProps, { selectingCoordinates })(LatLongInputForm)
