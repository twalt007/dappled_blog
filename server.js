const express = require('express');
const PORT = proccess.env.PORT || 3000;
const db = require('./db');
const app = express();
const path = require('path');


app.use(express.json());