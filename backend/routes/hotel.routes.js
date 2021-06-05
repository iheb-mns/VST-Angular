module.exports = app => {
    const hotels = require("../controllers/hotel.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Hotel
    router.post("/", hotels.create);
  
    // Retrieve all Hotels
    router.get("/", hotels.findAll);
  
    // Find available Hotels
    router.get("/available", hotels.findAvailable);
  
    // Retrieve a single Hotel with id
    router.get("/:id", hotels.findOne);
  
    // Update a Hotel with id
    router.put("/:id", hotels.update);
  
    // Delete a Hotel with id
    router.delete("/:id", hotels.delete);
  
    // Delete all Hotel
    router.delete("/", hotels.deleteAll);
  
    app.use('/api/hotels', router);
  };