const express = require('express');
const PORT = process.env.PORT || 3002;
const cors = require('cors');
const bodyParser = require('body-parser');
const ApiError = require('./helpers/api_error');
global.ApiError = ApiError;
const routes = require('./routes')
const path = require('path');
const defaultErrorHandler = require('./middleware/default_error_handler');


const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'client','dist')));
app.use(express.static(path.resolve(__dirname, 'uploads')));

app.use(routes);

app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client','dist','index.html'));
})

app.use(defaultErrorHandler);

app.listen(PORT, () => {
    console.log("Server is listening @ localhost: " + PORT)
});