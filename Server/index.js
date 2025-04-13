const express = require('express')
const { ChatRoute } = require('./routes/ChatRoute.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Routes
app.use('/chat', ChatRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})