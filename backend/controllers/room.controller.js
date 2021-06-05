const db = require("../models");
const Room = db.rooms;

// Create and Save a new Hotel
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Hotel
  const room = new Room({
    name: req.body.name,
    hotel: req.body.hotel,
  });

  // Save Hotel in the database
  room
    .save(room)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Room.",
      });
    });
};

// Retrieve all Hotels from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Room.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving rooms.",
      });
    });
};

// Find a single Hotel with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Room.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "No found Room with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Room with id=" + id });
    });
};

// Update a Hotel by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Room.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Room with id=${id}. Maybe Room was not found!`
        });
      } else res.send({ message: "Room was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Room with id=" + id
      });
    });
};
// Delete a Hotel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Room.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Room with id=${id}. Maybe Room was not found!`
        });
      } else {
        res.send({
          message: "Room was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Room with id=" + id
      });
    });
};

// Delete all Hotels from the database.
exports.deleteAll = (req, res) => {
    Room.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Rooms were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all rooms.",
      });
    });
};

// Find available Hotels
exports.findAvailable = (req, res) => {
    Room.find({ available: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving rooms."
      });
    });
};
