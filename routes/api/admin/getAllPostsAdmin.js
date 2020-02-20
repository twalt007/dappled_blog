const db = require('../../../db');

module.exports = async (req,res) => {
    try{
        const { userId } = req.params;
        let output = {
            code: 422,
            errors: [],
            message: "Invalid GET Request"
        }
        if(!userId){
            output.errors.push('userId missing');
        }
        const[[ trueUserId = null ]] = await db.execute(`SELECT id FROM userAuth WHERE pid=?`, [userId]);
        if(!trueUserId){
            output.code = 404;
            output.errors.push('Specified userId not found');
        } 
        if (output.errors.length) {
            res.status(output.code).send(output);
            return;
        }
        const [allPosts] = await db.query(`
            SELECT pid AS postId, postTitle, createdAt, updatedAt 
            FROM posts 
            WHERE deletedAt IS NULL AND userId=?`,
            [trueUserId.id]);
        res.send(allPosts);
    }catch(error){
        console.log("error: ", error);
        res.status(500).send("Server error");
    }
}