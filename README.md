SupplyHound Engineering Exercise:
To get the app running locally:
 - Clone this repo
 - npm install to install required dependencies
 - npm start to start the local server

The local server runs on React's standard 3000 port, with the main page for this challenge living on http://localhost:3000/.

Overview:
This travel app is currently able to let users search for countries by their 3-letter ISO code and find capital cities that are within a given latitude and longitude range. On the home page, users have the choice to use a dropdown menu to select a country or input an ISO code themselves to go to a specific country's info page. Users may also enter a minimum and maximum latitude and longitude to see a list of capital cities found in that range.

Implementation:
This app was created using React with React-Router (through create-react-app) and Redux with Thunk. I decided to incorporate Redux to make state management more organized and predictable. It allowed me to pass state to only the components that needed it instead of worrying about prop drilling. The list of countries is initially fetched from the World Bank's Country API and stored in state for subsequent queries. Semantic-UI-React was used in small instances to add some minimal styling.

Reflection:
After reading through the World Bank Country API docs and practicing making requests to it, I focused on the first two deliverables to get some basic features in the app. Moving forward, to try and tackle the last two deliverables, I'd like to use a Ruby on Rails backend with some basic auth that uses bcrypt and JWT, so that users can make their own profiles and save countries/info to their account. After submitting this, I also plan to use the GeoLib library to help add the feature for finding the most efficient route between four capital cities, and look for other ways to refactor/streamline my code.
# supplyhound-engineering-exercise
