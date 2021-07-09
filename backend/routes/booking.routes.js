module.exports = app => {
    const bookings = require("../controllers/booking.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Booking
    router.post("/", bookings.create);

    // Retrieve all Bookings
    router.get("/", bookings.findAll);

    // Accept
    router.put("/accept/:id", bookings.accept);

    // Decline
     router.put("/decline/:id", bookings.decline);

    app.use('/api/bookings', router);
  };