const express = require('express');
const { getAllProducts, getProductDetails, updateProduct, deleteProduct, getProductReviews, deleteReview, createProductReview, createbucket, getAdminProducts, getProducts } = require('../controllers/BucketController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const router = express.Router();

router.route('/bucket').get(isAuthenticatedUser,getAllProducts);
router.route('/bucket/all').get(isAuthenticatedUser,getProducts);

// router.route('/products').get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router.route('/addbucket').post(isAuthenticatedUser, createbucket);

router.route('/bucket/:id')
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route('/product/:id').get(getProductDetails);

router.route('/review').put(isAuthenticatedUser, createProductReview);

router.route('/reviews')
    .get(getProductReviews)
    .delete(isAuthenticatedUser, deleteReview);

module.exports = router;