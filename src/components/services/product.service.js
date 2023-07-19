class ProductService {
    constructor() {
      this.products = [];
    }
  
    addProduct = (product) => {
      this.products.push(product);
      return product;
    };
  
    getProducts = () => this.products;
  
    getProduct = (id) => {
      const product = this.products.find((u) => u.id === id);
      return product;
    };
  }
  
  export default ProductService;