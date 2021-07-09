module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        id: String,
        roomType: String,
        persons: Number,
        totalPrice: Number,
        checkInDate: Date,
        checkOutDate: Date,
        status: String,
        hotel: { type: mongoose.Schema.Types.ObjectId, ref: "hotel" },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Booking = mongoose.model("booking", schema);
    return Booking;
  };