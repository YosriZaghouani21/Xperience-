import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import {enGB} from 'date-fns/locale';
import {DatePickerCalendar} from 'react-nice-dates';
import {getDay} from 'date-fns';

import 'react-nice-dates/build/style.css';
import {Button} from 'reactstrap';
const Session = () => {
  const [date, setDate] = useState();
  const [nowDate, setNowDate] = useState(new Date());

  //I used availableDate and dateAfter7Days to initialize the 7th day
  const availableDate = new Date();
  const dateAfter7Days = new Date(availableDate.setDate(availableDate.getDate() + 7));
  //initialize an empty array to push on it the days between
  var dateArray = [];
  var arrayobject = {};

  const daysBetween = () => {
    while (nowDate <= dateAfter7Days) {
      dateArray.push(new Date(nowDate));
      new Date(nowDate.setDate(nowDate.getDate() + 1));
    }

    console.log(arrayobject);
  };
  const modifiers = {disabled: date => getDay(date) === 6};
  return (
    <div className="col-xl-6">
      <Button
        onClick={() => {
          console.log(dateAfter7Days);
        }}
      >
        show available date
      </Button>

      <Button
        onClick={() => {
          daysBetween();
        }}
      >
        days between{' '}
      </Button>
      <p>Selected date: {date ? format(date, 'dd MMM yyyy', {locale: enGB}) : 'none'}.</p>
      <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} modifiers={modifiers} />
    </div>
  );
};
export default Session;
