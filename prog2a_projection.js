// PROGRAM 2a - Select Certain Fields and Ignore Some Fields (Projection)

// Projection → refers to selecting only specific fields from documents while using find()

db.students.insertMany([
  {_id:1, name:'A', age:20, marks:75},
  {_id:2, name:'B', age:20, marks:80}
])

// Include only name, age, marks
db.students.find({}, {name:1, age:1, marks:1})

// Exclude dept
db.students.find({}, {dept:0})
