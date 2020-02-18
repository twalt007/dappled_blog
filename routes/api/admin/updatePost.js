const db = require('../../../db');

module.exports = async (req,res) => {
    const {post} = req.body;
    console.log('geat all posts req content: ', post);
    res.send("getAllPostsAdmin set up; req content");
}