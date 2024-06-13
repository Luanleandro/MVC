const express = require('express');
const app = express();
const port = 8080;

const userRoutes = require('./routes/Users');
app.use(express.json());
app.use('/', userRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
