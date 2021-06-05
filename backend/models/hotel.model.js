module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: String,
      address: String,
      description: String,
      stars: Number,
      phone: Number,
      roomsNumber: Number,
      minPrice: Number,
      maxPrice: Number,
      available: Boolean,
      rooms: [{type: mongoose.Schema.Types.ObjectId, ref: 'room'}]
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Hotel = mongoose.model("hotel", schema);
  return Hotel;
};
