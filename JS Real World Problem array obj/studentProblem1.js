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
  const restProduct = [];
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    for (let value in element) {
      if (value == "productName" && element[value] == productName) {
        restProduct.push(element);
      }
    }
  }

  return restProduct;
}

console.log(product("Laptop"));

//just Laptop element will be shown
