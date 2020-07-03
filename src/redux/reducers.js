import { combineReducers } from 'redux';

const countriesReducer = ( state = [], action ) => {
  switch(action.type){
    case "SET_COUNTRIES":
      return action.countries;
    default:
      return state;
  };
};

const countryISOReducer = ( state = '', action ) => {
  switch(action.type){
    case "SELECT_COUNTRY":
      return action.countryISO;
    default:
      return state;
  }
}

const countryCoordinatesReducer = ( state = { 'lat-min': '', 'lat-max': '', 'long-min': '', 'long-max': '' }, action ) => {
  switch(action.type){
    case "SELECT_COORDINATES":
      return action.coordinates;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  countries: countriesReducer,
  countryISO: countryISOReducer,
  coordinates: countryCoordinatesReducer
});

export default rootReducer;
