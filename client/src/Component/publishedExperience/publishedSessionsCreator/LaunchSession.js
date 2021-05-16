import React from 'react';
import {useDispatch} from 'react-redux';
import emailjs from 'emailjs-com';
import ModalBase from '../../layout/ModalBase';
import {updateExperience} from '../../../JS/actions';

const LaunchSession = ({experience, el}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const dispatch = useDispatch();
  const launchSession = () => {
    el.isLaunched = true;
    el.launchDate = new Date().toDateString();
    dispatch(updateExperience(experience._id, {...experience}));
  };
  const sendLaunchSessionMail = () => {
    el.peopleInterrested.map((e, index) =>
      emailjs
        .send(
          'service_ltodfa4',
          'template_aezy7w2',
          {
            sessionDate: new Date(el.sessionDate).toLocaleDateString('fr-EG', options),
            to_name: e.userName,
            experience_title: experience.title,
            user_email: e.userEmail,
          },
          'user_D9wLZlfoJrXQgfo54ZKD6'
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        )
    );
  };
  return (
    <ModalBase
      className="text-danger"
      buttonLabel="Lancer"
      modalTitle="Lancer la session?"
      modalBody="êtes-vous sûr de vouloir lancer cette session ?"
      click={() => {
        launchSession();
        sendLaunchSessionMail();
      }}
      firstButton="Lancer"
      secondButton="Abandonner"
      clickDanger={() => {}}
    />
  );
};

export default LaunchSession;
