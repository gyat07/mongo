// PROGRAM 6 - Aggregation Pipeline ($match, $group, $sort, $project, $skip)

// Inserting documents
db.sales.insertMany([
  {_id:1, product:'Laptop', category:'Electronics',
    price:60000, quantity:2, city:'Bangalore'},
  {_id:2, product:'Mobile', category:'Electronics',
    price:20000, quantity:5, city:'Chennai'},
  {_id:3, product:'Shirt', category:'clothing',
    price:1500, quantity:10, city:'Bangalore'},
  {_id:4, product:'Shoes', category:'clothing',
    price:2000, quantity:3, city:'Bangalore'},
  {_id:5, product:'Tablet', category:'Electronics',
    price:30000, quantity:3, city:'Bangalore'},
  {_id:6, product:'Jeans', category:'clothing',
    price:2000, quantity:6, city:'Chennai'}
])

// Aggregation pipeline
db.sales.aggregate([
  {
    $match: {category: 'Electronics'}
  },
  {
    $group: {
      _id: '$city',
      totalSales: {$sum: {$multiply: ['$price', '$quantity']}},
      avgPrice: {$avg: '$price'},
      maxPrice: {$max: '$price'}
    }
  },
  {
    $sort: {totalSales: -1}
  },
  {
    $project: {
      _id: 0,
      city: '$_id',
      totalSales: 1,
      avgPrice: 1,
      maxPrice: 1
    }
  },
  {
    $skip: 1
  }
])
