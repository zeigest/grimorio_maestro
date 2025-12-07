const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

connectDB();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());

app.use('/api/auth',authRoutes);

app.get('/', (req, res) => {
  res.send('API Grimorio Maestro OK');
});

module.exports = app;