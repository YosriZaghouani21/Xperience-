import React from 'react';
import {useDispatch} from 'react-redux';
import ModalBase from '../../../layout/ModalBase';
import {updateExperience} from '../../../../JS/actions';
import SessionIndex from '../SessionIndex';

const DeleteSession = ({experience, el, index}) => {
  const dispatch = useDispatch();
  const deleteSession = () => {
    const arr = experience.sessions.filter(e => e._id !== el._id);
    experience.sessions = arr;
    dispatch(updateExperience(experience._id, {...experience}));
  };
  return (
    <p>
      <SessionIndex index={index} />
      <div className="float-right">
        <ModalBase
          className=" bg-transparent border-0"
          style={{boxShadow: 'none'}}
          buttonLabel={<i className="far fa-trash-alt text-danger" />}
          modalTitle="Supprimer la session?"
          modalBody="êtes-vous sûr de vouloir supprimer cette session ?"
          click={() => {
            deleteSession();
          }}
          firstButton="Supprimer"
          secondButton="Abandonner"
          clickDanger={() => {}}
        />
      </div>
    </p>
  );
};

export default DeleteSession;
