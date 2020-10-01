const product = { name: 'caneca', value: 1.50 };
const otherProduct = { ...product }; //Copia um objeto
otherProduct.name = 'outro produto';
otherProduct.value = 2.0;

// console.log(product, otherProduct);
console.log(Object.entries(product));
// console.log(Object.getOwnPropertyDescriptor(product, "name"));