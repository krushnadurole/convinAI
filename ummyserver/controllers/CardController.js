const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const Card = require('../models/CardModel');
const ErrorHandler = require('../utils/errorHandler');
const sendEmail = require('../utils/sendEmail');

// Create New card
exports.newCard = asyncErrorHandler(async (req, res, next) => {

    const { title, description, Link, Cardname, singer, writer } = req.body;

    const cardExist = await Card.findOne({ Link });
    if (cardExist) {
        return next(new ErrorHandler("Card Already present", 400));
    }
    // const {authtoken} = localStorage.authtoken;
    // console.log(req.user._id);
    const card = await Card.create({
        title,
        description,
        Link,
        Cardname,
        singer,
        writer,
        user: req.user._id
    });

    res.status(201).json({
        success: true,
        card
    });
});

// ----------------------------------
// get all cards. 
exports.getallcards = asyncErrorHandler(async (req, res, next) => {

    const cards = await Card.find({ user: req.user._id });

    if (!cards) {
        return next(new ErrorHandler("cards Not Found", 404));
    }

    res.status(200).json({
        success: true,
        cards,
    });
});

// update card. 
exports.updateCard = asyncErrorHandler(async (req, res, next) => {

    let card = await Card.findById(req.params.id);

    if (!card) {
        return next(new ErrorHandler("Card Not Found", 404));
    }

    req.body.user = req.user.id;

    card = await Card.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(201).json({
        success: true,
        card
    });
});
// delete card. 
exports.deleteCard = asyncErrorHandler(async (req, res, next) => {

    const card = await Card.findById(req.params.id);

    if (!card) {
        return next(new ErrorHandler("Bucket Not Found", 404));
    }

    await card.remove();

    res.status(201).json({
        success: true
    });
});

// Get Single card Details
exports.getSingleCardDetails = asyncErrorHandler(async (req, res, next) => {

    const card = await Card.findById(req.params.id);
    // const card = await Card.findById(req.params.id).populate("user", "name email");

    if (!card) {
        return next(new ErrorHandler("Card Not Found", 404));
    }

    res.status(200).json({
        success: true,
        card
    });
});