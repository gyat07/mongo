// PROGRAM 5 - Aggregation Operations ($avg, $min, $max, $push, $addToSet)

// Insert documents
db.students.insertMany([
  {name:'A', dept:'CSE', marks:85},
  {name:'B', dept:'CSE', marks:78},
  {name:'C', dept:'ISE', marks:92},
  {name:'D', dept:'ISE', marks:88},
  {name:'E', dept:'ECE', marks:75},
  {name:'F', dept:'ECE', marks:80},
  {name:'G', dept:'CSE', marks:85}
])

// $avg - average
db.students.aggregate([{
  $group:{
    _id:'$dept',
    avgMarks:{$avg:'$marks'}
  }
}])

// $min, $max (Minimum & maximum marks)
db.students.aggregate([{
  $group:{
    _id:'$dept',
    minMarks:{$min:'$marks'},
    maxMarks:{$max:'$marks'}
  }
}])

// $sum - total marks and count
db.students.aggregate([{
  $group:{
    _id:'$dept',
    totalMarks:{$sum:'$marks'},
    totalStudents:{$sum:1}
  }
}])

// $push - list of students (Duplicates are allowed)
db.students.aggregate([{
  $group:{
    _id:'$dept',
    studentList:{$push:'$name'}
  }
}])

// $addToSet - unique students (Duplicates are not allowed)
db.students.aggregate([{
  $group:{
    _id:'$dept',
    uniqueStudents:{$addToSet:'$name'}
  }
}])
