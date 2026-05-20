// PROGRAM 10 - Aggregation Pipeline to Illustrate Text Search on Catalog Data Collection

// Insertion
db.catalog.insertMany([
  {title:'Data science for beginners',
    description:'An Introductory book on data science'},
  {title:'Advanced ML',
    description:'A deep dive into ML algorithms'},
  {title:'MongoDB in action',
    description:'A comprehensive guide to MongoDB'},
  {title:'Data analytics with python',
    description:'Learn data analysis techniques using python'},
  {title:'Introduction to big data',
    description:'Basics of big data technologies'}
])

// Create index
db.catalog.createIndex({title:'text', description:'text'})

// Aggregate pipeline
db.catalog.aggregate([
  {
    $match: {$text: {$search: 'data'}}
  },
  {
    $match: {
      $and: [
        {title: {$not: /python/}},
        {description: {$not: /python/}}
      ]
    }
  },
  {
    $project: {
      title: 1,
      description: 1,
      score: {$meta: 'textScore'}
    }
  },
  {
    $sort: {score: {$meta: 'textScore'}}
  }
])
