
# Completely New Project for Gujarati Community

Please watch the [video](https://www.youtube.com/watch?v=tIdNeoHniEY) before attempting this challenge. Now it's time to put your skills to the test with this form handling challenge.

## Instructions

Creating a registration form in a React app and connecting it to MongoDB is a common task. Here is a step-by-step guide to help you set it up:

1. Set Up Your Development Environment:
Install Node.js and npm.
Install MongoDB and set it up or use MongoDB Atlas, which is a cloud-based MongoDB service.
2. Create a New React App:

2. Create a New React App:
   npx create-react-app registration-app
   cd registration-app
3. Install Necessary Libraries:
   npm install axios express mongoose body-parser cors
4. Set Up Your Backend:
   Inside your project directory, create a new directory named server.
   Inside server, create a new file named server.js.
   Set up an Express server in server.js.
   Connect to your MongoDB instance using Mongoose.
   Define routes, for example, a POST route to handle registration data.
5. Create Your React Form:
   In your React app, create a component for the registration form. Use controlled components to handle form inputs and use Axios to send a POST request to your backend          server when the form is submitted.
6. Run Your Application:
   Start your backend server:
   cd server
   node server.js
   Start your React app:
7.Now, you should have a functioning registration form in your React app that sends data to your backend, which then saves it to MongoDB.

Remember to implement proper security measures, especially when dealing with user registration and authentication. For instance, passwords should be hashed before storage (using libraries like bcrypt), and consider using authentication strategies such as JWT for keeping users authenticated.
