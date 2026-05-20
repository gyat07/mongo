// PROGRAM 7b - Using E-commerce collection write a query to display reviews summary

// Insertion
db.ecommerce.insertMany([
  {product:'Laptop', reviews:[
    {rating:5, date:new Date('2024-01-01')},
    {rating:4, date:new Date('2024-02-15')}
  ]},
  {product:'mobile', reviews:[
    {rating:3, date:new Date('2024-01-20')},
    {rating:5, date:new Date('2024-03-01')}
  ]}
])

// Aggregate
db.ecommerce.aggregate([
  {
    $unwind: '$reviews'
  },
  {
    $group: {
      _id: null,
      totalReviews: {$sum: 1},
      averageRating: {$avg: '$reviews.rating'},
      latestReview: {$max: '$reviews.date'},
      oldestReview: {$min: '$reviews.date'}
    }
  },
  {
    $project: {
      _id: 0,
      totalReviews: 1,
      averageRating: 1,
      latestReview: 1,
      oldestReview: 1
    }
  }
])
