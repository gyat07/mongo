// PROGRAM 3b - Geospatial & Bitwise Selectors

// Insert documents
db.places.insertMany([
  {name:'Park', location:{type:'point', coordinates:[77.59, 12.97]}},
  {name:'Mall', location:{type:'point', coordinates:[77.60, 12.98]}},
  {name:'Hospital', location:{type:'point', coordinates:[77.58, 12.96]}}
])

// To create index
db.places.createIndex({location:'2dsphere'})

// $near operator (Type-Geospatial, use-find nearby locations)
db.places.find({
  location: {
    $near: {
      $geometry: {
        type: 'point',
        coordinates: [77.59, 12.97]
      },
      $maxDistance: 500
    }
  }
})

// $geoWithin (Geospatial, find inside an area)
db.places.find({
  location: {
    $geoWithin: {
      $centerSphere: [[77.59, 12.97], 0.01]
    }
  }
})

// Bitwise selectors
// Insert documents
db.devices.insertMany([
  {device:'sensor1', status:5},
  {device:'sensor2', status:3},
  {device:'sensor3', status:1},
  {device:'sensor4', status:4}
])

// $bitsAllSet - check bits are set, find devices where bit position 0 is set
db.devices.find({status:{$bitsAllSet:[0]}})

// $bitsAnySet - find devices where any of bit 0 or bit 1 is set
db.devices.find({status:{$bitsAnySet:[0,1]}})

db.devices.find({status:{$bitsAnySet:[1]}})

// $bitsAllClear - find devices where bit 1 is 0
db.devices.find({status:{$bitsAllClear:[1]}})
