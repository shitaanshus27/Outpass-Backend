const mongoose = require("mongoose");
const { Schema } = mongoose;

const hodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  collegeId: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});

const Hod = mongoose.model("Hod", hodSchema);

module.exports = Hod;
