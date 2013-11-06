node-angular-mongoose
=====================

A simple end to end implementation of data persistence using Angular to retrieve data, mongo (via mongoose) to store the data, and node to serve the application. I've purposefully not used any of the more popular packages, such as Express. 

The application has persists two models: people, tasks. Each task can be assigned to one person.

Each of these models has:

1. A partial html template, allowing the model to be listed, and added.
2. An AngularJS controller, that calls a service to retrive/persist the model.
3. A Node.js service that uses Mongoose to persist the model in a locally running instance of MongoDB.
4. A mongoose Schema definition.

In addition there are:

1. One AngularJS service (dataProvider) used by the AngularJS controllers to make calls to the REST interface, provided by Node.js
2. A single simple Node.js web server (web-server.js) that handles all web service requests, including REST requests.
3. A single mongoose bootstrapper that creates a connection to the local MondoDB service, and loads the model schemas.

To run locally:
1. Clone the repository
2. Download MongoDB from here: http://www.mongodb.org/downloads
3. npm mongoose
4. sudo ./mongod (from MondoDB /bin folder)
5. node ./scripts/web-server.js (from repository root folder)
