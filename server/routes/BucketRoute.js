const express = require('express');
const { getallbuckets, getProductDetails, updateBucket, deleteBucket, getProductReviews, deleteReview, createProductReview, createbucket, getAdminProducts, getProducts, getSingleBucketDetails } = require('../controllers/BucketController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const router = express.Router();

// router.route('/bucket').get(isAuthenticatedUser,getAllProducts);
router.route('/bucket/all').get(isAuthenticatedUser,getallbuckets);

// router.route('/products').get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router.route('/addbucket').post(isAuthenticatedUser, createbucket);

router.route('/bucket/:id')
    .put(isAuthenticatedUser ,updateBucket)
    .delete(isAuthenticatedUser, deleteBucket);

router.route('/bucket/:id').get(getSingleBucketDetails);

// router.route('/review').put(isAuthenticatedUser, createProductReview);

// router.route('/reviews')
//     .get(getProductReviews)
//     .delete(isAuthenticatedUser, deleteReview);

module.exports = router;