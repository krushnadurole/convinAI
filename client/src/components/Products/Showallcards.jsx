import React from 'react'
import { getallcards, clearErrors } from '../../actions/BucketAction';
import { useSnackbar } from 'notistack';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Showallcards = () => {

  const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const params = useParams();
    const location = useLocation();
    const { products, loading, error } = useSelector((state) => state.cards);

    useEffect(() => {
      if (error) {
          enqueueSnackbar(error, { variant: "error" });
          dispatch(clearErrors());
      }
      dispatch(getProducts(keyword, category, price, ratings, currentPage));
  }, [dispatch, keyword, category, price, ratings, currentPage, error, enqueueSnackbar]);

  return (
    <div>
      showalllcards
    </div>
  )
}

export default Showallcards