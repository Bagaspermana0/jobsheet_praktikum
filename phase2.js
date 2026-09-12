// JOBSHEET PRAKTIKUM: Advanced JavaScript & Data Structures for Web Development
// PHASE 2 (Bagian 5 - 8)

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  },
  {
    id: 3,
    title: "Headphones",
    price: 100,
    rating: 3.8,
    stock: 3,
    category: "audio",
    tags: ["audio", "electronics"],
    dimensions: { width: 15, height: 18, depth: 8 },
    reviews: [
      { user: "F", rating: 5, comment: "Great sound" },
      { user: "G", rating: 2, comment: "Broke easily" }
    ]
  }
];

// Bagian 5 — Map, Filter, Reduce
const laptopPrices = products
  .filter(p => p.category === "laptops")
  .map(p => p.price);

const averageLaptopPrice = laptopPrices.length
  ? laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length
  : 0;

function getStatistics(productsList) {
  if (!productsList || productsList.length === 0) {
    return {
      totalProducts: 0,
      averagePrice: 0,
      highestPrice: 0,
      lowestPrice: 0,
      totalStock: 0,
      averageRating: 0
    };
  }

  const totalProducts = productsList.length;
  const totalPrice = productsList.reduce((sum, p) => sum + p.price, 0);
  const averagePrice = totalPrice / totalProducts;
  const highestPrice = Math.max(...productsList.map(p => p.price));
  const lowestPrice = Math.min(...productsList.map(p => p.price));
  const totalStock = productsList.reduce((sum, p) => sum + p.stock, 0);
  const totalRating = productsList.reduce((sum, p) => sum + p.rating, 0);
  const averageRating = totalRating / totalProducts;

  return {
    totalProducts,
    averagePrice,
    highestPrice,
    lowestPrice,
    totalStock,
    averageRating
  };
}

// Bagian 6 — Searching (Linear Search)
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

function linearSearchById(productsList, targetId) {
  for (let i = 0; i < productsList.length; i++) {
    if (productsList[i].id === targetId) return i;
  }
  return -1;
}

// Bagian 7 — Binary Search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedProducts[mid].price === targetPrice) return mid;
    if (sortedProducts[mid].price < targetPrice) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Bagian 8 — Sorting
function bubbleSort(numbers) {
  const arr = [...numbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function sortProducts(productsList, sortBy) {
  const sorted = [...productsList];
  if (sortBy === "price-asc") {
    return sorted.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    return sorted.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    return sorted.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "title") {
    return sorted.sort((a, b) => a.title.localeCompare(b.title));
  }
  return sorted;
}

// Output Verifikasi Phase 2
console.log("=== PHASE 2 (Bagian 5 - 8) ===");
console.log("5.1 Average Laptop Price:", averageLaptopPrice);
console.log("5.2 Get Statistics:", getStatistics(products));
console.log("6.1 Linear Search index of 30 in [10, 20, 30, 40]:", linearSearch([10, 20, 30, 40], 30));
console.log("6.2 Linear Search By ID (target 2):", linearSearchById(products, 2));

const sortedNumbers = [10, 20, 30, 40, 50];
console.log("7.1 Binary Search index of 40:", binarySearch(sortedNumbers, 40));

const productsSortedByPrice = sortProducts(products, "price-asc");
console.log("7.2 Binary Search By Price (target $800):", binarySearchByPrice(productsSortedByPrice, 800));

const unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
console.log("8.1 Bubble Sort:", bubbleSort(unsortedNumbers));
console.log("8.2 Sort Products (price-desc):", sortProducts(products, "price-desc").map(p => `${p.title}: $${p.price}`));
