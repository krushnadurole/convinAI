const mongoose = require('mongoose');

const BucketsSchema = new mongoose.Schema({
    Title: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    Artist: {
        type: String,
        // required: true
    },
    image: {
        type: String,
        // required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: true
    },
    totalcount: {
        type: Number,
        // required: true,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Bucket", BucketsSchema);