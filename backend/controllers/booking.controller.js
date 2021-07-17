const db = require("../models");
const Booking = db.bookings;

// Create and Save a new Booking
exports.create = (req, res) => {
  // Validate request
  if (!req.body.roomType) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Booking
  const booking = new Booking({
    roomType: req.body.roomType,
    persons: req.body.persons,
    totalPrice: req.body.totalPrice,
    checkOutDate: req.body.checkOutDate,
    checkInDate: req.body.checkInDate,
    status: "En attendant",
    hotel: req.body.hotel,
    user: req.body.user,
  });

  // Save Booking in the database
  booking
    .save(booking)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Booking.",
      });
    });
};

// Retrieve all Bookings from the database.
exports.findAll = (req, res) => {
  const roomType = req.query.roomType;
  var condition = roomType
    ? { roomType: { $regex: new RegExp(roomType), $options: "i" } }
    : {};

  Booking.find(condition)
    .populate("user")
    .populate("hotel")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings.",
      });
    });
};

// Accept a Booking by the id in the request
exports.accept = (req, res) => {
  const id = req.params.id;

  const booking = new Booking({
    _id: req.params.id,
    status: "Accepter",
  });

  Booking.findByIdAndUpdate({ _id: req.params.id }, booking)
    .then(() => {
      res.status(201).json({
        message: "Booking Accepted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

// Decline a Booking by the id in the request
exports.decline = (req, res) => {
  const id = req.params.id;

  const booking = new Booking({
    _id: req.params.id,
    status: "Refuser",
  });

  Booking.findByIdAndUpdate({ _id: req.params.id }, booking)
    .then(() => {
      res.status(201).json({
        message: "Booking Declined!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

//Count Bookings
exports.countBookings = (req, res) => {
  Booking.countDocuments()
    .then((data) => {
      //res.sendStatus(data.statusCode);
      res.send({
        booking: `${data}`,
      });
    })

    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings.",
      });
    });
};

//Find by ID User
exports.findOne = (req, res) => {
  //const id = req.params.id;
  const id = req.user;

  Booking.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "No found Booking with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Booking with id=" + id });
    });
};
