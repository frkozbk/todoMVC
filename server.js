const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const todo = require('./routes/api/todo');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const db =
  'mongodb+srv://faruk:frkozbk123@cluster0-ie39t.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/todo', todo);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
