import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  age: Number
});

const relation_user_mong = new mongoose.model('User', userSchema);

export default relation_user_mong;