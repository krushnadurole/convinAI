const Bucket = require('../models/BucketModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const SearchFeatures = require('../utils/searchFeatures');
const ErrorHandler = require('../utils/errorHandler');
const cloudinary = require('cloudinary');


// create new bucket
exports.createbucket = asyncErrorHandler(async (req, res, next) => {


    // const {title,description,artist,bucketname} = req.body;
    req.body.user = req.user._id;
    const product = await Bucket.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
});

// get all buckets 
exports.getallbuckets = asyncErrorHandler(async (req, res, next) => {
    const buckets = await Bucket.find();

    if (!buckets) {
        return next(new ErrorHandler("Buckets Not Found", 404));
    }

    res.status(200).json({
        success: true,
        buckets,
    });
});

// update bucket. 
exports.updateBucket = asyncErrorHandler(async (req, res, next) => {

    let bucket = await Bucket.findById(req.params.id);

    if (!bucket) {
        return next(new ErrorHandler("Bucket Not Found", 404));
    }

    req.body.user = req.user.id;

    bucket = await Bucket.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(201).json({
        success: true,
        bucket
    });
});
// delete a bucket.
exports.deleteBucket = asyncErrorHandler(async (req, res, next) => {

    const bucket = await Bucket.findById(req.params.id);

    if (!bucket) {
        return next(new ErrorHandler("Bucket Not Found", 404));
    }

    await bucket.remove();

    res.status(201).json({
        success: true
    });
});



exports.getSingleBucketDetails = asyncErrorHandler(async (req, res, next) => {

    const bucket = await Bucket.findById(req.params.id);

    if (!bucket) {
        return next(new ErrorHandler("Bucket Not Found", 404));
    }

    res.status(200).json({
        success: true,
        card
    });
});