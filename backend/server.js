const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
});

// Import routes
const postRoutes = require('./routes/postRoutes');

// Use routes
app.use('/api/posts', postRoutes);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

module.exports = app;
