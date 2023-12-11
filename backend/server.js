const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const db = process.env.MONGO_URI;

mongoose.connect(db).then(() => {
  console.log('Connected to MongoDB');
});

// Import routes
const postRoutes = require('./routes/postRoutes');

// Use routes
app.use('/api/posts', postRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

module.exports = app;
