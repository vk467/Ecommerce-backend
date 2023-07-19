import ProductController from '../controllers/product.controller.js'; 
import ProductService from '../services/product.service.js';
import ProductRouter from '../routers/product.router.js';

const productService = new ProductService();
const productController = new ProductController(productService);
const productRouter = new ProductRouter(productController);

export default {
  service: productService,
  controller: productController,
  router: productRouter.getRouter(),
};