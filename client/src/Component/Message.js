import React from 'react';
const numberInput = document.getElementById('number'),
  textInput = document.getElementById('msg'),
  scheduleSelect = document.getElementById('schedule'),
  button = document.getElementById('button'),
  response = document.querySelector('.response');

button.addEventListener('click', send, false);

// const socket = io();
// socket.on('smsStatus', function (data) {
//   if (data.error) {
//     response.innerHTML = '<h5>Text message sent to ' + data.error + '</h5>';
//   } else {
//     response.innerHTML = '<h5>Text message sent to ' + data.number + '</h5>';
//   }
// });

let timeOut;
const getTimeSchedule = ({time, number, text}) => {
  if (timeOut) clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    fetchServer({number, text});
  }, time * 60 * 1000);
};

const fetchServer = ({number, text}) => {
  console.log('send');
  fetch('/', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({number, text}),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};

function send() {
  const number = numberInput.value.replace(/\D/g, '');
  const text = textInput.value;
  const time = parseInt(scheduleSelect.value, 10);
  getTimeSchedule({number, text, time});
}

const Message = () => {
  return (
    <div>
      {' '}
      <div class="container">
        <h2>Send SMS Message</h2>
        <input type="tel" name="number" id="number" placeholder="Enter Phone Number..." />
        <input type="text" name="msg" id="msg" placeholder="Enter Text Message..." />
        <select name="schedule" id="schedule">
          <option value="0">Schedule time to send a message</option>
          <option value="1">After 1 minutes</option>
          <option value="3">After 3 minutes</option>
          <option value="5">After 5 minutes</option>
        </select>
        <input type="button" id="button" value="Send Text" class="button button-primary" />
        <p class="response"></p>
      </div>
    </div>
  );
};

export default Message;
