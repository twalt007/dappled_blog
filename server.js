const express = require('express');
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const path = require('path');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, 'client','dist')));

app.use(routes);

app.get('/get-request', async (req, res)=>{
    const [ result ] = await db.query('SELECT * FROM posts');
    res.send({
        posts: result
    });
});

app.listen(PORT, () => {
    console.log("Server is listenint @ localhost: " + PORT)
});