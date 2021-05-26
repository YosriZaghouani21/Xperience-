import React from 'react';
import {CustomInput} from 'reactstrap';
import {updateExperience} from '../../../../JS/actions';
import {useDispatch} from 'react-redux';

const LaunchSessionCustom = ({el, index, id, experience}) => {
  const dispatch = useDispatch();

  return (
    <>
      <CustomInput
        type="switch"
        id={index}
        name="customSwitch"
        label="Lancer la session"
        checked={el.isLaunched}
        onChange={e => {
          e.target.checked ? (el.isLaunched = true) : (el.isLaunched = false);
          {
            el.isLaunched ? (el.launchDate = new Date().toDateString()) : (el.launchDate = null);
          }
          dispatch(updateExperience(id, {...experience}));
        }}
      />
    </>
  );
};

export default LaunchSessionCustom;
