const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'National Parks API',
    description: 'This is to test routes for our National Parks API. Most routes will require an ID to view, edit, or delete specific national parks.',
  },
  host: 'nationalparkapi.onrender.com/',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
     host: 'csecontacts.onrender.com',
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);