const WB_API = 'http://api.worldbank.org/v2/country?per_page=304&format=json';

export const fetchingCountries = () => {
  return dispatch => {
    fetch(WB_API)
    .then(response => {
      if(response.ok){
        return response.json();
      }
      throw new Error('Request failed');
    })
    .then(json => {
      console.log('Request success');
      let countries = json[1];
      dispatch(setCountries(countries));
    })
    .catch(error => console.log(error))
  };
};

const setCountries = countries => {
  return { type: "SET_COUNTRIES", countries }
}

export const selectCountryISO = countryISO => {
  return { type: "SELECT_COUNTRY", countryISO }
}

export const selectingCoordinates = (type, val) => {
  return (dispatch, getStore) => {
    let prevCoords = getStore().coordinates
    let newCoords = {...prevCoords}
    newCoords[type] = val
    dispatch(selectCoordinates(newCoords))
  }
}

const selectCoordinates = coordinates => {
  return { type: "SELECT_COORDINATES", coordinates }
}

export const selectCities = cities => {
  return { type: "SELECT_CITY", cities }
}
