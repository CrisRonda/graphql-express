import mongoose from "mongoose";

const User = mongoose.model("User", {
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  token: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
  },
});

export default User;
