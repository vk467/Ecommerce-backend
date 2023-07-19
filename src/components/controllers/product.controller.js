import Product from '../models/product.model.js';

class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  addProduct = (req, res) => {
    const product = new Product(req.body.pid, req.body.pname, req.body.price);
    return res.status(201).send(this.productService.addProduct(product));
  };

  getProducts = (_, res) => res.status(200).send(this.productService.getProducts());

  getProduct = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(this.productService.getProduct(id));
  };
}

export default ProductController;