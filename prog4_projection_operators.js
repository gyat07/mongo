// PROGRAM 4 - Projection Operators ($, $elemMatch, $slice)

// Create collection and insert documents
db.students.insertMany([
  {_id:1, name:'Ravi', marks:[
    {subject:'Maths', score:85},
    {subject:'Science', score:92},
    {subject:'English', score:75}
  ]},
  {_id:2, name:'Anita', marks:[
    {subject:'Maths', score:88},
    {subject:'Science', score:90},
    {subject:'English', score:80}
  ]}
])

// Use of $ operator - return only the array element that matches condition
db.students.find(
  {'marks.subject':'Science'},
  {'marks.$':1, name:1}
)

// Use of $elemMatch projection operator
// Insert documents
db.products.insertMany([
  {_id:1, item:'laptop', reviews:[
    {user:'Amit', rating:4},
    {user:'John', rating:5},
    {user:'Sara', rating:3}
  ]},
  {_id:2, item:'Mobile', reviews:[
    {user:'Ravi', rating:5},
    {user:'Neha', rating:2}
  ]}
])

db.products.find({}, {reviews:{$elemMatch:{rating:{$gt:3}}}})

// $slice - projection operator
db.orders.find({}, {items:{$slice:3}})

db.orders.find({}, {items:{$slice:-2}})

db.orders.find({}, {items:{$slice:[1,2]}})
