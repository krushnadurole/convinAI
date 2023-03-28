import { persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';
// import { createStore,  applyMiddleware } from 'redux';
import {  combineReducers } from 'redux';
import {  userReducer } from './reducers/userReducer';
import {  newCardReducer } from './reducers/newCardReducer';


const rootReducer = combineReducers({
    user: userReducer,
    newCard:newCardReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;



// import { persistReducer } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// import persistConfig from './persistConfig';
// // import { createStore, combineReducers, applyMiddleware } from 'redux';
// import {  combineReducers } from 'redux';
// // import thunk from 'redux-thunk';
// // import { composeWithDevTools } from 'redux-devtools-extension';
// import {  userReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducer';
// // import { newProductReducer,  productDetailsReducer, productReducer, productsReducer, } from './reducers/productReducer';
// import { newProductReducer, productReducer, productsReducer, } from './reducers/productReducer';
// import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from './reducers/orderReducer';


// const rootReducer = combineReducers({
//     user: userReducer,
   
//     products: productsReducer,
  
   
//     newOrder: newOrderReducer,
//     myOrders: myOrdersReducer,
    
//     orderDetails: orderDetailsReducer,
//     allOrders: allOrdersReducer,
//     order: orderReducer,
//     newProduct: newProductReducer,
//     product: productReducer,
//     users: allUsersReducer,
//     userDetails: userDetailsReducer,
   
  
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;