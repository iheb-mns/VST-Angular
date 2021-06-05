module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        name: String,
        hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'hotel' },
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Room = mongoose.model("room", schema);
    return Room;
  };
  