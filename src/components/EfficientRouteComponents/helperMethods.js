import { getDistance } from 'geolib';
// getDistance(start, end, accuracy = 1)
// accuracy default is 1m
// start and end are objs w lat/long keys, ex: {latitude: 52.518611, longitude: 13.408056}

  let countries = [
    {
      "id": "ABW",
      "iso2Code": "AW",
      "name": "Aruba",
      "region": {
        "id": "LCN",
        "iso2code": "ZJ",
        "value": "Latin America & Caribbean "
      },
      "adminregion": {
        "id": "",
        "iso2code": "",
        "value": ""
      },
      "incomeLevel": {
        "id": "HIC",
        "iso2code": "XD",
        "value": "High income"
      },
      "lendingType": {
        "id": "LNX",
        "iso2code": "XX",
        "value": "Not classified"
      },
      "capitalCity": "Oranjestad",
      "longitude": "-70.0167",
      "latitude": "12.5167"
    },
    {
      "id": "AFG",
      "iso2Code": "AF",
      "name": "Afghanistan",
      "region": {
        "id": "SAS",
        "iso2code": "8S",
        "value": "South Asia"
      },
      "adminregion": {
        "id": "SAS",
        "iso2code": "8S",
        "value": "South Asia"
      },
      "incomeLevel": {
        "id": "LIC",
        "iso2code": "XM",
        "value": "Low income"
      },
      "lendingType": {
        "id": "IDX",
        "iso2code": "XI",
        "value": "IDA"
      },
      "capitalCity": "Kabul",
      "longitude": "69.1761",
      "latitude": "34.5228"
    },
    {
      "id": "AGO",
      "iso2Code": "AO",
      "name": "Angola",
      "region": {
        "id": "SSF",
        "iso2code": "ZG",
        "value": "Sub-Saharan Africa "
      },
      "adminregion": {
        "id": "SSA",
        "iso2code": "ZF",
        "value": "Sub-Saharan Africa (excluding high income)"
      },
      "incomeLevel": {
        "id": "LMC",
        "iso2code": "XN",
        "value": "Lower middle income"
      },
      "lendingType": {
        "id": "IBD",
        "iso2code": "XF",
        "value": "IBRD"
      },
      "capitalCity": "Luanda",
      "longitude": "13.242",
      "latitude": "-8.81155"
    },
    {
      "id": "ALB",
      "iso2Code": "AL",
      "name": "Albania",
      "region": {
        "id": "ECS",
        "iso2code": "Z7",
        "value": "Europe & Central Asia"
      },
      "adminregion": {
        "id": "ECA",
        "iso2code": "7E",
        "value": "Europe & Central Asia (excluding high income)"
      },
      "incomeLevel": {
        "id": "UMC",
        "iso2code": "XT",
        "value": "Upper middle income"
      },
      "lendingType": {
        "id": "IBD",
        "iso2code": "XF",
        "value": "IBRD"
      },
      "capitalCity": "Tirane",
      "longitude": "19.8172",
      "latitude": "41.3317"
    }
  ]

export const findEfficientRoute = cities => {
  let city1 = cities[0];
  let city2 = cities[1];
  let city3 = cities[2];
  let city4 = cities[3];

  let longestRoute;

  for(let i = 0; i < cities.length; i++){
    for(let j = i + 1; j < cities.length; j++){
      let distance = findDistanceBtwnCities(cities[i], cities[j]);

      if(distance.distance > longestRoute){
        longestRoute = distance
      }
    }
  }
}

const findDistanceBtwnCities = cities => {
  let city1 = cities[0];
  let city2 = cities[1];

  let coords1 = {
    latitude: city1['latitude'],
    longitude: city1['longitude']
  };

  let coords2 = {
    latitude: city2['latitude'],
    longitude: city2['longitude']
  };

  let distance = getDistance(coords1, coords2);

  return {
    start: city1,
    end: city2,
    distance: distance
  }
}
