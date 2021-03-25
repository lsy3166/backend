const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const { Schema } = mongoose;
autoIncrement.initialize(mongoose);

const boardSchema = new Schema(
  {
    seq: {
      type: Number,
    },
    title: {
      type: String,
      required: "title cannot be blank",
    },
    email: {
      type: String,
      required: "email cannot be blank",
    },
    writer: {
      type: String,
      required: "writer cannot be blank",
    },
    count: {
      type: Number,
    },
    createAt: {
      type: String,
    },
  },
  { collection: "board" }
);

boardSchema.plugin(autoIncrement.plugin, {
  model: "board",
  field: "seq",
  startAt: 1,
  increment: 1,
});

module.exports = mongoose.model("board", boardSchema);
