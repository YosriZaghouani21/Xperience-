import React, {useState, useEffect} from 'react';
import 'react-nice-dates/build/style.css';
import {enGB} from 'date-fns/locale';
import {DatePicker} from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

function DateRangePickerExample() {
  const [date, setDate] = useState(new Date());
  var dateArray = [];
  const [nowDate, setNowDate] = useState(new Date());

  const addDays = days => {
    date.setDate(date.getDate() + days);
    console.log('Date apres 7 jours : ' + date);
  };

  const daysBetween = () => {
    while (nowDate <= date) {
      dateArray.push(new Date(nowDate));
      new Date(nowDate.setDate(nowDate.getDate() + 1));
    }
    console.log(dateArray);
  };

  return (
    <>
      <DatePicker date={date} onDateChange={setDate} locale={enGB} format="dd/MM/yyyy HH:mm">
        {({inputProps, focused, addDays}) => (
          <input className={'input' + (focused ? '-focused' : '')} {...inputProps} />
        )}
      </DatePicker>
      <button
        onClick={() => {
          daysBetween();
        }}
      >
        ok222222
      </button>
      <button
        onClick={() => {
          addDays(7);
        }}
      >
        + 7 days
      </button>
    </>
  );
}
export default DateRangePickerExample;
