interface Product {
  price: number;
  name: string;
  quality: number;
}

const printProduct = (product: Product): void => {
  console.log(`${product.name} - $${product.price}`);
};
