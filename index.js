import app from './src/app.js';
import routes from './src/loaders/routes.js';

routes(app);

app.listen(4000, () => {
  console.log('Server listening...');
});