const db = require('../../../db');

module.exports = async (req,res) => {

    try{
        const { id, postTitle, postContent, postQuote } = req.body.post;
        //later will have postType and contentType, once have option to choose a blog type.  will allow user to choose a different blog type

        let output = {
            code: 422,
            errors: [],
            message: "Invalid POST Request"
        }
        if(!id){
            output.errors.push('Post Id missing');
        }
        //add additional data verification and checking, to make sure there are no quotes around id, make sure correct number format, etc==> 422 invalid id recieved
        if(!postTitle){
            output.errors.push('Post missing title');
        };
        if(!postContent){
            output.errors.push('Post missing content');
        };
        if(!postQuote){
            output.errors.push('Post missing quote');
        };
        if (output.errors.length) {
            res.status(output.code).send(output);
            return;
        }
        
        if( id && postTitle && postContent && postQuote){
            await db.execute(`
            UPDATE posts 
                SET postTitle = ?, postContent =?, postQuote=?
                WHERE id=?
                `, [postTitle, postContent, postQuote, id]);
            output.code = 200;
            delete output.errors;
            output.message = "PATCH request successful"
            res.send(output);
        }
    }
    catch(error){
        console.log("error: ", error);
        res.status(500).send("Server error");
    }
}