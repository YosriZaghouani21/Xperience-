import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import {rating, updateExperience} from '../../JS/actions';

const Ratings = experience => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);

  const addRate = newRating => {
    const exp = experience.experience;
    var ratings = [...exp.ratings];
    console.log(exp);
    console.log('ratings before ', ratings);
    var arr = ratings.filter(r => r.postedBy !== user._id);
    console.log('arr :', arr);
    ratings = [...arr];
    ratings.push({newRating, postedBy: user._id});
    console.log(ratings);

    // dispatch(updateExperience(experience.experience._id, {...experience.experience}));
  };
  return (
    <div>
      <ReactStars count={5} onChange={addRate} size={24} activeColor="#ffd700" />
    </div>
  );
};

export default Ratings;
