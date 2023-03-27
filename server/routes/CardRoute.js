const express = require('express');
const { newCard,getallcards} = require('../controllers/CardController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const router = express.Router();

router.route('/addcard').post(isAuthenticatedUser, newCard);
// router.route('/card/:id').get(isAuthenticatedUser, getSinglecardDetails);
router.route('/getallcards').get(isAuthenticatedUser, getallcards);




// router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

// router.route('/card/:id')
//     .put(isAuthenticatedUser, updatecard)
//     .delete(isAuthenticatedUser, deletecard);

module.exports = router;