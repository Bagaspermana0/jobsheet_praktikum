// JOBSHEET PRAKTIKUM: Advanced JavaScript & Data Structures for Web Development
// PHASE 1 (Bagian 1 - 4)

// Bagian 1 — JavaScript Fundamentals
function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 }
];

function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);
    result.push({ ...item, finalPrice });
  }
  return result;
}

// Bagian 2 — Data Representation & Array of Objects
const productsBagian2 = Array.from({ length: 30 }, (_, index) => {
  const id = index + 1;
  const categories = ["laptops", "phones", "audio", "accessories"];
  const category = categories[index % categories.length];
  return {
    id,
    title: `Product ${id}`,
    price: (id * 40) % 1200 + 50,
    category,
    stock: (id * 3) % 20
  };
});

function findProductById(products, id) {
  return products.find(p => p.id === id);
}

const lowStockProducts = productsBagian2.filter(p => p.stock < 10);

function updateStock(products, id, newStock) {
  return products.map(p =>
    p.id === id ? { ...p, stock: newStock } : p
  );
}

// Bagian 3 — Nested Data
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

const nestedTags = products.map(p => p.tags);

function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}

const reviewCounts = products.map(p => ({
  id: p.id,
  title: p.title,
  totalReviews: p.reviews.length
}));

const fiveStarReviews = products.flatMap(p => p.reviews.filter(r => r.rating === 5));

const avgReviewsPerProduct = products.map(p => {
  const total = p.reviews.reduce((sum, r) => sum + r.rating, 0);
  return {
    id: p.id,
    title: p.title,
    averageReviewRating: p.reviews.length ? total / p.reviews.length : 0
  };
});

const productWithMostReviews = products.reduce((max, p) =>
  p.reviews.length > max.reviews.length ? p : max
, products[0]);

const allRatings = products.flatMap(p => p.reviews.map(r => r.rating));

// Bagian 4 — Flattening Data
const allTags = products.flatMap(p => p.tags);
const allComments = products.flatMap(p => p.reviews.map(r => r.comment));

// Output Verifikasi Phase 1
console.log("=== PHASE 1 (Bagian 1 - 4) ===");
console.log("1.1 Calculate Discounted Price:", calculateDiscountedPrice(1000, 10));
console.log("1.2 Apply Discounts:", applyDiscounts(cart));
console.log("2.1 Find Product By ID (2):", findProductById(productsBagian2, 2));
console.log("2.2 Low Stock Count:", lowStockProducts.length);
console.log("2.3 Update Stock ID 1:", updateStock(productsBagian2, 1, 50)[0]);
console.log("3.1 Nested Tags:", nestedTags);
console.log("3.2 Products by Tag 'electronics':", findProductsByTag(products, "electronics").map(p => p.title));
console.log("3.3 Review Counts:", reviewCounts);
console.log("3.4 Five Star Reviews:", fiveStarReviews);
console.log("3.5 Avg Reviews Per Product:", avgReviewsPerProduct);
console.log("3.6 Product With Most Reviews:", productWithMostReviews.title);
console.log("3.7 All Ratings:", allRatings);
console.log("4.1 All Tags (flatMap):", allTags);
console.log("4.2 All Comments (flatMap):", allComments);
