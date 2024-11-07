const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
console.log("Test1");

require('dotenv').config();
console.log("Test2");


console.log("MONGO_URI:", process.env.MONGO_URI);



const app = express();
app.use(cors());
app.use(express.json());



// Connect to MongoDB



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));






// Define a test route
app.get('/', (req, res) => res.send('API is running'));


const authRoutes = require('./routes/authRoutes');
app.use("/api", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
