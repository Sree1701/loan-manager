const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const applicationRoutes = require('./routes/applicationRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', applicationRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/loan-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.error('MongoDB connection error:', err));
