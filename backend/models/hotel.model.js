module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      id: String,
      name: String,
      city: String,
      address: String,
      description: String,
      stars: String,
      phone: String,
      roomsNumber: String,
      minPrice: String,
      maxPrice: String,
      available: String,
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
