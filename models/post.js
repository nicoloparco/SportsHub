const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    content: {type: String, required: true},
    date: { type: Date, default: Date.now},
    comments: {type: Array},
    upVotes: { type: Number, default: 0},
    downVotes: { type: Number, default: 0}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;