const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://dbUser:Rp121964@cluster1.3203evk.mongodb.net/?retryWrites=true&w=majority';

const app = express();

// Connect to MongoDB using Mongoose. In this it is very imp. to take connection keys from MongoDB cluster 
// console.log('Sending data:', formData);
mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  contactNumber: String,
  mobileNumber: String,
  email: String,
  streetNumber: String,
  streetName: String,
  cityName: String,
  pinCode: String,
  dateOfBirth: Date,
  yearlyFees: Number,
  functionFees: Number,
  // ... add any other fields as needed
 
});

const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
   console.log('Received data:', req.body);
  const newUser = new User(req.body);
  newUser.save()
    .then(() => {
        res.status(200).send("User registered successfully");
    })
    .catch(err => {
        console.error('Database Save Error:', err);
        res.status(500).send("Error registering user");
    });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
