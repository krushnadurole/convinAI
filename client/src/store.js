import {   applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import persistedReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let initialState = {
   
    // userLogin: { userInfo: storageUserInfo }
};

const middleware = [thunk];


// export default store;




const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
// const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
