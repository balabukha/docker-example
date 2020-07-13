const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send('API WORKS!')
})

app.listen(3000, () => {
  console.log('STARTED API');
})
