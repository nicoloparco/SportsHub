const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    title: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true}
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Post;