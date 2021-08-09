//array of obj

const phones = [
  { name: "samsung", price: 30000, camera: "48MP" },
  { name: "apple", price: 70000, camera: "48MP" },
  { name: "nokia", price: 2000, camera: "2 MP" },
  { name: "Walton", price: 10000, camera: "48MP" },
];

// objects stored in array

let cheapest = phones[0];
for (const phone of phones) {
  //compare price only not full obj
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}

console.log("cheapest phone is =", cheapest);
