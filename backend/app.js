// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// // MongoDB Connection
// mongoose.connect('mongodb://20.20.20.59:28017/people-db', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error(err));

// // Define Schema and Model
// const personSchema = new mongoose.Schema({
//     name: String,
//     city: String
// });

// const Person = mongoose.model('Person', personSchema);

// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.get('/people', async (req, res) => {
//     const people = await Person.find().sort({ _id: -1 }); // Sort by latest entry
//     res.json(people);
// });

// app.post('/people', async (req, res) => {
//     const { name, city } = req.body;
//     const newPerson = new Person({ name, city });
//     await newPerson.save();
//     res.status(201).json(newPerson);
// });

// // Start server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the CORS package

const app = express();
const port = 3000;

// Enable CORS for all origins and allow all methods
const corsOptions = {
  origin: '*',  // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],  // Allow all common HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific headers if needed
};

app.use(cors(corsOptions));  // Apply CORS configuration globally

// MongoDB Connection
mongoose.connect('mongodb://20.20.20.59:28017/people-db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define Schema and Model
const personSchema = new mongoose.Schema({
    name: String,
    city: String
});

const Person = mongoose.model('Person', personSchema);

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/people', async (req, res) => {
    const people = await Person.find().sort({ _id: -1 }); // Sort by latest entry
    res.json(people);
});

app.post('/people', async (req, res) => {
    const { name, city } = req.body;
    const newPerson = new Person({ name, city });
    await newPerson.save();
    res.status(201).json(newPerson);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
