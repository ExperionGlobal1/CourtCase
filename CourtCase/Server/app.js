const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./apps/auth/routes');
const userRoutes = require('./apps/user/routes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(authMiddleware)
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(80);
