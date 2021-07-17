const db = require("../models");
const Hotel = db.hotels;

// Create and Save a new Hotel
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Hotel
  const hotel = new Hotel({
    name: req.body.name,
    city: req.body.city,
    address: req.body.address,
    description: req.body.description,
    stars: req.body.stars,
    phone: req.body.phone,
    roomsNumber: req.body.roomsNumber,
    minPrice: req.body.minPrice,
    maxPrice: req.body.maxPrice,
    available: req.body.available,
  });

  // Save Hotel in the database
  hotel
    .save(hotel)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Hotel.",
      });
    });
};

// Retrieve all Hotels from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Hotel.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving hotels.",
      });
    });
};

// Find a single Hotel with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Hotel.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "No found Hotel with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Hotel with id=" + id });
    });
};

// Update a Hotel by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Hotel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Hotel with id=${id}. Maybe Hotel was not found!`,
        });
      } else res.send({ message: "Hotel was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Hotel with id=" + id,
      });
    });
};
// Delete a Hotel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Hotel.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Hotel with id=${id}. Maybe Hotel was not found!`,
        });
      } else {
        res.send({
          message: "Hotel was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Hotel with id=" + id,
      });
    });
};

// Delete all Hotels from the database.
exports.deleteAll = (req, res) => {
  Hotel.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Hotels were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all hotels.",
      });
    });
};

// Find available Hotels
exports.findAvailable = (req, res) => {
  Hotel.find({ available: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving hotels.",
      });
    });
};

//Count Hotels
exports.countHotels = (req, res) => {
  Hotel.countDocuments()
    .then((data) => {
      //res.sendStatus(data.statusCode);
      res.send({
        hotel: `${data}`,
      });
    })

    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving hotels.",
      });
    });
};
