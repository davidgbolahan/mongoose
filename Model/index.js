const express =  require('express');

const mongoose = require('mongoose')
const routes = require('./routes')
const port = 3030;

const dbUrl = "mongodb+srv://gbolahandavid58:Dav@123456789@cluster0.sosnayi.mongodb.net/?retryWrites=true&w=majority"

mongoose 
  .connect(dbUrl, {useNewUrlParser: true})
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use('/api',routes);

    app.listen(port, () => {
      console.log(server running on : ${port})
    })
  })