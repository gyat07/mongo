// PROGRAM 2b - Display First 5 Documents (limit and find)

// Create database
db.employee.insertMany([
  {'name':'A', age:20, salary:50000},
  {'name':'B', age:25, salary:55000},
  {'name':'C', age:23, salary:60000},
  {'name':'D', age:24, salary:60000},
  {'name':'E', age:21, salary:58000},
  {'name':'F', age:23, salary:60000}
])

// To display only name and salary
db.employee.find({}, {name:1, salary:1})

// To display first 5 docs
db.employee.find({}, {name:1, salary:1, _id:0}).limit(5)
