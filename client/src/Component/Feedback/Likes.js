import React, {useState} from 'react';
import {like, unlike} from '../../JS/actions';
import {useDispatch, useSelector} from 'react-redux';
const Likes = () => {
  const experience = useSelector(state => state.experiencesReducers.experience);
  const dispatch = useDispatch();
  const [likeState, setLikeState] = useState();
  const addLike = id => {
    dispatch(like(id));
  };
  const addunLike = id => {
    dispatch(unlike(id));
  };
  return (
    <div>
      <h1>Likes</h1>
      {/* <button
        className="bg-transparent border-0"
        onClick={() => {
          setLikeState(!likeState);
          addLike(experience.id);
        }}
      >
        {like ? <i className="fas fa-heart text-danger" /> : <i className="far fa-heart" />}
      </button> */}
      <i
        className="material-icons"
        onClick={() => {
          addLike(experience._id);
        }}
      >
        thumb_up
      </i>
    </div>
  );
};

export default Likes;
