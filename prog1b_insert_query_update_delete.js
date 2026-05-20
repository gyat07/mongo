// PROGRAM 1b - Insert, Query, Update, Delete, Projection

// Create collection
db.createCollection("students")

// Insert one document
db.students.insertOne(
  {name:'Rahul', age:21, marks:78, dept:'CSE'}
)

// Insert multiple documents
db.students.insertMany([
  {name:'Arjun', age:20, marks:80, dept:'CSE'},
  {name:'Bhuvan', age:21, marks:85, dept:'AIML'},
  {name:'Chirag', age:20, marks:82, dept:'AIML'}
])

// Update one document
db.students.updateOne(
  {name:'Rahul'}, {$inc:{marks:5}}
)
db.students.find({name:'Rahul'})

// Delete one document
db.students.deleteOne({name:'Arjun'})

// Delete multiple documents
db.students.deleteMany({age:20})
