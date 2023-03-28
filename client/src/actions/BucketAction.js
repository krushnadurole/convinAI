import axios from "axios";
import {
    ALL_BUCKETS_FAIL,
    ALL_BUCKETS_REQUEST,
    ALL_BUCKETS_SUCCESS,
    ALL_BUCKET_RESET,

    BUCKET_DETAILS_REQUEST,
    BUCKET_DETAILS_SUCCESS,
    BUCKET_DETAILS_FAIL,
    
    CLEAR_ERRORS,
    
    NEW_BUCKET_REQUEST,
    NEW_BUCKET_SUCCESS,
    NEW_BUCKET_FAIL,
    NEW_BUCKET_RESET,

    UPDATE_BUCKET_REQUEST,
    UPDATE_BUCKET_SUCCESS,
    UPDATE_BUCKET_FAIL,
    UPDATE_BUCKET_RESET,

    DELETE_BUCKET_REQUEST,
    DELETE_BUCKET_SUCCESS,
    DELETE_BUCKET_FAIL,
    DELETE_BUCKET_RESET,

} from "../constants/BucketConstants";


// add the buckets
export const CreateBucket = (bucket) => async (dispatch) => {
    try {
        dispatch({ type: NEW_BUCKET_REQUEST });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("http://localhost:4000/api/v1/addbucket", bucket, config);

        dispatch({
            type: NEW_BUCKET_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_BUCKET_FAIL,
            payload: error.response.data.message,
        });
    }
}



// Get All BUCKETs
export const getBuckets =() => async (dispatch) => {
        try {
            dispatch({ type: ALL_BUCKETS_REQUEST });

            let url = `http://localhost:4000/api/v1/BUCKETs/all`;
          
            const { data } = await axios.get(url);
            console.log(data);
            dispatch({
                type: ALL_BUCKETS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ALL_BUCKETS_FAIL,
                payload: error.response.data.message,
            });
        }
    };


    // delete bucket
export const deletebucket =() => async (dispatch) => {
        try {
            dispatch({ type: ALL_BUCKETS_REQUEST });

            let url = `http://localhost:4000/api/v1/BUCKETs/all`;
            
            const { data } = await axios.get(url);
            console.log(data);
            dispatch({
                type: ALL_BUCKETS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ALL_BUCKETS_FAIL,
                payload: error.response.data.message,
            });
        }
    };




// Get bucket Details
export const getBucketDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BUCKET_DETAILS_REQUEST });

        const { data } = await axios.get(`http://localhost:4000/api/v1/BUCKET/${id}`);

        dispatch({
            type: BUCKET_DETAILS_SUCCESS,
            payload: data.BUCKET,
        });
    } catch (error) {
        dispatch({
            type: BUCKET_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};



// Update bucket
export const updateBucket = (id, BUCKETData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_BUCKET_REQUEST });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`http://localhost:4000/api/v1/admin/BUCKET/${id}`, BUCKETData, config);

        dispatch({
            type: UPDATE_BUCKET_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_BUCKET_FAIL,
            payload: error.response.data.message,
        });
    }
}



// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}