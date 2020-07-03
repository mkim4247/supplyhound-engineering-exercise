import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import ISOContainer from './InputComponents/ISOContainer'
import LatLongContainer from './InputComponents/LatLongContainer'
import Nav from './Nav'

const Home = props => {
  return(
    <div>
      <Nav />
      <div className='main-container'>
        <h1>
          Travel Planner API
        </h1>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <ISOContainer ownProps={props}/>
            </Grid.Column>
            <Grid.Column>
              <LatLongContainer ownProps={props}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    countries: state.countries
  }
}

export default connect(mapStatetoProps)(Home)
