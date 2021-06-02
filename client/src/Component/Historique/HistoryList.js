import React, {useEffect} from 'react';
import {Col} from 'reactstrap';
import {getExperiences, getProfile} from '../../JS/actions';
import HistoriqueTemplate from './HistoriqueTemplate';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../layout/Loader';

const HistoryList = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const experiences = useSelector(state => state.experiencesReducers.experiences);
  const user = useSelector(state => state.userReducer.user);
  const isLoading = useSelector(state => state.experiencesReducers.isLoading);
  const loading = useSelector(state => state.userReducer.loading);

  useEffect(() => {
    dispatch(getExperiences());
    dispatch(getProfile());
  }, [dispatch]);

  return isLoading && loading ? (
    <>
      <Loader />
    </>
  ) : user ? (
    <div ref={ref}>
      <Col xl="6" className="center">
        {experiences &&
          experiences.map(experience =>
            experience.sessions.map(session =>
              session.reservationDemand.map(reservation =>
                reservation.userId === user._id && reservation.status === 'paid' ? (
                  <HistoriqueTemplate
                    title={experience.title}
                    icone={
                      experience.type.title === 'en ligne' ? (
                        <i className="ni ni-laptop float-right" />
                      ) : (
                        <i className="fas fa-users float-right" />
                      )
                    }
                    experienceImg={experience.photo}
                    themes={experience.themes.map(el => (
                      <span>{el} </span>
                    ))}
                    activity={experience.activity}
                    creatorName={experience.user.name}
                    creatorTel={experience.user.phoneNumber}
                    creatorEmail={experience.user.email}
                    sessionDate={session.sessionDate}
                    time={` ${experience.startHour}-  ${experience.endHour}`}
                    destination={experience.city}
                    consulter={`/details/${experience._id}`}
                  />
                ) : (
                  <></>
                )
              )
            )
          )}
      </Col>
    </div>
  ) : (
    ''
  );
});

export default HistoryList;
