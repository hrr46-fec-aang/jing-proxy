# listingproxy

> Overview of the campsite listing
This listing app is one componite of a mock HipCamp (https://www.hipcamp.com/new-york/hawk-meadow-farm/shiitake-mushroom-camp#group_size=4). This component covers the overview of the listing, from the Hosted By avatar down to the "Have a question?" section. The description expands when "Read more" is selected. The info cards become modals when "More details" is clicked.

The following scripts are necessary for starting the app:
To start the server: npm start
To build webpack: npm run build
To seed the database: npm run db:seed
  Witin mongo, use listing database. There should be 100 entries
To test the front end: npm run testFE
To test the back end: npm run testBE

This application uses React to build the front end. MongoDB is used for the database. The app is hosted on the express server.