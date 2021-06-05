module.exports = app => {
    const rooms = require("../controllers/room.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Hotel
    router.post("/", rooms.create);
  
    // Retrieve all Hotels
    router.get("/", rooms.findAll);
  
    // Find available Hotels
    router.get("/available", rooms.findAvailable);
  
    // Retrieve a single Hotel with id
    router.get("/:id", rooms.findOne);
  
    // Update a Hotel with id
    router.put("/:id", rooms.update);
  
    // Delete a Hotel with id
    router.delete("/:id", rooms.delete);
  
    // Delete all Hotel
    router.delete("/", rooms.deleteAll);
  
    app.use('/api/rooms', router);
  };