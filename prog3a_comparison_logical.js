// PROGRAM 3a - Comparison & Logical Selectors

// Create collection
db.students.insertMany([
  {_id:1, name:'Rani', age:20, marks:80},
  {_id:2, name:'Abi', age:20, marks:70},
  {_id:3, name:'Hema', age:20, marks:70},
  {_id:4, name:'Ram', age:20, marks:75},
  {_id:5, name:'Maggie', age:20, marks:90}
])

// Comparison operators
// $gt → greater than
db.students.find({marks:{$gt:75}})

// $lt → less than
db.students.find({marks:{$lt:75}})

// $eq → equal to
db.students.find({marks:{$eq:90}})

// $ne → not equal to
db.students.find({marks:{$ne:70}})

// $nin → not in list
db.students.find({marks:{$nin:[70,80]}})

// $gte → greater than or equal to
db.students.find({marks:{$gte:90}})

// $lte → lesser than or equal to
db.students.find({marks:{$lte:70}})

// $in → enlist
db.students.find({marks:{$in:[80,90]}})

// Logical selectors
// $and
db.students.find({$and:[{marks:{$gt:80}}, {age:{$lt:25}}]})

// $not
db.students.find({marks:{$not:{$lt:80}}})

// $or
db.students.find({$or:[{marks:{$gt:80}}, {age:{$lt:20}}]})

// $nor
db.students.find({$nor:[{marks:{$lt:80}}, {age:{$lt:20}}]})
