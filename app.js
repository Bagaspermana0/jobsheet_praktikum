//JOBSHEET PRAKTIKUM
//Advanced JavaScript & Data Structures for Web Development

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
  }
];

// Poin 1
const allTags = products.map(p => p.tags);
console.log(allTags);

// Poin 2
function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}
console.log(findProductsByTag(products, "electronics"));

// Poin 3
const reviewCount = products.map(p => ({
  id: p.id,
  title: p.title,
  totalReviews: p.reviews.length
}));
console.log(reviewCount);

// Poin 4
const fiveStarReviews = [];
for (const product of products) {
  for (const review of product.reviews) {
    if (review.rating === 5) {
      fiveStarReviews.push(review);
    }
  }
}
console.log(fiveStarReviews);