// PROGRAM 9a - Text Search Using Catalog Data Collection

// Insertion
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

// Create index
db.catalog.createIndex({title:'text', description:'text'})

// Text search
db.catalog.find({$text:{$search:'data'}})

// Multiple search
db.catalog.find({$text:{$search:'data python'}})

// Exact search
db.catalog.find({$text:{$search:'"big data"'}})
