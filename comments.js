// Create web server to handle comments
//
// 1. Create a web server using express
// 2. Create a route for POST /comments
// 3. Validate the incoming data
// 4. Create a new comment in the database
// 5. Send back the new comment as JSON
//
// POST /comments
// 1. Validate the incoming data
// 2. Create a new comment in the database
// 3. Send back the new comment as JSON
//
// POST /comments/:id
// 1. Validate the incoming data
// 2. Find the comment in the database
// 3. Update the comment in the database
// 4. Send back the updated comment as JSON
//
// DELETE /comments/:id
// 1. Find the comment in the database
// 2. Delete the comment in the database
// 3. Send back a success message as JSON
//
// GET /comments/:id
// 1. Find the comment in the database
// 2. Send back the comment as JSON
//
// GET /comments
// 1. Find all comments in the database
// 2. Send back the comments as JSON
//
// 1. Create a web server using express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');
const cors = require('cors');
const port = 3000;

app.use(cors());

// 2. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 3. Create a route for POST /comments
// 4. Validate the incoming data
// 5. Create a new comment in the database
// 6. Send back the new comment as JSON
app.use(bodyParser.json());
app.post('/comments', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const savedComment = await comment.save();
    res.json(savedComment);
  } catch (error) {
    res.status(422).json(error);
  }
});

// 7. Create a route for POST /comments/:id
// 8. Validate the incoming data
// 9. Find the comment in the database
// 10. Update the comment