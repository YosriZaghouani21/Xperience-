const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const connectDB = require('./config/dbConnect');
const user = require('./services/userService/Routes/user');
const experienceRouter = require('./services/experienceService/Routes/experienceRouter');
const {cloudinary} = require('./config/cloudinary');
const {updateUser} = require('./services/userService/controllers/user.controller');

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(express.json());
app.use('/user', user);
app.use('/api', experienceRouter);
app.use(fileUpload());

connectDB();
const PORT = process.env.PORT || 5000;

//Message config
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

// Init Nexmo
const nexmo = new Nexmo(
  {
    apiKey: '2cdf3e5e',
    apiSecret: 'wa3h7DSXF4o14nxB',
  },
  {debug: true}
);

// Public folder setup
app.use(express.static(__dirname + '/../client/src/Component/Message'));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(express.json());
app.use('/user', user);
app.use('/api', experienceRouter);
app.use(fileUpload());

// Catch form submit
app.post('/', (req, res) => {
  // res.send(req.body);
  // console.log(req.body);
  const {number, text} = req.body;

  nexmo.message.sendSms('Vonage APIs', number, text, {type: 'unicode'}, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      const {messages} = responseData;
      const {['message-id']: id, ['to']: number, ['error-text']: error} = messages[0];
      console.dir(responseData);
      // Get data from response
      const data = {
        id,
        number,
        error,
      };

      // Emit to the client
      io.emit('smsStatus', data);
    }
  });
});
// Start server
const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Connect to socket.io
const io = socketio(server);
io.on('connection', socket => {
  console.log('Connected');
  io.on('disconnect', () => {
    console.log('Disconnected');
  });
});
