import React, {useState, useEffect} from 'react';
import 'react-nice-dates/build/style.css';
import {enGB} from 'date-fns/locale';
import {DatePicker} from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

function DateRangePickerExample() {
  const [date, setDate] = useState(new Date());

  const addDays = days => {
    date.setDate(date.getDate() + days);
    console.log(date);
  };
  useEffect(() => {
    addDays(7);
  }, []);

  return (
    <>
      <DatePicker date={date} onDateChange={setDate} locale={enGB} format="dd/MM/yyyy HH:mm">
        {({inputProps, focused, addDays}) => (
          <input
            className={'input' + (focused && addDays ? '-focused disabled' : '')}
            {...inputProps}
          />
        )}
      </DatePicker>
      <button onClick={() => addDays(7)}>ok</button>
    </>
  );
}
export default DateRangePickerExample;
