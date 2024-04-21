const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');


// Enable CORS for all routes
app.use(cors());
// Middleware for parsing JSON
app.use(express.json());

// Define routes for serving quiz questions and handling answers
// Implement these routes in the next steps
// Route for serving quiz questions
const questions = [
  {
    question: 'What is Node.js primarily used for?',
    options: ['Building user interfaces', 'Server-side scripting', 'Database management', 'Mobile app development'],
    correctAnswer: 1 // Server-side scripting
  },
  {
    question: 'Which event-driven architecture is Node.js based on?',
    options: ['Observer pattern', 'Publisher-subscriber pattern', 'Singleton pattern', 'Factory pattern'],
    correctAnswer: 1 // Publisher-subscriber pattern
  },
  {
    question: 'Which module is used in Node.js to create a web server?',
    options: ['http', 'url', 'fs', 'path'],
    correctAnswer: 0 // http
  },
  {
    question: 'What is the default package manager for Node.js?',
    options: ['npm', 'yarn', 'bower', 'pip'],
    correctAnswer: 0 // npm
  },
  {
    question: 'Which of the following is NOT a core module in Node.js?',
    options: ['fs', 'http', 'crypto', 'react'],
    correctAnswer: 3 // react
  },
  {
    question: 'What does the event loop in Node.js do?',
    options: ['Handles HTTP requests', 'Executes asynchronous tasks', 'Encrypts data', 'Parses JSON'],
    correctAnswer: 1 // Executes asynchronous tasks
  },
  {
    question: 'What is the purpose of the package.json file in a Node.js project?',
    options: ['To store application data', 'To define project dependencies', 'To configure server settings', 'To write unit tests'],
    correctAnswer: 1 // To define project dependencies
  },
  {
    question: 'Which of the following is a popular Express.js middleware for handling HTTP requests?',
    options: ['passport', 'mongoose', 'cors', 'socket.io'],
    correctAnswer: 2 // cors
  },
  {
    question: 'What is the purpose of the cluster module in Node.js?',
    options: ['To create child processes', 'To manage database connections', 'To handle file I/O operations', 'To generate random numbers'],
    correctAnswer: 0 // To create child processes
  },
  {
    question: 'Which method is used to import modules in Node.js?',
    options: ['require()', 'import()', 'include()', 'load()'],
    correctAnswer: 0 // require()
  },
];

app.get('/quiz', (req, res) => {
    console.log("hello");
    res.json({questions});
  });
  
  // Route for handling quiz answers
  app.post('/quiz/submit', (req, res) => {
    console.log("submit question..........");
    const answers = req.body;
    console.log(answers);
    let score = 0;
    const feedback = [];
  
    // Calculate score and provide feedback
    questions.forEach((q, index) => {
      if (q.correctAnswer === answers[index]) {
        score++;
        feedback.push({ question: q.question, correct: true });
      } else {
        feedback.push({ question: q.question, correct: false, correctAnswer: q.options[q.correctAnswer] });
      }
    });
  
    res.json({ score, feedback });
  });
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
