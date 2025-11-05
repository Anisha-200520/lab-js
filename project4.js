// Create an array of product objects
const products = [
  { id: 1, name: "Pen", price: 10, quantity: 5 },
  { id: 2, name: "Notebook", price: 50, quantity: 0 },
  { id: 3, name: "Pencil", price: 5, quantity: 10 },
  { id: 4, name: "Eraser", price: 3, quantity: 0 },
  { id: 5, name: "Marker", price: 20, quantity: 2 }
];

//  Use filter() to get available items
const availableItems = products.filter(product => product.quantity > 0);
console.log("✅ Available Products:", availableItems);

//  Use reduce() to calculate total cart value
const totalCartValue = availableItems.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
console.log("💸 Total Cart Value:", totalCartValue);

// Use slice() and splice() to manipulate product list
const slicedProducts = products.slice(0, 3); // Get first 3 products
console.log("📦 Sliced Products:", slicedProducts);

const modifiedProducts = [...products]; // Clone before splicing
modifiedProducts.splice(1, 1); // Remove product at index 1
console.log("🗑️ After Splice (Removed index 1):", modifiedProducts);

// Use spread operator to clone and update product list
const updatedProduct = { ...products[0], price: 12 }; // Update price of first product
console.log("🛠️ Updated Product:", updatedProduct);

//  Create product object with method to print details
products.forEach(product => {
  product.printDetails = function() {
    console.log(`📝 ${this.name} - ₹${this.price} x ${this.quantity}`);
  };
});

// Print details of available items
availableItems.forEach(item => item.printDetails());

//  Use destructuring to extract product details
availableItems.forEach(item => {
  const { name, price, quantity } = item;
  console.log(`📋 Destructured: ${name}, ₹${price}, Qty: ${quantity}`);
});