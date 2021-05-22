import React from 'react';
import {Button} from 'reactstrap';
import {updateExperience} from '../../../JS/actions';
import {useDispatch} from 'react-redux';

const Disinterest = ({experience, el, user}) => {
  const dispatch = useDispatch();

  return (
    <Button
      className="text-info"
      size="sm"
      onClick={() => {
        const arr = el.peopleInterrested.filter(e => e.userId !== user._id);
        el.peopleInterrested = arr;
        dispatch(updateExperience(experience._id, {...experience}));
      }}
    >
      Ne plus s'intéresser
    </Button>
  );
};

export default Disinterest;
