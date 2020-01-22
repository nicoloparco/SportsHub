const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/posts"
);

const postSeed = [
    {
        title: "Example Post",
        author: "Dev Team",
        content: "This is an example showing how posts work on this site. Each post requires an Author, a Title, and some body Content. It will automatically give it a date time when created and begins with no comment or likes.",
        date: new Date(Date.now()),
        comments: [],
        upVotes: 0,
        downVotes: 0
    }
];

db.Post
.remove({})
.then(() => db.Post)
