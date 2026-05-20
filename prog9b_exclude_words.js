// PROGRAM 9b - Exclude Documents with Certain Words or Phrases

// Note: Uses the catalog collection and index from Program 9a
// If running fresh, insert and create index first:

db.catalog.insertMany([
  {title:'Data science for Beginners',
    description:'An Introductory book on data science'},
  {title:'Advanced ML',
    description:'A deep dive into ML algorithms'},
  {title:'MongoDB in Action',
    description:'A comprehensive guide to MongoDB'},
  {title:'Data analytics with python',
    description:'Data Analysis techniques using python'},
  {title:'Introduction to Big data',
    description:'Basics of big data techniques'}
])

db.catalog.createIndex({title:'text', description:'text'})

// Query: Search for 'data' but exclude documents containing 'python'
db.catalog.aggregate([
  {
    $match: {$text: {$search: 'data'}}
  },
  {
    $match: {
      title: {$not: /python/},
      description: {$not: /python/}
    }
  }
])
