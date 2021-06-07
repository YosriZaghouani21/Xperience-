import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import {rating} from '../../JS/actions';

const Ratings = () => {
  const dispatch = useDispatch();
  const experience = useSelector(state => state.experiencesReducers.experience);

  const addRate = newRating => {
    dispatch(rating(experience._id, newRating));
    console.log(newRating);
  };
  return (
    <div>
      <ReactStars count={5} onChange={addRate} size={24} activeColor="#ffd700" />
    </div>
  );
};

export default Ratings;
