const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Serve static files from the frontend directory
const frontendPath = path.join(process.cwd(), 'frontend');
console.log('Serving static files from:', frontendPath);
app.use(express.static(frontendPath));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/departments', require('./routes/departments'));

// Serve frontend
app.get('*', (req, res) => {
    const indexPath = path.join(frontendPath, 'index.html');
    console.log('Serving index.html from:', indexPath);
    res.sendFile(indexPath);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
