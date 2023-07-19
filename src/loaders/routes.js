import productModule from '../components/modules/product.module.js';

export default (app) => {
  app.use('/products', productModule.router);
};