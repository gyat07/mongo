// PROGRAM 8a - Different Types of Indexes (Unique, Sparse, Compound, Multikey)

// ==================== UNIQUE INDEX ====================

// Creation
db.employees.insertMany([
  {name:'Alice', email:'alice@gmail.com', age:30,
    department:'HR', skills:['communication','recruitment']},
  {name:'Bob', email:'bob@gmail.com', age:25,
    department:'IT', skills:['javascript','mongodb']},
  {name:'Charlie', email:'charlie@gmail.com', age:28,
    department:'IT', skills:['python','mongodb']},
  {name:'David', email:'david@gmail.com', age:35,
    department:'Finance', skills:['excel','accounting']}
])

// Unique index
db.employees.createIndex({email:1}, {unique:true})

// Test unique - this will throw duplicate key error
db.employees.insertOne({
  name:'Eve',
  email:'alice@gmail.com',
  age:29,
  department:'IT',
  skills:['recruitment']
})

// ==================== SPARSE INDEX ====================

db.employees.createIndex({department:1}, {sparse:true})

db.employees.insertOne({
  name:'ABC',
  email:'abc@gmail.com',
  age:29,
  skills:['recruitment']
})

db.employees.find({email:'abc@gmail.com'}, {department:1})

// ==================== COMPOUND INDEX ====================

// Creation
db.courses.insertMany([
  {name:'Course1', tags:['db','mongodb'], level:'beginner'},
  {name:'Courses2', tags:['java','backend'], level:'intermediate'},
  {name:'Course3', tags:['mongodb','advanced'], level:'advanced'}
])

db.courses.createIndex({tags:1, level:1})

db.courses.find({tags:'mongodb', level:'advanced'})

// ==================== MULTIKEY INDEX ====================

// Creation
db.students.insertMany([
  {name:'Alice', subjects:['math','science']},
  {name:'Bob', subjects:['english','history']},
  {name:'Charlie', subjects:['math','english']}
])

db.students.createIndex({subjects:1})

db.students.find({subjects:'math'})
