const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const Card = require('../models/CardModel');
const ErrorHandler = require('../utils/errorHandler');
const sendEmail = require('../utils/sendEmail');

// Create New Order
exports.newCard = asyncErrorHandler(async (req, res, next) => {

    const {title,description,Link,bucketname,singer,writer} = req.body;
    const cardExist = await Card.findOne({Link});
    if (cardExist) {
        return next(new ErrorHandler("Card Already present", 400));
    }
    // const {authtoken} = localStorage.authtoken;
    // console.log(req.user._id);
    const card = await Card.create({
        title,
        description,
        Link,
        bucketname,
        singer,
        writer,
        user:req.user._id
    });

    res.status(201).json({
        success: true,
        card
    });
});

// ----------------------------------


// update card. 
// delete card. 
// get card details

// get all cards. 
exports.getallcards = asyncErrorHandler(async (req, res, next) => {

    console.log( req.user._id );
    const cards = await Card.find({ user: req.user._id });

    if (!cards) {
        return next(new ErrorHandler("cards Not Found", 404));
    }

    res.status(200).json({
        success: true,
        cards,
    });
});





// Get Single Order Details
exports.getSingleCardDetails = asyncErrorHandler(async (req, res, next) => {

    const order = await Order.findById(req.params.id).populate("user", "name email");

    if (!order) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    res.status(200).json({
        success: true,
        order,
    });
});




// Delete Card
exports.deleteCard = asyncErrorHandler(async (req, res, next) => {
    
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    await order.remove();

    res.status(200).json({
        success: true,
    });
});
        
        // Get All Orders ---ADMIN
        // exports.getallcards = asyncErrorHandler(async (req, res, next) => {
        
        //     const orders = await Order.find();
        
        //     if (!orders) {
        //         return next(new ErrorHandler("Order Not Found", 404));
        //     }
        
        //     let totalAmount = 0;
        //     orders.forEach((order) => {
        //         totalAmount += order.totalPrice;
        //     });
        
        //     res.status(200).json({
        //         success: true,
        //         orders,
        //         totalAmount,
        //     });
        // });
        
        // Update Order Status ---ADMIN
        // exports.updateOrder = asyncErrorHandler(async (req, res, next) => {
        
        //     const order = await Order.findById(req.params.id);
        
        //     if (!order) {
        //         return next(new ErrorHandler("Order Not Found", 404));
        //     }
        
        //     if (order.orderStatus === "Delivered") {
        //         return next(new ErrorHandler("Already Delivered", 400));
        //     }
        
        //     if (req.body.status === "Shipped") {
        //         order.shippedAt = Date.now();
        //         order.orderItems.forEach(async (i) => {
        //             await updateStock(i.product, i.quantity)
        //         });
        //     }
        
        //     order.orderStatus = req.body.status;
            
        //     if (req.body.status === "Delivered") {
        //         order.deliveredAt = Date.now();
        //     }
        
        //     await order.save({ validateBeforeSave: false });
        
        //     res.status(200).json({
        //         success: true
        //     });
        // });
        
        // async function updateStock(id, quantity) {
        //     const product = await Product.findById(id);
        //     product.stock -= quantity;
        //     await product.save({ validateBeforeSave: false });
        // }