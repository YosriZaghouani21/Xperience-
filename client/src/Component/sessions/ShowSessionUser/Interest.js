import React from 'react';
import {Button} from 'reactstrap';
import {updateExperience} from '../../../JS/actions';
import {useDispatch} from 'react-redux';

const Interest = ({experience, el, user}) => {
  const dispatch = useDispatch();

  return (
    <Button
      className="btn-info"
      size="sm"
      onClick={() => {
        el.peopleInterrested.push({
          userId: user._id,
          userName: user.name,
          userEmail: user.email,
          userNumber: user.tel,
        });
        dispatch(updateExperience(experience._id, {...experience}));
      }}
    >
      S'intéresser
    </Button>
  );
};

export default Interest;
