const db = require('../../../db');

module.exports = async (req,res) => {
    res.send("success!")
    // try{
    //     const { userId='a9ec5c8d-455a-11ea-8fd0-a4db300c2566'} = req.params;
    //     let output = {
    //         code: 422,
    //         errors: [],
    //         message: "Invalid GET Request"
    //     }
    //     if(!userId){
    //         output.errors.push('userId missing');
    //     }
    //     const[[trueUserId = null]] = await db.execute(`SELECT id from userAuth where pid=?`, [userId]);
    //     if(!trueUserId){
    //         res.status(404).send('Specified userId not found');
    //     } 
    //     if (output.errors.length) {
    //         res.status(output.code).send(output);
    //         return;
    //     }
    //     const [[allPosts]] = await db.query(`
    //         SELECT pid AD postId, postTitle, updatedAt 
    //         FROM posts 
    //         WHERE userID=?`,
    //         [trueUserId.id]);
        
    // }
}