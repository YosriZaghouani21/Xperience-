import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import {getProfile, rating} from '../../JS/actions';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Ratings = () => {
  const experience = useSelector(state => state.experiencesReducers.experience);
  const exp = experience.experience;
  const user = useSelector(state => state.userReducer.user);
  const ratingSomme = useSelector(state => state.experiencesReducers.experience.experience.ratings);

  const [newEdit, setNewEdit] = useState(true);
  const dispatch = useDispatch();
  var arr = ratingSomme.map(el => el.newRating);
  console.log(arr);
  console.log(ratingSomme.length);
  let somme = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    somme += arr[i];
  }
  var moy = somme / ratingSomme.length;
  console.log(moy);
  const [newRate, setNewRate] = useState(moy);

  const addRate = (e, newValue) => {
    e.preventDefault();
    setNewRate(newValue);
    dispatch(rating(experience.experience._id, {newRating: newValue, postedBy: user._id}));
  };

  const editRate = () => {
    exp &&
      exp.ratings &&
      exp.ratings.map(el => (el.postedBy == user._id ? setNewEdit(false) : setNewEdit(true)));
  };

  return (
    <div>
      {/* {exp &&
        exp.ratings &&
        exp.ratings.map(el => (el.postedBy == user._id ? setNewEdit(false) : setNewEdit(true)))} */}

      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Notes</Typography>
        <Rating name="simple-controlled" value={newRate} onChange={addRate} />
      </Box>
    </div>
  );
};

export default Ratings;
