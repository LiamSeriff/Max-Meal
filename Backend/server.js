const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Debugging Mongoose
mongoose.set('debug', true);

// Define a test route
app.get('/', (req, res) => res.send('API is running'));

// Route for getting recipes from Edamam API
app.get('/recipes/:query', async (req, res) => {
    const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)

    console.log(response.data);
    res.json(response.data);
})

const authRoutes = require('./routes/authRoutes');
app.use("/api", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Test direct MongoDB connection
const { MongoClient } = require('mongodb');
async function testConnection() {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    console.log('Connection to MongoDB Atlas successful');
    await client.close();
  } catch (error) {
    console.error('Direct connection error:', error);
  }
}
testConnection();
