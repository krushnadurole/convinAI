import {
    ALL_CARDS_FAIL,
    ALL_CARDS_REQUEST,
    ALL_CARDS_SUCCESS,


    CARD_DETAILS_REQUEST,
    CARD_DETAILS_SUCCESS,
    CARD_DETAILS_FAIL,
    
    CLEAR_ERRORS,
    
    NEW_CARD_REQUEST,
    NEW_CARD_SUCCESS,
    NEW_CARD_FAIL,
    NEW_CARD_RESET,

    UPDATE_CARD_REQUEST,
    UPDATE_CARD_SUCCESS,
    UPDATE_CARD_FAIL,
    UPDATE_CARD_RESET,

    DELETE_CARD_REQUEST,
    DELETE_CARD_SUCCESS,
    DELETE_CARD_FAIL,
    DELETE_CARD_RESET,

} from "../constants/CardConstants";

export const newCardReducer = (state = { products: [] }, { type, payload }) => {

    switch (type) {
        case ALL_CARDS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ALL_CARDS_SUCCESS:
            return {
                loading: false,
               
            };
        case NEW_CARDS_SUCCESS:
            return {
                loading: false,
                products: payload,
            };
        case NEW_CARDS_FAIL:
            return {
                loading: false,
                error: payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const productDetailsReducer = (state = { product: {} }, { type, payload }) => {

    switch (type) {
        case CARD_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CARD_DETAILS_SUCCESS:
            return {
                loading: false,
                product: payload,
            };
        case CARD_DETAILS_FAIL:
            return {
                loading: false,
                error: payload,
            };
        case REMOVE_CARD_DETAILS:
            return {
                ...state,
                product: {},
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

// New Review Reducer
export const newReviewReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: payload,
            };
        case NEW_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

// New Product Reducer
export const newProductReducer = (state = { product: {} }, { type, payload }) => {
    switch (type) {
        case NEW_CARD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_CARD_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                product: payload.product,
            };
        case NEW_CARD_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case NEW_CARD_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

// New Product Reducer
export const productReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UPDATE_CARD_REQUEST:
        case DELETE_CARD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_CARD_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: payload,
            };
        case DELETE_CARD_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: payload,
            };
        case UPDATE_CARD_FAIL:
        case DELETE_CARD_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case UPDATE_CARD_RESET:
            return {
                ...state,
                isUpdated: false,
            };
        case DELETE_CARD_RESET:
            return {
                ...state,
                isDeleted: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const productReviewsReducer = (state = { reviews: [] }, { type, payload }) => {

    switch (type) { 
        case ALL_REVIEWS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ALL_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: payload,
            };
        case ALL_REVIEWS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const reviewReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case DELETE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_REVIEW_SUCCESS:
            return {
                loading: false,
                isDeleted: payload,
            };
        case DELETE_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case DELETE_REVIEW_RESET:
            return {
                ...state,
                isDeleted: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}