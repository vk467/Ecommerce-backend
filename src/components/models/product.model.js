class Product {
    constructor(pid, pname, price) {
      this.pid = pid;
      this.pname = pname;
      this.price = price;
    }
  
    toJSON() {
      return {
        pid: this.pid,
        pname: this.pname,
        price: this.price,
      };
    }
  }
  
  export default Product;