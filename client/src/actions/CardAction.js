import axios from "axios";
import {
    ALL_CARDS_FAIL,
    ALL_CARDS_REQUEST,
    ALL_CARDS_SUCCESS,
    ALL_CARD_RESET,

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


// add the CARDs
export const CreateCard = (card) => async (dispatch) => {
    try {
        dispatch({ type: NEW_CARD_REQUEST });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("http://localhost:4000/api/v1/addCARD", card, config);

        dispatch({
            type: NEW_CARD_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_CARD_FAIL,
            payload: error.response.data.message,
        });
    }
}



// Get All CARDs
export const getcards =() => async (dispatch) => {
        try {
            dispatch({ type: ALL_CARDS_REQUEST });

            let url = `http://localhost:4000/api/v1/CARDs/all`;
           
            const { data } = await axios.get(url);
            console.log(data);
            dispatch({
                type: ALL_CARDS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ALL_CARDS_FAIL,
                payload: error.response.data.message,
            });
        }
    };


    // delete CARD
export const deletecard =() => async (dispatch) => {
        try {
            dispatch({ type: ALL_CARDS_REQUEST });

            let url = `http://localhost:4000/api/v1/CARDs/all`;
            
            const { data } = await axios.get(url);
            console.log(data);
            dispatch({
                type: ALL_CARDS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ALL_CARDS_FAIL,
                payload: error.response.data.message,
            });
        }
    };




// Get CARD Details
export const getcardDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CARD_DETAILS_REQUEST });

        const { data } = await axios.get(`http://localhost:4000/api/v1/CARD/${id}`);

        dispatch({
            type: CARD_DETAILS_SUCCESS,
            payload: data.CARD,
        });
    } catch (error) {
        dispatch({
            type: CARD_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};



// Update CARD
export const updatecard = (id, CARDData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_CARD_REQUEST });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`http://localhost:4000/api/v1/admin/CARD/${id}`, CARDData, config);

        dispatch({
            type: UPDATE_CARD_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_CARD_FAIL,
            payload: error.response.data.message,
        });
    }
}



// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}