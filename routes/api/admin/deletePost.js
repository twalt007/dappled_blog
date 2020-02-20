const db = require('../../../db');

module.exports = async (req,res) => {
    try{
        const {postId} = req.params;
        if(isNaN(postId)){
            res.status(422).send("Post Id incorrecto format");
            return;
        }
        if(postId){
            await db.execute(`
            UPDATE posts
            SET deletedAt = CURRENT_TIMESTAMP()
            WHERE id=?
            `, [postId]);
        };
        res.send("PATCH request for DeletedAt successfully sent");
    }
    catch(error){
        console.log('error: ', error);
        res.status(500).send("Server error");
    }
}