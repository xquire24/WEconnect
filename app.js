import express from 'express';
import expressValidator from 'express-validator';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import bodyParser from 'body-parser';
import routes from './server/routes/route';

//
const port = parseInt(process.env.PORT, 10) || 9000;
// Set up the express app
const app = express();
// setup swagger
const swaggerDocument = YAML.load(`${process.cwd()}/swagger.yaml`);

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
routes(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

export default app;
