const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: [true, "Please enter product title"],
        trim: true
    },
    description: {
        type: String,
        // required: [true, "Please enter product description"]
    },
    // highlights: [
    //     {
    //         type: String,
    //         // required: true
    //     }
    // ],
    // specifications: [
    //     {
    //         title: {
    //             type: String,
    //             // required: true
    //         },
    //         description: {
    //             type: String,
    //             // required: true
    //         }
    //     }
    // ],
    Link: {
        type: String,
        // required: [true, "Please enter product price"]
    },
    bucketname: {
        type: String,
        // required: [true, "Please enter cutted price"]
    },
    // images: [
    //     {
    //         public_id: {
    //             type: String,
    //             // required: true
    //         },
    //         url: {
    //             type: String,
    //             // required: true
    //         }
    //     }
    // ],
    singer: {

        type: String,
        // required: true

    },
    Writer: {
        type: String,
        // required: [true, "Please enter product category"]
    },
    // ratings: {
    //     type: Number,
    //     default: 0
    // },
    // numOfReviews: {
    //     type: Number,
    //     default: 0
    // },
    // reviews: [
    //     {
    //         user: {
    //             type: mongoose.Schema.ObjectId,
    //             ref: "User",
    //             // required: true
    //         },
    //         name: {
    //             type: String,
    //             // required: true
    //         },
    //         rating: {
    //             type: Number,
    //             // required: true
    //         },
    //         comment: {
    //             type: String,
    //             // required: true
    //         }
    //     }
    // ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Card', cardSchema);