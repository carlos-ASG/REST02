const express = require('express');
const bodyParser = require('body-parser');

const projectRouters = require('./routes/projectRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/projects',projectRouters);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;