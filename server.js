const express = require('express');
const db = require('./db');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/get-request', async (req, res)=>{
    const [ result ] = await db.query('SELECT * FROM posts');
    res.send({
        posts: result
    });
});

app.listen(PORT, () => {
    console.log("Server is listenint @ localhost: " + PORT)
});