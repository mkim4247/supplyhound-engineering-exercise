import React from 'react'
import { connect } from 'react-redux'

class EfficientRouteInfo extends React.Component {
  render(){
    return(
      <div>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    countries: state.countries
  }
}

export default connect(mapStatetoProps)(EfficientRouteInfo)
