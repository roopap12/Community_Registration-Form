const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://dbUser:Rp121964@cluster1.3203evk.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // ... add other fields as needed
});

const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
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
