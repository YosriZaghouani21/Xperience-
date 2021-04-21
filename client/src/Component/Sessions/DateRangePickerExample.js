import React, {useState} from 'react';
import {DateRangePicker, START_DATE, END_DATE} from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import styled from 'styled-components';

const DateRangePickerWrapper = styled.div`
  display: flex;
  justify-content: center;

  .nice-dates-day {
    height: 50px !important;
  }

  .nice-dates-day:before {
    background-color: lightcoral;
  }
  .nice-dates-popover {
    border: 1px solid #ddd;
    width: 350px;
    transition: none;
  }
`;

export const DateRangePickerExample = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <DateRangePickerWrapper>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        minimumDate={new Date()}
        format="dd MMM yyyy"
      >
        {({startDateInputProps, endDateInputProps, focus}) => (
          <div className="date-range">
            <input
              className={'input' + (focus === START_DATE ? ' -focused' : '')}
              {...startDateInputProps}
              placeholder="Start date"
            />
            <span className="date-range_arrow" />
            <input
              className={'input' + (focus === END_DATE ? ' -focused' : '')}
              {...endDateInputProps}
              placeholder="End date"
            />
          </div>
        )}
      </DateRangePicker>
    </DateRangePickerWrapper>
  );
};
export default DateRangePickerExample;
