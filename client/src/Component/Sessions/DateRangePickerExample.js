import React, {useState, useEffect} from 'react';
import 'react-nice-dates/build/style.css';
import {enGB} from 'date-fns/locale';
import {DatePicker} from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

function DateRangePickerExample() {
  const [date, setDate] = useState(new Date());
  var dateArray = [];
  const [nowDate, setNowDate] = useState(new Date());

  // const addDays = (days, x) => {
  //   date.setDate(date.getDate() + days);

  //   console.log('Date apres 7 jours : ' + date);
  //   console.log('Date d aujourdhui : ' + nowDate);
  // };
  const daysBetween = () => {
    setNowDate(date.setDate(nowDate.getDate() + 1));
    console.log(nowDate);
  };

  // useEffect(() => {
  //   addDays(7);
  // }, []);

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
      {/* <button onClick={() => addDays(7)}>ok</button> */}
      <button onClick={() => daysBetween()}>ok222222</button>
    </>
  );
}
export default DateRangePickerExample;

// function getDates(startDate, stopDate) {
//   var currentDate = startDate;
//   while (currentDate <= stopDate) {
//     dateArray.push(new Date(currentDate));
//     currentDate = currentDate.addDays(1);
//   }
//   return dateArray;
// }
