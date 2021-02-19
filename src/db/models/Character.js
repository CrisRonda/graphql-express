import mongoose from "mongoose";

const Character = mongoose.model("Character", {
  name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  power: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  race: {
    type: String,
  },
});

export default Character;
