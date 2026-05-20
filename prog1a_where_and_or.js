// PROGRAM 1a - WHERE Clause, AND, OR Operations in MongoDB

// Create collection
db.createCollection("students")

db.students.insertOne(
  {name:'Rahul', age:20, marks:80}
)

db.students.insertMany([
  {name:'Ram', age:21, marks:85},
  {name:'Amulya', age:20, marks:79},
  {name:'Anagha', age:20, marks:90}
])

// AND operation
db.students.find({$and: [{age:{$gt:20}}, {marks:{$lt:90}}]})

// OR operation
db.students.find({$or: [{age:{$gt:20}}, {marks:{$gt:80}}]})
