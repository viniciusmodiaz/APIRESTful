const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./controller/authController')(app);
require('./controller/userController')(app);

app.listen(process.env.APP_PORT);