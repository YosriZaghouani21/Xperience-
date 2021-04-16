const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const connectDB = require('./config/dbConnect');
const user = require('./services/userService/Routes/user');
const experienceRouter = require('./services/experienceService/Routes/experienceRouter');
// const cloudinary = require("cloudinary");
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

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// app.put("/profile/:id", async (req, res) => {
//   try {
//     const fileStr = req.body.data;
//     const uploadResponse = await cloudinary.uploader.upload(fileStr);
//     console.log(uploadResponse);
//     res.json({ msg: "yaya" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ err: "Something went wrong" });
//   }
// });

connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, err =>
  err ? console.log(err) : console.log(`server is running on PORT ${PORT}`)
);
