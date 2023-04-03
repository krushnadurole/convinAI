const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const errorMiddleware = require('./middlewares/error');
const cors = require('cors')
const app = express();

// config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: 'config/config.env' });
}

app.use(express.json());
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const user = require('./routes/userRoute');
const bucket = require('./routes/BucketRoute');
const card = require('./routes/CardRoute');
// const payment = require('./routes/paymentRoute');

app.use('/api/v1', user);
app.use('/api/v1', bucket);
app.use('/api/v1', card);
// app.use('/api/v1', payment);

// deployment
__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });
} else {
    app.get('/', (req, res) => {
        res.send('Server is Running! 🚀');
    });
}

// error middleware
app.use(errorMiddleware);

module.exports = app;