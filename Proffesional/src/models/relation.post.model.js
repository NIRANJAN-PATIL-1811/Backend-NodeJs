import mongoose from "mongoose";

const post_schema = mongoose.Schema({
  title: String,
  body: String,
  user_info: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const relation_post_mong = new mongoose.model('Post', post_schema);

export default relation_post_mong;