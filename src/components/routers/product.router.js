import express from 'express';

class ProductRouter {
  constructor(productController) {
    this.productController = productController;
  }

  getRouter() {
    const router = express.Router();
    router.route('/:id').get(this.productController.getProduct);
    router.route('/').get(this.productController.getProducts);
    router.route('/').post(this.productController.addProduct);
    return router;
  }
}

export default ProductRouter;