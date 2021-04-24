import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import {enGB} from 'date-fns/locale';
import {DatePickerCalendar} from 'react-nice-dates';

import {getDay} from 'date-fns';
import 'react-nice-dates/build/style.css';
import {Button} from 'reactstrap';
const Session = () => {
  const [date, setDate] = useState();
  const [today, setToday] = useState(new Date());
  const [todayCopy, setTodayCopy] = useState(new Date());
  const [todayCopy1, setTodayCopy1] = useState(new Date());

  // sevenDays is created to be mapped in modifiers object
  const [sevenDays, setSevenDays] = useState([]);
  // first session is created to be mapped in modifers object
  const [firstSession, setFirstSession] = useState([]);
  // two days is created to be mapped in modfiers object
  const [twoDays, setTwoDays] = useState(new Date());
  // second session is created to be mapped in modifers object
  const [secondSession, setSecondSession] = useState([]);
  // two days is created to be mapped in modfiers object
  const [twoDays2, setTwoDays2] = useState(new Date());

  //dateAfter7Days is created to disable the 7 days of promotion
  const dateAfter7Days = new Date();
  new Date(dateAfter7Days.setDate(dateAfter7Days.getDate() + 7));

  //we created a copy of dateAfter7days to use it in the first session
  const daySeven = new Date(dateAfter7Days);

  //********session 1 */
  // start day of session one ( today +11)
  const sessionOneDay = new Date();
  new Date(sessionOneDay.setDate(todayCopy.getDate() + 11));

  //******session 2 */
  //start day of session two
  const sessionTwoDay = new Date();
  new Date(sessionTwoDay.setDate(todayCopy1.getDate() + 13));

  //initialize an empty array to push on it the days between
  const dateArray = [];
  //initialize an empty array to push on it the 4 days of the first session
  const session1 = [];
  //initialize an empty array to push on it the 2 days between 2 sessions (first and second session)
  const daysBetween = [];
  const session2 = [];
  //initialize an empty array to push on it the 2 days between 2 sessions(second and thirs session)
  const daysBetween2 = [];

  //create the 7 days of promotion
  useEffect(() => {
    while (today < dateAfter7Days) {
      dateArray.push(new Date(today).toDateString());
      new Date(today.setDate(today.getDate() + 1));
    }
    setSevenDays([...dateArray]);
  }, []);
  //create the first session
  useEffect(() => {
    for (var i = 0; i < 4; i++) {
      session1.push(new Date(daySeven).toDateString().toString());
      new Date(daySeven.setDate(daySeven.getDate() + 1));
    }
    setFirstSession([...session1]);
  }, []);
  //create the two days between the first and the second session
  useEffect(() => {
    for (var i = 0; i < 2; i++) {
      daysBetween.push(new Date(sessionOneDay).toDateString().toString());
      new Date(sessionOneDay.setDate(sessionOneDay.getDate() + 1));
    }
    setTwoDays([...daysBetween]);
  }, []);
  //create the second session
  useEffect(() => {
    for (var i = 0; i < 4; i++) {
      session2.push(new Date(sessionTwoDay).toDateString().toString());
      new Date(sessionTwoDay.setDate(sessionTwoDay.getDate() + 1));
    }
    setSecondSession([...session2]);
  }, []);

  //create the two days between the second and the third session
  useEffect(() => {
    for (var i = 0; i < 2; i++) {
      daysBetween2.push(new Date(sessionTwoDay).toDateString().toString());
      new Date(sessionTwoDay.setDate(sessionTwoDay.getDate() + 1));
    }
    setTwoDays2([...daysBetween2]);
  }, []);

  const modifiers = {
    disabled: date =>
      sevenDays.includes(date.toDateString().toString()) ||
      date.toDateString() === twoDays[0] ||
      date.toDateString() === twoDays[1] ||
      date.toDateString() === twoDays2[0] ||
      date.toDateString() === twoDays2[1],
    selected: date =>
      date.toDateString() === firstSession[0] ||
      date.toDateString() === firstSession[1] ||
      date.toDateString() === firstSession[2] ||
      date.toDateString() === firstSession[3] ||
      date.toDateString() === secondSession[0] ||
      date.toDateString() === secondSession[1] ||
      date.toDateString() === secondSession[2] ||
      date.toDateString() === secondSession[3],
  };
  const modifiersClassNames = {
    selected: '-selected',
  };
  return (
    <div className="col-xl-6">
      <p>Selected date: {date ? format(date, 'dd MMM yyyy', {locale: enGB}) : 'none'}.</p>
      <DatePickerCalendar
        date={date}
        onDateChange={setDate}
        locale={enGB}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
      />
    </div>
  );
};
export default Session;
