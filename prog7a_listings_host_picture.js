// PROGRAM 7a - Find all listings with listing_url, name, address, host_picture_url
//              that have a host with a picture url

// Inserting documents
db.listingsandreviews.insertMany([
  {_id:1, listing_url:"https://example.com/listing1",
    name:'Cozy apartment',
    address:{street:'MG Road', city:'Bangalore'},
    host:{host_name:'Ravi', host_picture_url:"https://example.com/ravi.jpg"}
  },
  {_id:2, listing_url:"https://example.com/listings2",
    name:'Budget Room',
    address:{street:'Brigade Road', city:'Bangalore'},
    host:{host_name:'Sita', host_picture_url:""}
  },
  {_id:3, listing_url:"https://example.com/listing3",
    name:'Luxury Stay',
    address:{street:'AnnaNagar', city:'Chennai'},
    host:{host_name:'Arun', host_picture_url:"https://example.com/arun.jpg"}
  }
])

// Aggregation query
db.listingsandreviews.aggregate([
  {
    $match: {"host.host_picture_url": {$exists: true, $ne: ""}}
  },
  {
    $project: {
      _id: 0,
      listing_url: 1,
      name: 1,
      address: 1,
      host_picture_url: "$host.host_picture_url"
    }
  }
])
