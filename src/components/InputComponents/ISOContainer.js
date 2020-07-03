import React from 'react'
import ISOSelectForm from './ISOSelectForm'
import ISOInputForm from './ISOInputForm'

const ISOContainer = props => {
  return(
    <div className='main-container'>
      <h3>
        Search for a country:
      </h3>
      <p>
        Select one from the list or enter it's 3-letter ISO code below.
      </p>
      <ISOSelectForm ownProps={props.ownProps}/>
      <ISOInputForm ownProps={props.ownProps}/>
    </div>
  )
}

export default ISOContainer
