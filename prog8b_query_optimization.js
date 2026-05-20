// PROGRAM 8b - Demonstrate Optimization of Queries Using Indexes

// Insertion
db.employees.insertMany([
  {name:'Alice', age:25, department:'HR'},
  {name:'Bob', age:30, department:'IT'},
  {name:'Charlie', age:28, department:'IT'},
  {name:'David', age:35, department:'Finance'},
  {name:'Eve', age:30, department:'HR'}
])

// Create index
db.employees.createIndex({age:1})

// Check execution stats
db.employees.find({age:30}).explain("executionStats")
