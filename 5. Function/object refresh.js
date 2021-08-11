var products = [
  {
    productName: "Laptop",
    productId: 01,
    stock: 100,
  },
  {
    productName: "Microphone",
    productId: 02,
    stock: 10,
  },
  {
    productName: "Monitor",
    productId: 03,
    stock: 20,
  },
];

function product(productName) {
  const targetedProduct = [];
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    for (let value in element) {
      if (value == "productName" && element[value] == productName) {
        targetedProduct.push(element);
      }
    }
  }

  return targetedProduct;
}

console.log(product("Laptop"));

//just Laptop element will be shown
